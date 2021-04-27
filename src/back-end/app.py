import json
from flask import Flask, jsonify, request, session, redirect, make_response
import jwt
from datetime import datetime, timedelta
from flask_cors import CORS, cross_origin
from database import Database
import sqlite3
from models import Student, Classes, ClassDetail
from functools import wraps
import uuid
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
cors = CORS(app)

app.config['CORS_HEADERS'] = 'Content-Type'
app.config['SECRET_KEY'] = 'vassa'


# This connection changes based on user specific path
app.config['DATABASE_PATH'] = 'C:\\GitHub\\cmsc-495\\src\\database\\db.db'


db = Database(app.config['DATABASE_PATH'])

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        try:
            token = request.headers.get('Authorization')
            if (token is None):
                return {'Error': 'Token is required'}
            data = jwt.decode(token, app.config['SECRET_KEY'])
            userID = data['userID']
            current_user = db.query_single('select firstname, lastname, userType, userID from Users where userID = ?', [userID])
            if (current_user is None):
                return {'Error': 'Token does not match user'}
            else:
                return f(current_user, *args, **kwargs)
        except Exception as err:
            print(err)
            return {'Error': 'Token is invalid'}
    return decorated


@app.route('/register', methods=['POST'])
@cross_origin()
def register():
    auth = request.json

    if(auth['emailaddress'] and auth['password']):
        user = db.query_single(
            'select * from Users where emailaddress = ?', [auth['emailaddress']])

        if(user):
            return {'error': 'Email is already in use'}, 400

        hashed_password = generate_password_hash(auth['password'])

        db.execute("insert into Users(firstname, lastname, emailaddress, password) values(?, ?, ?, ?)", [
                   auth['firstname'], auth['lastname'], auth['emailaddress'], hashed_password])

        return jsonify({'data': 'Successfully registered'})

    else:
        return {'error': 'Must provide email and password to register'}, 400


@app.route('/login', methods=['POST'])
def login():
    auth = request.json

    if(auth['emailaddress'] is None or auth['password']):

        user = db.query_single(
            'select userID, firstname, lastname, emailaddress, userType, password from users where emailaddress = ?', [auth['emailaddress']])

        if not user:
            return jsonify({'error': 'No records found for email'}, 401)

        if check_password_hash(user[5], auth['password']):
            token = jwt.encode({
                'userID': user[0],
                'firstname': user[1],
                'lastname': user[2],
                'userType': user[4],
                'exp': datetime.utcnow() + timedelta(minutes=30)}, app.config['SECRET_KEY']).decode('utf-8')
            return jsonify({'token': token, 'userID': user[0], 'userType': user[4], 'firstname': user[1], 'lastname': user[2]})
    else:
        return jsonify({'Error': 'Need to provide credentials'})


@app.route('/home', methods=['GET'])
@cross_origin()
@token_required
def authTest(current_user):
    return jsonify({
        'firstname': current_user[0],
        'lastname': current_user[1], 
        'usertype': current_user[2],
        'userID': current_user[3] 
    })


@app.route('/courseregistration', methods=['POST'])
@cross_origin()
@token_required
def classregistration(current_user):
    
    auth = request.json

    studentRecord = db.query_single("select studentId from student where userId = ?", [current_user[3]])

    if(auth['courseID']):

        enrolled = db.query_single(
            """
            select * 
            from enrollment e
            inner join student s on s.studentid = e.studentid
            inner join users u on u.userid = s.userid
            where u.userID = ? and e.courseid = ?""", [current_user[3],auth['courseID']]
        )

        #if studentID already enrolled for courseID....
        if (enrolled):
            return jsonify({'error': 'already enrolled for course'}, 401)

        #insert enrollmentID, studentID, courseID, dateEnrolled into enrollment table
        db.execute("insert into enrollment(studentID, courseID, dateEnrolled) values (?, ?, Date())", [
                   studentRecord[0], auth['courseID']])

        return jsonify({'data': 'Successfully enrolled'})

    else:
        return jsonify({'Error': 'Need to provide userID & courseID'})
    


@app.route('/classes', methods=['GET'])
@cross_origin()
@token_required
def allclasses(current_user):
    try:
        resp = db.query_all(
            """
                select 
                    c.courseID, 
                    courseName, 
                    creditHours, 
                    c.instructorID AS instructorId,
                    u.firstname AS instructorFirstName,
                    u.lastname AS instructorLastName,
                    i.departmentName,
                    0 as registered
                from course c
                INNER JOIN instructor i on i.instructorID = c.instructorID 
                INNER JOIN users u on u.userID = i.userID
                where courseID not in (
                    select courseID from enrollment e
                    inner join student s 
                    on s.studentID = e.studentID
                    inner join Users u
                    on s.userId = u.userID
                    where u.userID = ?
                )
                union
                select 
                    c.courseID, 
                    courseName, 
                    creditHours, 
                    c.instructorID AS instructorId,
                    u.firstname AS instructorName,
                    u.lastname AS instructorLastName,
                    i.departmentName,
                    1 as registered
                from course c
                INNER JOIN instructor i on i.instructorID = c.instructorID 
                INNER JOIN users u on u.userID = i.userID
                where courseID in (
                    select courseID from enrollment e
                    inner join student s 
                    on s.studentID = e.studentID
                    inner join Users u
                    on s.userId = u.userID
                    where u.userID = ?
                )
            """, [current_user[3], current_user[3]]
            )
        courses = []
        for course in resp:
            courses.append(Classes(data=course))
        return jsonify([result.serialized for result in courses])

    except Exception as err:
            print(err)
            return {'Error': 'Logic Error'}


@app.route("/coursedetail/<courseid>", methods=['GET'])
@cross_origin()
@token_required
def classdetail(current_user, courseid):
    try:
        resp = db.query_single(
        """
        select 
            c.courseID, 
            courseName, 
            creditHours, 
            c.instructorID AS instructorId,
            u.firstname AS instructorFirstName,
            u.lastname AS instructorLastName,
            i.departmentName
        from course c
        INNER JOIN instructor i on i.instructorID = c.instructorID 
        INNER JOIN users u on u.userID = i.userID
        where courseID = ?
        """, [courseid]
        )
        result = ClassDetail(data=resp)
        return jsonify(result.serialized)

    except Exception as err:
        print(err)
        return {'Error': 'Logic Error'}


if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1')

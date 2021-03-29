
import json
from flask import Flask, jsonify, request, session, redirect, make_response
import jwt
import datetime
from flask_cors import CORS, cross_origin
from database import Database
import sqlite3
from models import Student

app = Flask(__name__)
cors = CORS(app)

app.config['SECRET_KEY'] = 'thisisthesecretkey'

db = Database()

@app.route("/")
def testing():
    return redirect("/login", code=302)

@app.route("/login")
def login():
    auth = request.authorization

    if auth and auth.username == 'simon' and auth.password == 'password':
        token = jwt.encode({'user' : auth.username, 'exp' : datetime.datetime.utcnow() + datetime.timedelta(minutes=30)}, app.config['SECRET_KEY'])
        return jsonify({'token' : token.decode('UTF-8')}) and redirect("/student", code=302)

    return make_response('Could not verify!', 401, {'WWW-Authenticate' : 'Basic realm="Login Required"'})

@app.route("/student")
def get_all_student():
    resp = db.query_all('select id, name, email from users')
    students = []
    for student in resp:
        students.append(Student(data=student))
    return jsonify({
        'data': [result.serialized for result in students]
    })

@app.route("/student/<id>")
def get_student(id):
    resp = db.query_single('select id, name, email from users where Id = ?', id)
    result = Student(data=resp)
    return jsonify(result.serialized)


def query_resp(data, status=200):
    if isinstance(data, list) and len(data) == 0:
        return {'data': None, 'error': 'no records found'}, 404
    return {'data': data, 'error': None}, status

#comment
if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1')

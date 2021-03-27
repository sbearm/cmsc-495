
import json
from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
from database import Database
import sqlite3
from models import Student

app = Flask(__name__)
cors = CORS(app)

db = Database()


@app.route("/student")
def get_all_student():
    resp = db.query_all('select id, name, email from users')
    students = []
    for student in resp:
        students.append(Student(data=student))
    return jsonify({
        'data': [result.serialized for result in students]
    })
#student with id
@app.route("/student/<id>")
def get_student(id):
    resp = db.query_single('select id, name, email from users where Id = ?', id)
    result = Student(data=resp)
    return jsonify(result.serialized)


def query_resp(data, status=200):
    if isinstance(data, list) and len(data) == 0:
        return {'data': None, 'error': 'no records found'}, 404
    return {'data': data, 'error': None}, status


if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1')

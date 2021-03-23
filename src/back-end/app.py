
from flask import Flask
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)

@app.route("/")
def hello():
    return "Hello, World!"

@app.route('/test/<id>')
def get_sale(id):
  return "The id is " + str(id)

@app.route("/json")
def json():
    return query_resp({'id': 1, 'name': 'Sam Bearman'})


def query_resp(data, status=200):
  if isinstance(data, list) and len(data) == 0:
    return {'data': None, 'error': 'no records found'}, 404
  return {'data': data, 'error': None}, status

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1')

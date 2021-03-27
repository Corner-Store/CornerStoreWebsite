import time
from flask import Flask, request, jsonify, render_template
import db
import os


app = Flask(__name__,static_folder='../build', static_url_path='')


# Sets "NODE_ENV" to "production"
IS_PRODUCTION = os.environ.get('NODE_ENV') == 'production'
# DEBUG = True if not IS_PRODUCTION else False
PORT = 5000 if not IS_PRODUCTION else os.environ.get('PORT')

@app.route('/')
def index():
	return app.send_static_file('index.html')


@app.route('/businesses')
def get_all_business_names():
	try:
		connection = db.get_connection()
		names = db.get_all_business_names(connection)
		return {'names': str(names)}
	except Exception as e:
		return {'error': str(e)}

@app.route('/search', methods =['POST'])
def search():
	try:
		connection = db.get_connection()
		searchInput = request.form['input']
		businesses = db.search(connection, searchInput)
		return jsonify(businesses)
	except Exception as e:
		return {'error': str(e)}

@app.route("/favicon.ico")
def favicon():
    return "", 200

@app.errorhandler(404)
def not_found(e):
	return app.send_static_file('index.html')

if __name__=="__main__":
    app.run(debug=False, host='0.0.0.0', port=PORT)

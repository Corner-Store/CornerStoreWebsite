import time
from flask import Flask, request, jsonify, json
import db
import json

#Temporary code: to be changed later
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/')
def get_current_time():
	return {'time': time.time()}


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
		businesses = db.search(connection, searchInput.lower())
		print(jsonify(results =businesses))
		return jsonify(businesses)
	except Exception as e:
		return {'error': str(e)}


import time
from flask import Flask, request, jsonify
import db

#Temporary code: to be changed later

app = Flask(__name__)


@app.route('/time')
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
		searchInput = request.json
		businesses = db.search(connection, searchInput)
		console.log(businesses)
		return jsonify(businesses)
	except Exception as e:
		return {'error': str(e)}


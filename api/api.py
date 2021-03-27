import time
from flask import Flask, request, jsonify
import db

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


#search business
@app.route('/search', methods=['POST'])
def search():
	try:
		connection = db.get_connection()
		searchInput = request.form['input']
		businesses = db.search(connection, searchInput)
		return jsonify(businesses)
	except Exception as e:
		return {'error': str(e)}


#get a list of industries
@app.route('/industries', methods=['GET'])
def listOfCategories():
	try:
		connection = db.get_connection()
		industries = db.getIndustries(connection)
		return jsonify(industries)
	except Exception as e:
		return {'error': str(e)}


#provide a list of businesses in industries
@app.route('/industries/<industry_name>/businesses', methods=['GET'])
def businessesInCategories(industry_name):
	try:
		connection = db.get_connection()
		businessNames = db.getBusinessNamesByIndustries(connection, industry_name)
		return jsonify(businessNames)
	except Exception as e:
		return {'error': str(e)}
import time
from flask import Flask, request, jsonify, render_template
import db
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Sets "NODE_ENV" to "production"
IS_PRODUCTION = os.environ.get('NODE_ENV') == 'production'
# DEBUG = True if not IS_PRODUCTION else False
PORT = 5000 if not IS_PRODUCTION else os.environ.get('PORT')

@app.route('/')
def index():
	return "<h1>Welcome to Cornerstore Backend<h1>"

@app.route('/api/businesses')
def get_all_business_names():
	try:
		connection = db.get_connection()
		names = db.get_all_business_names(connection)
		return {'names': str(names)}
	except Exception as e:
		return {'error': str(e)}


#search business
@app.route('/api/search', methods=['POST'])
def search():
	try:
		connection = db.get_connection()
		searchInput = request.form['search']
		locationInput = request.form['location']
		businesses = db.search(connection, searchInput, locationInput)
		return jsonify(businesses)
	except Exception as e:
		return {'error': str(e)}

#get a list of industries
@app.route('/api/industries', methods=['GET'])
def listOfCategories():
	try:
		connection = db.get_connection()
		industries = db.getIndustries(connection)
		return jsonify(industries)
	except Exception as e:
		return {'error': str(e)}


#provide a list of businesses in industries
@app.route('/api/industries/<industry_name>/businesses', methods=['GET'])
def businessesInCategories(industry_name):
	try:
		connection = db.get_connection()
		businessNames = db.getBusinessNamesByIndustries(connection, industry_name)
		return jsonify(businessNames)
	except Exception as e:
		return {'error': str(e)}

@app.errorhandler(404)
def not_found(e):
	return "<h1>404 Page Not Found<h1>"

if __name__=="__main__":
    app.run(debug=False, host='0.0.0.0', port=PORT)

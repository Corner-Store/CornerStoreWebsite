import time
from flask import Flask, request, jsonify
import db

#Temporary code: to be changed later
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/')
def display():
	return render_template('index.html')


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
if __name__=="__main__":
	const port = process.env.PORT || 3000
    app.run(debug=DEBUG, host='0.0.0.0', port=PORT)

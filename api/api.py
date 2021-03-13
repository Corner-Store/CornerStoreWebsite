import time
from flask import Flask
import db

#Temporary code: to be changed later

app = Flask(__name__)


@app.route('/time')
def get_current_time():
	return {'time': time.time()}


@app.route('/businesses/names')
def get_all_business_names():
	try:
		connection = db.get_connection()
		names = db.get_all_business_names(connection)
		return {'names': str(names)}
	except Exception as e:
		return {'error': str(e)}


import os
import psycopg2

def get_connection():
    # Obtain database connection credentials from environment variables
    # instead of committing credentials to git for security reasons
    DB_URL = os.environ['DB_URL']
    DB_USERNAME = os.environ['DB_USERNAME']
    DB_PASSWORD = os.environ['DB_PASSWORD']
    return psycopg2.connect(
        host=DB_URL,
        database='postgres',
        user=DB_USERNAME,
        password=DB_PASSWORD)


def get_all_business_names(connection):
    cur = connection.cursor()
    cur.execute('SELECT "businessName" FROM public."Businesses";')
    raw_rows = cur.fetchall()
    names = [raw_row[0] for raw_row in raw_rows]
    cur.close()
    return names

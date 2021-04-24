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
    cur.execute('SELECT "BusinessName" FROM public."Businesses";')
    raw_rows = cur.fetchall()
    names = [raw_row[0] for raw_row in raw_rows]
    cur.close()
    return names

#Return a list of possible businesses based on name of business
def search(connection, searchInput, searchLocation):
    cur = connection.cursor()
    sql ="""SELECT  "BusinessName", "Industry", "City" FROM public."Businesses" WHERE (lower("BusinessName") LIKE %s OR lower("Industry") LIKE %s) AND lower("City") Like %s;"""
    argInput = "%{}%".format(searchInput.lower())
    argLocation = "{}".format(searchLocation.lower())

    cur.execute(sql,(argInput,argInput,argLocation))
    raw_rows = cur.fetchall()
    cur.close()
    return raw_rows

#Get a list of distinct industries
#Add this list into the dropdown
def getIndustries(connection):
    cur = connection.cursor()
    cur.execute('SELECT DISTINCT "Industry" FROM public."Businesses" ')
    raw_rows = cur.fetchall()
    industries = [raw_row[0] for raw_row in raw_rows]
    cur.close()
    return industries


#Goal - get the industries that was chosen and show all the businesses in the dropdown, it will show all the businesses
#Once an user choose a category
def getBusinessNamesByIndustries(connection, industry):
    cur = connection.cursor()
    cur.execute('SELECT "BusinessName", "Number",  "Email", "City",  "ZipCode", "OpeningYear", "Website"  FROM public."Businesses" WHERE "Industry" = ' + "'" + str(industry) + "';")
    raw_rows = cur.fetchall()
    businesses = [raw_row[0] for raw_row in raw_rows]
    cur.close()
    return raw_rows
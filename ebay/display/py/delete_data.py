#! /usr/bin/python
# -*- coding: utf-8 -*-
#
#	delete_data.py
#
#					Jun/28/2019
#
# ---------------------------------------------------------------------
import	sys
import	json
import	cgi
import	mysql.connector
# ---------------------------------------------------------------------
def	delete_proc (cursor,asin,used):
	sql_str="delete from parts where asin = '%s' and used = %d" \
		 % (asin,used)
	sys.stderr.write (sql_str + "\n")
#
	rr = cursor.execute (sql_str)
#
# ---------------------------------------------------------------------
ff=cgi.FieldStorage ()
asin = ff.getfirst ("asin","")
used = int (ff.getfirst ("used",""))
#
#asin="AAABBBD"
#used=1
#
host_aa='localhost'
data_base = 'ebay'
user_aa ='scott'
password_aa = 'tiger123'

conn = mysql.connector.connect(user=user_aa, password=password_aa, \
                              host=host_aa,database=data_base)
#
cursor = conn.cursor (dictionary=True)
#
try:
	delete_proc (cursor,asin,used)
except Exception as ee:
	sys.stderr.write ("*** error *** delete_proc ***\n")
	sys.stderr.write (str (ee) + "\n")
#
conn.commit ()
cursor.close ()
conn.close ()
#
rvalue = {}
rvalue['asin'] = asin
rvalue['used'] = used

json_str = json.dumps (rvalue)
#
print ("Content-type: text/json\n\n")
print (json_str)
# ---------------------------------------------------------------------

#! /usr/bin/python
# -*- coding: utf-8 -*-
#
#	fetch_data.py
#
#					Jun/28/2019
#
# ---------------------------------------------------------------------
import	sys
import	json
import	cgi
import	mysql.connector
# ---------------------------------------------------------------------
def	fetch_all_proc	(cursor):
	dict_aa = {}
#
#	sql_str="select * from parts order by date_mod" 
#	sql_str="select * from parts order by date_mod desc" 
	sql_str="select * from parts order by date_mod asc" 
#	sys.stderr.write (sql_str + "\n")
	cursor.execute (sql_str)
	rows = cursor.fetchall ()
	for row in rows:
		key = row['id']
		date_mod = row['date_mod']
		unit = row
		unit['date_mod'] = str (date_mod)
		dict_aa[key] = unit
#
	return	dict_aa
# ---------------------------------------------------------------------
ff=cgi.FieldStorage ()
# pref = ff.getfirst ("pref","")
# pref = 'nag'
# pref = 'iwa'
# pref = 'all'

host_aa='localhost'
data_base = 'ebay'
user_aa ='scott'
password_aa = 'tiger123'

conn = mysql.connector.connect(user=user_aa, password=password_aa, \
                              host=host_aa,database=data_base)
#
cursor = conn.cursor (dictionary=True)
#
dict_aa = fetch_all_proc (cursor)
#
cursor.close ()
conn.close ()
#
json_str = json.dumps (dict_aa)
#
print ("Content-type: text/json\n\n")
print (json_str)
# ---------------------------------------------------------------------

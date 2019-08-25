#! /usr/bin/python
# -*- coding: utf-8 -*-
#
#	register_data.py
#
#					Jun/28/2019
#
# ---------------------------------------------------------------------
import	sys
import	json
import	cgi
import	datetime
import	mysql.connector
# ---------------------------------------------------------------------
def	register_proc (cursor,asin,used,operator):
	zero = 0
	date_mod = datetime.date.today ()
	ft_aa="insert into parts (operator,asin,dup,used,date_mod) values ("
	ft_bb ="'%s','%s',%d,%d,'%s')" \
		% (operator, \
		asin, zero,used,date_mod)
	sql_str=ft_aa + ft_bb
	sys.stderr.write (sql_str + "\n")
#
	rr = cursor.execute (sql_str)
#
# ---------------------------------------------------------------------
ff=cgi.FieldStorage ()
asin = ff.getfirst ("asin","")
used = int (ff.getfirst ("used",""))
operator = ff.getfirst ("operator","")
#
# asin="AAACCC"
# used=1
# operator="p001"
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
	register_proc (cursor,asin,used,operator)
except Exception as ee:
	sys.stderr.write ("*** error *** register_proc ***\n")
	sys.stderr.write (str (ee) + "\n")
#
conn.commit ()
cursor.close ()
conn.close ()
#
rvalue = {}
rvalue['asin'] = asin
rvalue['used'] = used
rvalue['operator'] = operator

json_str = json.dumps (rvalue)
#
print ("Content-type: text/json\n\n")
print (json_str)
# ---------------------------------------------------------------------

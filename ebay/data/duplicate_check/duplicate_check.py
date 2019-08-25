#! /usr/bin/python
# -*- coding: utf-8 -*-
#
#	duplicate_check.py
#
#						Jan/19/2017
#
import	sys
import	csv
import	mysql.connector
#
# --------------------------------------------------------------------
def select_proc (cursor,asin_in):
	rvalue = 0
	sql_str = "select id,asin from parts where asin='" + asin_in
	sql_str += "'"
#
	cursor.execute (sql_str)
	rows = cursor.fetchall ()
#
	return	len (rows)
# --------------------------------------------------------------------
def get_asin_list_proc (cursor):
	sql_str = "select id,asin from parts"
	cursor.execute (sql_str)
	rows = cursor.fetchall ()
	sys.stderr.write ("len (rows) = %d\n" % len(rows))
	return	rows
# --------------------------------------------------------------------
def duplicate_check_proc ():
	conn = mysql.connector.connect (host="localhost",db="ebay", \
			user="scott", passwd="tiger")
#
	cursor = conn.cursor ()
#
	lists = get_asin_list_proc (cursor)
	count = 0
	nn = 0
	for row in lists:
		id = row[0]
		asin = row[1]
#		print (asin)
		rvalue = select_proc (cursor,asin)
		if (1 < rvalue):
			print (id,asin,rvalue)
			nn += 1
			if (2 < rvalue):
				sys.stderr.write ("%s\t%s\t%d\n" % (id,asin,rvalue))
		count += 1
#		if (500 < count):
#			break
#
	sys.stderr.write ("count = %d\n" % count)
	sys.stderr.write ("nn = %d\n" % nn)
#
	conn.commit ()
#
	cursor.close ()
	conn.close ()
#
	return	rvalue
# --------------------------------------------------------------------
#sys.stderr.write ("*** 開始 ***\n")
#
duplicate_check_proc ()
#
#sys.stderr.write ("*** 終了 ***\n")
# --------------------------------------------------------------------

#! /usr/bin/python
# -*- coding: utf-8 -*-
#
#	csv_to_mariadb.py
#
#						Jan/24/2018
#
import	sys
import	csv
import	mysql.connector
#
import	json
#
sys.path.append ('/var/www/data_base/common/python_common')
from file_io import file_to_str_proc
# --------------------------------------------------------------------
def	sql_insert_proc	(cursor_aa,key_in,unit):
#
	zero = 0
#	ft_aa="insert into parts (id,operator,asin,dup,used,date_mod) values ("
#	ft_bb ="'%s','%s','%s',%d,%d,'%s')" \
	ft_aa="insert into parts (operator,asin,dup,used,date_mod) values ("
	ft_bb ="'%s','%s',%d,%d,'%s')" \
		% (unit['operator'], \
		unit['asin'], zero,unit['used'],unit['date_mod'])
	sql_str=ft_aa + ft_bb
#	print (sql_str)
	cursor_aa.execute (sql_str)
#
# --------------------------------------------------------------------
def table_insert_proc (cursor,dict_aa):
	for key in dict_aa:
		unit = dict_aa[key]
		try:
			sql_insert_proc	(cursor,key,unit)
		except Exception as ee:
			sys.stderr.write ("*** error *** table_insert_proc ***\n")
			sys.stderr.write (str (ee) + "\n")
			sys.stderr.write (key + "\n")
#
# --------------------------------------------------------------------
def to_mariadb_proc (dict_aa):
	conn = mysql.connector.connect (host="localhost",db="ebay", \
			user="scott", passwd="tiger")
#
	cursor = conn.cursor ()
#
	table_insert_proc (cursor,dict_aa)
#
	conn.commit ()
#
	cursor.close ()
	conn.close ()
# --------------------------------------------------------------------
def number_parser (col):
	num = 0
	if (5 < len (col)):
		num = 0
	elif (col == ""):
		num = 0
	else:
		try:
			num = int (col)
		except Exception as ee:
			sys.stderr.write ("col = %s\n" % col)
			sys.stderr.write (str (ee) + "\n")
#
	return	num
# --------------------------------------------------------------------
def row_parser (row,eng_name,count):
	unit_aa = {}
	unit_aa['operator'] = eng_name
	try:
		unit_aa['no'] = int (row[0])
	except Exception as ee:
		sys.stderr.write ("*** error ***\n")
		sys.stderr.write ("*** count = %d\n" % count)
		sys.stderr.write (row[0] + "\n")
		sys.stderr.write (row[1] + "\n")
		sys.stderr.write (str (ee) + "\n")
	number_padded = '{0:05d}'.format(unit_aa['no'])
	key = eng_name + "_" + number_padded
#	print (key)
	if (row[2] == "USED"):
		unit_aa['used'] = 1
	else:
		unit_aa['used'] = 0

	unit_aa['asin'] = row[3]
	unit_aa['date_mod'] = row[9]
#
	return key,unit_aa
# --------------------------------------------------------------------
def operator_define_proc (operators,eng_name):
	operator = ""
	for key in operators:
		if (operators[key]['eng'] == eng_name):
			operator = key
			break
#
	return operator
# --------------------------------------------------------------------
# [4]:
def	csv_read_proc	(file_csv,operators):
#
	ipx = file_csv.find ("_")
	eng_name = file_csv[:ipx]
	sys.stderr.write ("eng_name = " + eng_name + "\n")
#
	operator = operator_define_proc (operators,eng_name)
#
	dict_aa = {}
	name = ""
	fp = open(file_csv, 'r')
	reader = csv.reader(fp)
	count = 0
	for row in reader:
		if (row[0] != "No") and (row[0] != ""):
			key,unit_aa = row_parser (row,operator,count)
			dict_aa[key] = unit_aa
		count += 1
#
	fp.close()
#
	sys.stderr.write ("name = " + name + "\n")
	return	dict_aa
#
# --------------------------------------------------------------------
sys.stderr.write ("*** 開始 ***\n")
file_csv = sys.argv[1]
#
file_conf = "operators.json"
json_str = file_to_str_proc (file_conf)
operators = json.loads (json_str)
#
#
dict_aa = csv_read_proc	(file_csv,operators)
to_mariadb_proc (dict_aa)
sys.stderr.write ("*** 終了 ***\n")
# --------------------------------------------------------------------

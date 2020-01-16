#! /usr/bin/python3
# -*- coding: utf-8 -*-
#
#	test_dir/api/redis_read.py
#
#					Jan/14/2020
#
# --------------------------------------------------------
import	sys
import	os
import	string
import  json
import  redis
import  cgi
import	cgitb
cgitb.enable()
#
# --------------------------------------------------------
def get_key_proc():
	ff=cgi.FieldStorage()
	if "key" in ff:
		value = ff.getfirst("key","")
	else:
		value = "t1851"
#
	return value
# --------------------------------------------------------
sys.stderr.write("*** redis_read.py *** start ***\n")
#
key = "0000"
#
try:
	key = get_key_proc()
except Exception as ee:
	sys.stderr.write("*** error *** in get_key_proc ***\n")
	sys.stderr.write(str(ee) + "\n")
#
sys.stderr.write("*** redis_read.py *** key = %s\n" % key)
#
json_str = '{}'
#
try:
	rr = redis.Redis(host='localhost', port=6379, db=0)
	json_str = rr.get(key).decode()
except Exception as ee:
	sys.stderr.write("*** error *** in rr.get ***\n")
	sys.stderr.write(str(ee) + "\n")

print ("Content-type: text/json; charset=UTF-8\n\n")
print (json_str)

sys.stderr.write("*** redis_read.py *** end ***\n")
#
# --------------------------------------------------------

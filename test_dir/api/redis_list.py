#! /usr/bin/python3
# -*- coding: utf-8 -*-
#
#	test_dir/api/redis_list.py
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
sys.stderr.write("*** redis_list.py *** start ***\n")
#
keys = []
json_str = ""
#
try:
	rr = redis.Redis(host='localhost', port=6379, db=0)
	keys = rr.keys('*')
except Exception as ee:
	sys.stderr.write("*** error *** in rr.keys ***\n")
	sys.stderr.write(str(ee) + "\n")
#
keys_str = []
for key in keys:
	key_str = key.decode('utf-8')
	keys_str.append(key_str)
#
try:
	json_str = json.dumps(keys_str)
except Exception as ee:
	sys.stderr.write("*** error *** in json.dumps ***\n")
	sys.stderr.write(str(ee) + "\n")

print ("Content-type: text/json; charset=UTF-8\n\n")
print (json_str)

sys.stderr.write("*** redis_list.py *** end ***\n")
#
# --------------------------------------------------------

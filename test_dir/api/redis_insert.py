#! /usr/bin/python3
# -*- coding: utf-8 -*-
#
#	test_dir/api/redis_insert.py
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
#
# --------------------------------------------------------
def get_string_proc(ff,key):
    if key in ff:
        value = ff.getfirst(key,"")
    else:
        value = "0000"
#
    return value
# --------------------------------------------------------
sys.stderr.write("*** redis_insert.py *** start *** \n")
#
ff=cgi.FieldStorage()
#
key = get_string_proc(ff,"key")
json_str = get_string_proc(ff,"value")
#
if json_str != "0000":
	rr = redis.Redis(host='localhost', port=6379, db=0)
	rr.set(key, json_str)
#
print ("Content-type: text/json; charset=UTF-8\n\n")
print (json_str)

sys.stderr.write("*** redis_insert.py *** end *** \n")
#
# --------------------------------------------------------

#! /usr/bin/python3
# -*- coding: utf-8 -*-
#
#	test_dir/api/download_redis.py
#
#					Jan/13/2020
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
#
# --------------------------------------------------------
def get_string_proc(ff,key):
    if key in ff:
        value = ff.getfirst(key,"")
    else:
        value = "0000"
        value = "t1851"
#
    return value
# --------------------------------------------------------
sys.stderr.write("*** start *** download.py ***\n")
#
ff=cgi.FieldStorage()
#
key = get_string_proc(ff,"key")
#
sys.stderr.write("*** bbbb *** download.py *** key = %s\n" % key)
#
json_str = '{}'
#
rr = redis.Redis(host='localhost', port=6379, db=0)
json_str = rr.get(key).decode()

print ("Content-type: text/json; charset=UTF-8\n\n")
print (json_str)

sys.stderr.write("*** end *** download.py ***\n")
#
# --------------------------------------------------------

#! /usr/bin/python
#
#	event01.py
#
import time

print("Access-Control-Allow-Origin: *")
print("Content-Type: text/event-stream")
print()
while(1):
	print("data: %s" % time.strftime("%H:%M:%S"))
	print()
	time.sleep(1)

#! /usr/bin/python
#
#	event02.py
#
import time

print("Content-Type: text/event-stream")
print()
print("data: %s" % time.strftime("%H:%M:%S"))
print()

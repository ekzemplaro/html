#! /usr/bin/python3
#  -*- coding: utf-8 -*-
#
#	gpiozero01.py
#
#					Feb/06/2017
#
# --------------------------------------------------------------------
from gpiozero import MCP3208
from time import sleep
# --------------------------------------------------------------------
pot = MCP3208 (channel=0)

while True:
	ratio = pot.value
	inum = int (4096 * ratio)
	print (ratio,inum)
	sleep (1)
# --------------------------------------------------------------------

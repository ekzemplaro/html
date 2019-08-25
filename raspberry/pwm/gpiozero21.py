#!/usr/bin/python3
# -*- coding: utf-8 -*-
#
#	gpiozero21.py
#
#						Feb/08/21
# --------------------------------------------------------------------
from gpiozero import AngularServo
import time
import signal
import sys

# --------------------------------------------------------------------
def exit_handler(signal, frame):
	# Ctrl+Cが押されたときにデバイスを初期状態に戻して終了する。
	sys.stderr.write("\n*** Exit ***\n")
	time.sleep(0.5)
	sys.stderr.write ("*** 終了 ***\n")
	sys.exit(0)

# --------------------------------------------------------------------
sys.stderr.write ("*** 開始 ***\n")

signal.signal (signal.SIGINT, exit_handler)

# GPIO 21番を使用
gp_out = 21

ss = AngularServo (gp_out)

count = 0
while True:
	delt = 45
	sys.stderr.write ("loop %d\n" % count)
	for angle in range (-90, 90, delt):
		ss.angle = angle
		print("Angle = %d" % angle)
		time.sleep (1.5)
#
	time.sleep (2.0)
#
	for angle in range (90, -90, -delt):
		ss.angle = angle
		print("Angle = %d" % angle)
		time.sleep (1.5)
#
	time.sleep (2.0)
#
	count += 1
#
# --------------------------------------------------------------------

#!/usr/bin/python3
# -*- coding: utf-8 -*-
#
#	gpio21.py
#
#						Feb/08/21
# --------------------------------------------------------------------
import RPi.GPIO as GPIO
import time
import signal
import sys

# --------------------------------------------------------------------
def exit_handler(signal, frame):
	# Ctrl+Cが押されたときにデバイスを初期状態に戻して終了する。
	sys.stderr.write("\n*** Exit ***\n")
	servo.ChangeDutyCycle(2.0)
	time.sleep(0.5)
	servo.stop()
	GPIO.cleanup()
	sys.stderr.write ("*** 終了 ***\n")
	sys.exit(0)

# --------------------------------------------------------------------
def move_to_angle (servo,angle):
	dc =(1.0 + angle/180.0)/20.0*100.0 # calculate duty
	servo.ChangeDutyCycle(dc)
	print("Angle = %d\tdc = %d" % (angle,dc))
# --------------------------------------------------------------------
sys.stderr.write ("*** 開始 ***\n")

# 終了処理用のシグナルハンドラを準備
signal.signal (signal.SIGINT, exit_handler)

GPIO.setmode (GPIO.BCM)

# GPIO 21番を使用
gp_out = 21

GPIO.setup(gp_out, GPIO.OUT)
# pwm = GPIO.PWM([チャンネル], [周波数(Hz)])
servo = GPIO.PWM(gp_out, 50)

# 初期化
servo.start (0.0)

count = 0
while True:
	delt = 45
	sys.stderr.write ("loop %d\n" % count)
	for angle in range (0, 180, delt):
		move_to_angle (servo,angle)
		time.sleep (1.5)
#
	time.sleep (2.0)
#
	for angle in range (180, 0, -delt):
		move_to_angle (servo,angle)
		time.sleep (1.5)
#
	time.sleep (2.0)
#
	count += 1
#
# --------------------------------------------------------------------

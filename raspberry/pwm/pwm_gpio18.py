#! /usr/bin/python
# -*- coding: utf-8 -*-
#
#	pwm_gpio18.py
#
#						Feb/20/2017
#
# --------------------------------------------------------------------
import sys
import RPi.GPIO as GPIO
from time import sleep
import wiringpi2 as wiringpi
# --------------------------------------------------------------------
sys.stderr.write ("*** 開始 ***\n")
#
PWM0 = 18
PWM1 = 19

wiringpi.wiringPiSetupGpio() # GPIO名で番号を指定する
wiringpi.pinMode(PWM0, wiringpi.GPIO.PWM_OUTPUT) # PWM出力を指定
wiringpi.pinMode(PWM1, wiringpi.GPIO.PWM_OUTPUT) # PWM出力を指定
wiringpi.pwmSetMode(wiringpi.GPIO.PWM_MODE_MS) # 周波数を固定するための設定
wiringpi.pwmSetClock(375) # 50 Hz。18750/(周波数) の計算値に近い整数
# PWMのピン番号18とデフォルトのパルス幅をデューティ100%を1024として指定
# ここでは6.75%に対応する69を指定
wiringpi.pwmWrite(PWM0, 69) 
wiringpi.pwmWrite(PWM1, 69) 

count = 0
try:
	while True:
		sys.stderr.write ("%d\n" % count)
		count += 1
		wiringpi.pwmWrite (PWM0,69) 
		sleep(1)
		wiringpi.pwmWrite (PWM0,36) 
		sleep(1)
		wiringpi.pwmWrite (PWM0,102) 
		sleep(1)
except KeyboardInterrupt:
	pass
#
sys.stderr.write ("*** 終了 ***\n")
# --------------------------------------------------------------------

#! /usr/bin/python3
# -*- coding: utf-8 -*-
#
#	i2c02.py
#
#					Feb/11/2017
# -------------------------------------------------------------------------
import sys
import smbus
import time

CHANNEL   = 1      # i2c割り当てチャンネル 1 or 0
ICADDR    = 0x20   # スレーブ側ICアドレス
# ICADDR    = 0x27   # スレーブ側ICアドレス
REG_IODIR = 0x00   # 入出力設定レジスタ
REG_OLAT  = 0x14   # 出力レジスタ

sys.stderr.write ("*** 開始 ***\n")
sys.stderr.write ("ICADDR: %d\n" % ICADDR)

bus = smbus.SMBus (CHANNEL)

# ピンの入出力設定
bus.write_byte_data (ICADDR,REG_IODIR,0x00)

try:
	while True:
		for vv in [0x10,0x30,0x70,0xf0,0x70,0x30,0x10,0x00]:
			bus.write_byte_data (ICADDR,REG_OLAT,vv)
			time.sleep (0.5)
#
except KeyboardInterrupt:
	bus.write_byte_data(ICADDR, REG_OLAT, 0x00)
	sys.stderr.write ("STOP\n")
#
sys.stderr.write ("*** 終了 ***\n")
# -------------------------------------------------------------------------

#! /usr/bin/python3
# -*- coding: utf-8 -*-
#
#	i2c01.py
#
#					Feb/11/2017
# -------------------------------------------------------------------------
import smbus
import time

CHANNEL   = 1      # i2c割り当てチャンネル 1 or 0
ICADDR    = 0x20   # スレーブ側ICアドレス
REG_IODIR = 0x00   # 入出力設定レジスタ
REG_OLAT  = 0x14   # 出力レジスタ

bus = smbus.SMBus(CHANNEL)

# ピンの入出力設定
bus.write_byte_data(ICADDR, REG_IODIR, 0x00)

# GPA4, GPA5, GPA6, GPA7 出力オン
bus.write_byte_data(ICADDR, REG_OLAT, 0xf0)
time.sleep (2)
# GPA4, GPA5, GPA6, GPA7 出力オフ
bus.write_byte_data(ICADDR, REG_OLAT, 0x00)
# -------------------------------------------------------------------------

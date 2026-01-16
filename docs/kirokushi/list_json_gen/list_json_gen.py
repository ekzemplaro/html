#! /usr/bin/python
#
#	list_json_gen/list_json_gen.py
#
#					Jul/21/2025
#
# ------------------------------------------------------------------
import	sys
import	os
import	json
import pandas as pd
#
# ------------------------------------------------------------------
sys.stderr.write("*** 開始 ***\n")
list_in = sys.argv[1]
json_out = sys.argv[2]
sys.stderr.write(list_in + "\n")
sys.stderr.write(json_out + "\n")
#
fp_in = open(list_in,encoding='utf-8')
lines = fp_in.readlines()
fp_in.close()
#
dict_aa = {}
for line in lines:
	cols= line[:-1].split(' ')
	key = str(cols[0])
	if not key in dict_aa:
		print(key)
		dict_aa[key] = []
	dict_aa[key].append(cols[1])
#
with open(json_out, 'w') as ff:
	json.dump(dict_aa,ff)
#
sys.stderr.write("*** 終了 ***\n")
# ------------------------------------------------------------------

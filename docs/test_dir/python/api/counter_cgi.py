#! /usr/bin/python
#
#	counter_cgi.py
#
#					Feb/06/2022
#
# ---------------------------------------------------------------------
import  os
import  sys
import  json
import  datetime
import	fcntl
import	socket
#
# ---------------------------------------------------------------------
def file_write_proc(file_name,str_out):
#
	fp_out = open(file_name,mode='w',encoding='utf-8')
	fcntl.lockf(fp_out, fcntl.LOCK_EX)
	fp_out.write(str_out)
	fp_out.close()
#
# ---------------------------------------------------------------------
def file_to_str_proc(file_in):
	str_out = ""
	try:
		fp_in = open(file_in,encoding='utf-8')
		str_out = fp_in.read()
		fp_in.close()
	except Exception as ee:
		sys.stderr.write("*** error *** file_to_str_proc ***\n")
		sys.stderr.write(str (ee))
#
	return	str_out
# ---------------------------------------------------------------------
def get_record_proc():
	ip_address = 'No address'
	hostname = 'No hostname'
	browser = 'Nothing'
	if 'REMOTE_ADDR' in os.environ:
		ip_address = os.environ['REMOTE_ADDR']
		hh = socket.gethostbyaddr(ip_address)
		hostname = hh[0]
#
#	if 'REMOTE_HOST' in os.environ:
#		hostname = os.environ['REMOTE_HOST']
#
	if 'HTTP_USER_AGENT' in os.environ:
		browser = os.environ['HTTP_USER_AGENT']
#
	now = datetime.datetime.now()
#
	data_aa = {}
	data_aa['ip_address'] = ip_address
	data_aa['hostname'] = hostname
	data_aa['browser'] = browser
	data_aa['now'] = now.strftime('%Y-%m-%d %H:%M')
#
	return data_aa
# ---------------------------------------------------------------------
def data_read_proc(file_json):
#
	json_str = file_to_str_proc(file_json)
#
	data_array = json.loads(json_str)
	return data_array
# ---------------------------------------------------------------------
file_json = "./hi-ho/data.json"
#
unit_aa = get_record_proc()
data_array = data_read_proc(file_json)
del data_array[30:]
# data_array.append(unit_aa)
data_array.insert(0,unit_aa)
str_aa = json.dumps(data_array)
file_write_proc(file_json,str_aa)

print('Content-Type: text/json; charset=utf-8')
print("Access-Control-Allow-Origin: *\r\n")
print(str_aa)
#
# ---------------------------------------------------------------------


#
URL=http://localhost/test_dir/api/redis_insert.py
#
curl -X POST -d key="t1855" \
	-d value="{"name": "宇都宮", "population": 41295, "date_mod": "2003-8-12"}" \
	$URL
#
echo
#
http $URL key==t1856 \
	value=='{"name": "小山", "population": 39671, "date_mod": "2003-5-24"}'

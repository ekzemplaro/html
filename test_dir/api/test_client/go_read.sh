#
URL=http://localhost/test_dir/api/redis_read.py
#
curl -X POST -d key="t1855" $URL
#
echo
#
http $URL key==t1856

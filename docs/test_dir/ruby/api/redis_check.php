<?php

	echo "*** post ***<p />";
//	$key = $_POST['key'];
	$key = "t1852";
	echo $key . "<p />";
	echo "*** check cccc ***\n";

	$redis = new Redis();
	echo "*** check dddd ***\n";
	$redis->connect('localhost', 6379);
	echo "*** check eddd ***\n";
	$json_str = $redis->get ($key);
	echo "*** check fddd ***\n";
	echo $json_str . "<p />";
	echo "*** check gddd ***\n";
?>

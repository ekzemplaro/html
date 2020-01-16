<?php
// ---------------------------------------------------------------------
//	redis_insert.php
//
//					Jan/15/2020
//
// ---------------------------------------------------------------------
if (isset ($_POST['key']))
	{
	$key = $_POST['key'];
	$json_str = $_POST['value'];
	try
		{
		$redis = new Redis();
		$redis->connect('localhost', 6379);
		$redis->set ($key,$json_str);
		echo $json_str;
		}
	catch  (PDOException $e)
		{
		print('Error:'.$e->getMessage());
		}
	}
// ---------------------------------------------------------------------
?>

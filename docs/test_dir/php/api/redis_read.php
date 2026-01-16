<?php
// ---------------------------------------------------------------------
//	redis_read.php
//
//					Jan/15/2020
//
// ---------------------------------------------------------------------
if (isset ($_POST['key']))
	{
	$key = $_POST['key'];
	try
		{
		$redis = new Redis();
		$redis->connect('localhost', 6379);
		$json_str = $redis->get ($key);
		echo $json_str;
		}
	catch  (PDOException $e)
		{
		print('Error:'.$e->getMessage());
		}
	}
// ---------------------------------------------------------------------
?>

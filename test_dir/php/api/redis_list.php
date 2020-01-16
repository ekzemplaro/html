<?php
// ---------------------------------------------------------------------
//	redis_list.php
//
//					Jan/15/2020
//
// ---------------------------------------------------------------------
	try
		{
		$redis = new Redis();
		$redis->connect('localhost', 6379);
		$keys = $redis->keys ('*');
		$json_str = json_encode ($keys);
		echo $json_str;
		}
	catch  (PDOException $e)
		{
		print('Error:'.$e->getMessage());
		}
// ---------------------------------------------------------------------
?>

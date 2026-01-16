<?php
date_default_timezone_set('Asia/Tokyo');

header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');

/*
$msgs = ["AAA","BBB","CCC","DDD","EEE",
	"FFF","GGG","HHH","III","JJJ"];
*/

$nn = rand (0,9);
// echo "data: " . $msgs[$nn] . " " . date('Y-m-d H:i:s') . "\n\n";
echo "data: " . date('Y-m-d H:i:s') . "\n\n";
flush();
?>

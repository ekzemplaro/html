<?php
// ------------------------------------------------------------------
//	event01.php
//
//					Mar/21/2018
//
// ------------------------------------------------------------------
date_default_timezone_set('Asia/Tokyo');

header('Cache-Control: no-cache');
header("Content-Type: text/event-stream\n\n");

$counter = rand(1, 10);
while (1) {
  // Every second, send a "ping" event.
  
  echo "event: ping\n";
  $curDate = date(DATE_ISO8601);
  echo 'data: {"time": "' . $curDate . '"}';
  echo "\n\n";
  
  // Send a simple message at random intervals.
  
  $counter--;
  
  if (!$counter) {
    echo 'data: This is a message at time ' . $curDate . "\n\n";
    $counter = rand(1, 10);
  }
  
  ob_end_flush();
  flush();
  sleep(1);
}

// ------------------------------------------------------------------
?>

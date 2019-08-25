<?php
echo "<html>";
echo '<meta http-equiv="CONTENT-TYPE" content="text/html; charset=utf-8" />';
echo "<body>";
echo "get01.php<p />";
echo "<h2>テスト</h2>";
if (isset ($_GET['name']))
	{
	echo "*** get ***<p />";
	$name = $_GET['name'];
	echo $name . "<p />";
	}

echo "</body>";
echo "</html>";
?>

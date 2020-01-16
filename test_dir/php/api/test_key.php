<?php
echo "<html>";
echo '<meta http-equiv="CONTENT-TYPE" content="text/html; charset=utf-8" />';
echo "<body>";
echo "post01.php<p />";
echo "<h2>テスト</h2>";
if (isset ($_POST['key']))
	{
	echo "*** post ***<p />";
	$name = $_POST['key'];
	echo $name . "<p />";
	}

echo "</body>";
echo "</html>";
?>

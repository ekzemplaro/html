<?php
/*
	json_write.php

					Jan/26/2017

*/
// --------------------------------------------------------------------
function file_write_proc ($string_out,$file_out)
{
	$fp_out = fopen ($file_out,"w");
	flock ($fp_out,LOCK_EX);
	fputs ($fp_out,$string_out);
	flock ($fp_out,LOCK_UN);
	fclose ($fp_out);

	chmod ($file_out,0666);
}

// --------------------------------------------------------------------
fputs (STDERR,"*** 開始 ***\n");
$message = array ();
$message[] = "*** json_write.php *** start ***";

date_default_timezone_set('Asia/Tokyo');

$always = "";
$start = "";

if (isset ($_REQUEST['file_out']))
	{
	$file_out = $_REQUEST['file_out'];
	$message[] = "file_out = " . $file_out;
	}
else
	{
	$message[] = "*** NG *** file_out ***";
	$message[] = "*** file_out is not defined ***";
	}

if (isset ($_REQUEST['json_str']))
	{
	$json_str = $_REQUEST['json_str'];
	}
else
	{
	$message[] = "*** NG *** json_str ***";
	$message[] = "*** json_str is not defined ***";
	}

	if (file_exists ($file_out))
		{
		if (is_writable ($file_out))
			{
			file_write_proc ($json_str,$file_out);
			}
		else
			{
			$message[] = "*** error *** not writable ***" . $file_out;
			}
		}
	else
		{
		file_write_proc ($json_str,$file_out);
		}

$message[] = "*** raspberry_json_write.php *** end ***";

$rvalue = array ();
$rvalue['message'] = $message;

$str_json = json_encode ($rvalue);

echo	$str_json . "\n";

fputs (STDERR,"*** 終了 ***\n");
// --------------------------------------------------------------------
?>

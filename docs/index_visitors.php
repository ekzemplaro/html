<?php
// ------------------------------------------------------------------
//	index_visitors.php
//
//					Nov/02/2015
//
// ------------------------------------------------------------------

// $file_out = '/var/tmp/logs/visitors_log.txt';
$file_out = 'logs/visitors_log.txt';

write_proc ($file_out);

$arry = file ($file_out);

$arry_filtered = filter_proc ($arry);

$out_str = convert_proc ($arry_filtered);

echo $out_str;

// ------------------------------------------------------------------
// [2]:
function write_proc ($file_out)
{
	$IP = $_SERVER['REMOTE_ADDR'];
	$hostname=gethostbyaddr($IP);
	$brws = $_SERVER['HTTP_USER_AGENT'];
	date_default_timezone_set('Asia/Tokyo');
	$today = date ("Y-m-d H:i");
	$out_str = $today . "\t" . $hostname . "\t" . $brws . "\n";

	$fp = fopen ($file_out,'a');
	flock ($fp,LOCK_EX);
	fputs ($fp,$out_str);
	flock ($fp,LOCK_UN);
	fclose ($fp);

}

// ------------------------------------------------------------------
// [4]:
function filter_proc ($arry)
{
	$arry_out = array ();
$nn=count ($arry);
$day_before = "";
$domain_before = "";
$browser_before = "";
for ($it=$nn-1; 0<= $it; $it--)
	{
	$line = $arry[$it];
	$mtx = explode ("\t",rtrim ($line));
	$ddx = substr ($mtx[0],0,10);
	$domain = $mtx[1];
	$browser = $mtx[2];

	if (($ddx != $day_before)
		|| ($domain != $domain_before)
		|| ($browser != $browser_before))
		{
//		echo $ddx . "\t";
//		echo $domain . "\t";
//		echo $browser . "\n";

		$day_before = $ddx;
		$domain_before = $domain;
		$browser_before = $browser;
		array_push ($arry_out,$line);
		}
	}

	return	$arry_out;
}

// ------------------------------------------------------------------
// [6]:
function convert_proc ($arry)
{
$nn=count ($arry);

$out_str = "<table>";

$day_current = "";
// for ($it=$nn-1; 0<= $it; $it--)
for ($it=0; $it < $nn; $it++)
	{
	$line = $arry[$it];
	$mtx = explode ("\t",rtrim ($line));
	$ddx = substr ($mtx[0],0,10);
	if ($ddx != $day_current)
		{
		$out_str .= "<tr><td><br /></td><td><b>";
		$out_str .= $ddx . "</b></td></tr>";
		$day_current = $ddx;
		}
	$out_str .= "<tr><td>";
	$out_str .= $mtx[0] . "</td><td>";
	$out_str .= $mtx[1] . "</td><td>";
	$out_str .= $mtx[2] . "</td>";
	$out_str .= "</tr>";
	}

$out_str .= "</table>";

	return	$out_str;
}

// ------------------------------------------------------------------
?> 

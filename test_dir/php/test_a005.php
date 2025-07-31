<?php
echo "<html>";
echo '<meta http-equiv="CONTENT-TYPE" content="text/html; charset=utf-8" />';
echo "<body>";
echo "*** start *** <p />";
echo "test_a005.php<p />";
echo "<h2>テスト</h2>";
//
// mb_internal_encoding("UTF-8");

$text = "こんにちは、PHPの世界へようこそ！";

// 文字列の切り出し
$substring = mb_substr($text, 0, 5); // 最初の5文字を取得
echo $substring; // 出力: "こんにちは"

// 負の値を使用して末尾から切り出す
$substring = mb_substr($text, -7); // 最後の7文字を取得
echo $substring; // 出力: "へようこそ！"

// 途中から切り出す
$substring = mb_substr($text, 6, 4); // 6文字目から4文字取得
echo $substring; // 出力: "、PHP"
//
echo "*** end *** <p />";
echo "</body>";
echo "</html>";
?>

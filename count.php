<?php

$f=fopen("stat.dat","a+");
flock($f,LOCK_EX);
$count=fread($f,100);
$count++;
if ($count>20){
	$count=0;
	 include("2.html");
}else{
	include("3.html");
}
echo "<!--count";
echo $count;
echo "-->";
ftruncate($f,0);
fwrite($f,$count);
fflush($f);
flock($f,LOCK_UN);
fclose($f);
 
?>
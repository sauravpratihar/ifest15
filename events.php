<?php
session_start();
if((isset($_REQUEST['password']) && $_REQUEST['password'] == 'IfEsT@0!5') || isset($_SESSION['ifest'])){
$_SESSION['ifest'] = 'ifest';
include_once('dbconnect.php');

global $servername;
global $username;
global $password;
global $dbname;

$Event = array();

$conn = mysql_connect($servername, $username, $password);

$db_selected = mysql_select_db($dbname,$conn);

$selectevent = "SELECT eventid,eventname FROM event";

$export = mysql_query ( $selectevent ) or die ( "Sql error : " . mysql_error( ) );

$fields = mysql_num_fields ( $export );

while( $row = mysql_fetch_row( $export ) )
{	$Event[$row[0]] = $row[1]; }

mysql_close($conn);
echo json_encode($Event);
} else {
echo json_encode('ERRR');	
}
?>
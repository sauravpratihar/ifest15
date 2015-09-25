<?php

/*$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";
*/
include_once('dbconnect.php');

global $servername;
global $username;
global $password;
global $dbname;

$header = '';
$data = '';
$conn = mysql_connect($servername, $username, $password);

$db_selected = mysql_select_db($dbname,$conn);

$selectregister = "SELECT * FROM register";

$export = mysql_query ( $selectregister ) or die ( "Sql error : " . mysql_error( ) );

$fields = mysql_num_fields ( $export );

for ( $i = 0; $i < $fields; $i++ )
{
    $header .= mysql_field_name( $export , $i ) . "\t";
}

$header .= "Events " . "\t";

while( $row = mysql_fetch_row( $export ) )
{
    $line = '';
	
    foreach( $row as $value )
    {   
		if ( ( !isset( $value ) ) || ( $value == "" ) )
        {
            $value = "\t";
        }
        else
        {
            $value = str_replace( '"' , '""' , $value );
            $value = '"' . $value . '"' . "\t";
        }
        $line .= $value;
	}
    $data .= trim( $line ) . "\t";
	$selectevents  = 'select eventname from event inner join registerinfo on event.eventid = registerinfo.eventid where registerid = ' . $row[0];
	
	$exportchild = mysql_query ( $selectevents );
	
		$datac = '';
		$linec = '';
	
	while( $childrow = mysql_fetch_row( $exportchild ) )
	{
		$linec = '';
		foreach( $childrow as $childvalue )
		{   
			if ( ( !isset( $childvalue ) ) || ( $childvalue == "" ) )
			{
				$childvalue = "\t";
			}
			else
			{
				$childvalue = str_replace( '"' , '""' , $childvalue );
				$childvalue = '"' . $childvalue . '"' . "\t";
			}
			$linec .= $childvalue;
		}
		$datac .= trim( $linec ) . "\t";
	}
	$data .= trim($datac) . "\n";
}
$data = str_replace( "\r" , "" , $data );

if ( $data == "" )
{
    $data = "\n(0) Records Found!\n";                        
}

mysql_close($conn);

header("Content-type: application/octet-stream");
header("Content-Disposition: attachment; filename=your_desired_name.xls");
header("Pragma: no-cache");
header("Expires: 0");
print "$header\n$data";
?>
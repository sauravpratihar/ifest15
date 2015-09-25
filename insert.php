<?php
$Data = $_REQUEST;
$Message=array();
$Event = array();

// fieldName validation
if(empty($Data['fieldName'])){
	$Message['errFieldName'] = 'Please Enter Name';
} else if(!empty($Data['fieldName'])){
	// check for fieldName length
	if(strlen($Data['fieldName']) > 30){
		$Message['errFieldName'] = 'Name is allowed only upto 30 character';
	}
}

// college name & id validation
if(strtolower($Data['fieldCollegeChoose']) == 'daiict'){
	// daiict student id validation
	if(empty($Data['fieldId'])){
		$Message['errFieldId'] = 'Please Enter Daiict Student Id';
	} else if(!empty($Data['fieldId'])){
		// check for length
		if(strlen($Data['fieldId']) > 10){
			$Message['errFieldId'] = 'Student id is allowd only upto 10 digit';
		}
		// check for id is numric
		if(!is_numeric($Data['fieldId'])){
			$Message['errFieldId'] = 'enter only numric value';
		}
		
		if(intval($Data['fieldId']) < 1){
			$Message['errFieldId'] = 'Value must not be less than 1';
		}
	}
		
} else {
		// if student doesn't belong to daiict
		// Gender validation
		if(!isset($Data['fieldGender']) || empty($Data['fieldGender'])){
			$Message['errFieldGender'] = 'Please Select gender';
		}
		
		if(empty($Data['fieldCollege'])){
			$Message['errFieldCollege'] = 'Please Enter College Name';
		} else if(!empty($Data['fieldCollege'])){
			// check for length
			if(strlen($Data['fieldCollege']) > 50){
				$Message['errFieldCollege'] = 'Student id is allowd only upto 50 character';
			}
		}
				
		// city validation
		if(empty($Data['fieldCity'])){
			$Message['errFieldCity'] = 'City should not be blank';
		} else if(!empty($Data['fieldCity'])){
			// check for postal address length
			if(strlen($Data['fieldCity']) > 30){
				$Message['errFieldCity'] = 'City is allowed only upto 30 character';
			}
		}
}
	
// ieee  ask moiz
if(isset($Data['fieldIEEEId']) && !empty($Data['fieldIEEEId'])){
		// check for length
		if(strlen($Data['fieldIEEEId']) > 50){
			$Message['errFieldIEEEId'] = 'Student id is allowd only upto 10 digit';
		}
	}


// phone validation
if(empty($Data['fieldPhone'])){
	$Message['errFieldPhone'] = 'Mobile number should not be blank';
} else if(!empty($Data['fieldPhone'])){
	// check for postal address length
	if(strlen($Data['fieldPhone']) != 10){
		$Message['errFieldPhone'] = 'Length of Mobile must be 10';
	}
	if(!is_numeric($Data['fieldPhone'])){
		$Message['errFieldPhone'] = 'Enter Numeric number only';
	}
}


// fieldEmail validation
if(empty($Data['fieldEmail'])){
	$Message['errFieldEmail'] = 'Email should not be blank';
} else if(!empty($Data['fieldEmail'])){
	// check for postal address length
	if(!preg_match('/^[A-z0-9_\-]+[@][A-z0-9_\-]+([.][A-z0-9_\-]+)+[A-z.]{2,4}$/',$Data['fieldEmail'])){
		$Message['errFieldEmail'] = 'enter valid Email id';
	}
}

//insert into `event` (`EventName`,`EventCode`) VALUES('Arduino Mela','???');

if(isset($Data['iarduino'])){
	array_push($Event,1);
}
if(isset($Data['ibot'])){
	array_push($Event,2);
}
if(isset($Data['icode'])){
	array_push($Event,3);
}
if(isset($Data['ipapyrus'])){
	array_push($Event,4);
}
if(isset($Data['techhunt'])){
	array_push($Event,5);
}
if(isset($Data['iapp'])){
	array_push($Event,6);
}
if(isset($Data['idatabase'])){
	array_push($Event,7);
}
if(isset($Data['ielectro'])){
	array_push($Event,8);
}
if(isset($Data['blindc'])){
	array_push($Event,9);
}
if(isset($Data['idesign'])){
	array_push($Event,6);
}
if(isset($Data['irubble'])){
	array_push($Event,9);
}
if(isset($Data['technocafe'])){
	array_push($Event,9);
}
if(isset($Data['ibiz'])){
	array_push($Event,10);
}
if(isset($Data['icrypt'])){
	array_push($Event,11);
}
if(isset($Data['iintelligence'])){
	array_push($Event,12);
}
if(isset($Data['iganith'])){
	array_push($Event,13);
}
if(isset($Data['treasurehunt'])){
	array_push($Event,14);
}
if(isset($Data['imaze'])){
	array_push($Event,15);
}
if(isset($Data['icube'])){
	array_push($Event,16);
}
if(isset($Data['iquiz'])){
	array_push($Event,17);
}
if(isset($Data['iclash'])){
	array_push($Event,18);
}
if(isset($Data['iclash'])){
	array_push($Event,19);
}
if(isset($Data['idecipher'])){
	array_push($Event,20);
}
if(isset($Data['idesign'])){
	array_push($Event,21);
}
if(isset($Data['irubble'])){
	array_push($Event,22);
}

if(count($Event) <= 0){
	$Message['errFieldEvenet'] = 'Select Atleast one event';
}

if(count($Event) <= 0 || count($Message) > 0){
	echo json_encode($Message);
	die();
}

// escape character string starts here
$fieldName = mysql_escape_string($Data['fieldName']);
$fieldGender = '';
$college = '';
$daiictid = 0;
$ieeeno = 0;
$fieldAccommodation = '';
$city = '';
$daiictid = mysql_escape_string($Data['fieldId']);	
$college = mysql_escape_string($Data['fieldCollege']);
if(strtolower($Data['fieldCollegeChoose']) == 'other'){
	$daiictid = 0;
	$fieldGender = mysql_escape_string($Data['fieldGender']);
	$fieldAccommodation = mysql_escape_string($Data['fieldAccommodation']); 
	$city = mysql_escape_string($Data['fieldCity']);
}
if(isset($Data['fieldIEEEId'])){
	$ieeeno = mysql_escape_string($Data['fieldIEEEId']);
}
//$postaladdr = mysql_escape_string($Data['inputpaddress']);
$phone = mysql_escape_string($Data['fieldPhone']);
$fieldEmail = mysql_escape_string($Data['fieldEmail']);
// escape character string ends here

include_once('dbconnect.php');

global $servername;
global $username;
global $password;
global $dbname;

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
$sql = "";
$sql = "insert into register(name,Gender,college,daiictid,ieeeno,city,phoneno,emailid,accommodation) values(";
$sql .= "'" . $fieldName . "','". $fieldGender . "','" . $college . "','" . $daiictid . "','" . $ieeeno . "','" . $city . "','" . $phone . "','" . $fieldEmail . "','" . $fieldAccommodation . "'";
$sql .= ")";

if ($conn->query($sql) === TRUE) {
	$id = $conn->insert_id;

	for($index=0;$index<count($Event);$index++){
		$sql = "insert into registerinfo (RegisterId,EventId) values(";
		$sql .= "'".$id."','".$Event[$index]."'";		
		$sql .= ")";
		
		$conn->query($sql);
	}	
} else {
    echo json_encode($conn->error);
}

$conn->close();

$Message['noerrr'] = 'Registration Completed Successfully';
echo json_encode($Message);
?>
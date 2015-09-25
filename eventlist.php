<!DOCTYPE html>
<html>
	<head>
		<title> Events Lists </title>
        <script type="text/javascript" src="./js/jquery.js"></script>
	</head>
	<body>
		<form method="post" id="EventsForm">
			<label> Enter Password </label>	
			<input type="password" name="password" id="password">
			<input type="button" id="GetEventList" value="Get Events">
		</form>
			<ul id="Events">
			</ul>
	</body>
	<script src="./js/transaction.js" type="text/javascript">
	</script>
	<script>
		jQuery(document).ready(function(){
			jQuery("#GetEventList").click();
		});
	</script>
</html>
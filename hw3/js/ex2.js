function calcNextDayOfWeek()
{
	let nextDay = "";
	let dayOfWeek = prompt( "The current day of the week" );
	
	switch( dayOfWeek )
	{
		case "sun":
			nextDay = "mon";
			break;
			
		case "mon":
			nextDay = "tue";
			break;
			
		case "tue":
			nextDay = "wed";
			break;
			
		case "wed":
			nextDay = "thu";
			break;
			
		case "thu":
			nextDay = "fri";
			break;
			
		case "fri":
			nextDay = "sat";
			break;
			
		case "sat":
			nextDay = "sun";
			break;
			
	}
	
	if( nextDay == "" )
	{
		alert( "Invalid name entered!" );
	}
	else
	{
		alert( "You entered " + dayOfWeek + "\nThe following day is " + nextDay );
	}
}
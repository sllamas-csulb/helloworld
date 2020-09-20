function calcClassStanding()
{
	let myName = prompt( "Please enter your name" );
	let units = prompt( "Please enter your units" );

	if( isNaN(units) || units < 0 )
	{
		alert("Invalid Units Entered!");
	}
	else
	{
		if( units >= 91 )
		{
			alert( "Hello " + myName + "\nYour grade standing is Senior" );
		}
		else if( units >= 61 )
		{
			alert( "Hello " + myName + "\nYour grade standing is Junior" );
		}
		else if( units >= 31 )
		{
			alert( "Hello " + myName + "\nYour grade standing is Sophomore" );
		}
		else
		{
			alert( "Hello " + myName + "\nYour grade standing is Freshman" );
		}
	}
}
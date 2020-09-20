function promptPassword()
{
	const kSecret = "qwerty";
	const kMaxAttempts = 3;
	
	let attempts = 0;
	for( let i = 0; i < kMaxAttempts; ++i )
	{
		let login = prompt( "Enter password" );
		attempts++;
		
		if( login == kSecret )
		{
			break;
		}
	}

	if( attempts < kMaxAttempts )
	{
		alert( "You entered the correct password after " + attempts + " attempt(s)" );
	}
	else
	{
		alert( "Your account is locked!  You failed to enter the correct password " + attempts + " times" );
	}

}
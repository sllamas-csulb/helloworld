function calcNextSecond()
{
	let hours = prompt( "Enter hours" );
	if( isNaN( hours ) || hours < 0 || hours > 23 )
	{
		alert( "Invalid hour entered" );
	}
	else
	{
		let minutes = prompt( "Enter minutes" );
		if( isNaN( minutes ) || minutes < 0 || minutes > 59 )
		{
			alert( "Invalid minutes entered" );
		}
		else
		{
			let seconds = prompt( "Enter seconds" );
			if( isNaN( seconds ) || seconds < 0 || seconds > 59 )
			{
				alert( "Invalid seconds entered" );
			}
			else
			{
				let output = "Time input: " + hours + "h" + minutes + "m" + seconds + "s\n";
				
				++seconds;
				if( seconds > 59 )
				{
					seconds = 0;
					++minutes;
					if( minutes > 59 )
					{
						minutes = 0;
						++hours;
						if( hours > 23 )
						{
							hours = 0;
						}
					}
				}
				
				output += "One second later: " + hours + "h" + minutes + "m" + seconds + "s\n";
				alert( output );
			}
		}
	}
}
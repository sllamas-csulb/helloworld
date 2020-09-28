function PlayGame()
{
	let randNum = Math.floor( 1 + Math.random() * 100 )
	var attempts = 0;
	
	var nextGuess = -1;

	while( nextGuess != randNum )
	{
		nextGuess = parseInt( prompt( "Pick a number between 1 and 100" ) );
		++attempts;
		
		if( nextGuess < randNum )
		{
			alert( "Too Low. Try Again" );
		}
		else if( nextGuess > randNum )
		{
			alert( "Too High. Try Again" );
		}
	}
	
	alert( "Correct! It took you " + attempts + " attempt(s) to guess the correct number" );
}
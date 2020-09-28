function assembleWordList()
{
	var wordList = new Array();
	let nextWord = "";

	while( nextWord.toUpperCase() != "STOP" )
	{
		nextWord = prompt( "Enter a word (enter \"stop\" to stop)" );
		if( nextWord.toUpperCase() != "STOP" )
		{
			wordList.push( nextWord );
		}
	}
	
	if( wordList.length > 0 )
	{
		let output = "You entered the following words:\n";
		for( var i = 0; i < wordList.length; ++i )
		{
			output += wordList[ i ] + "\n";
		}
		
		alert( output );
	}
	else
	{
		alert( "No words to display, Stop was the first word entered." );
	}
}
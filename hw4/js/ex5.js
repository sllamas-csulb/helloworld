function AnalyzeWord()
{
	let word = prompt( "Enter a word" );
	alert( word + " contains " + VowelCount( word ) + " vowel(s) and is " + ( !IsPalendrome( word ) ? "not " : "" ) + "a palindrome" );
}

function IsPalendrome( word )
{
	let halfLen = word.length / 2;
	let wordUpper = word.toUpperCase();
	
	for( var i = 0; i < halfLen; ++i )
	{
		if( wordUpper[ i ] != wordUpper[ wordUpper.length - i - 1 ] )
		{
			return false;
		}
	}
	
	return true;
}

function VowelCount( word )
{
	let wordUpper = word.toUpperCase();
	
	let vowelCount = 0;
	for( var i = 0; i < wordUpper.length; ++i )
	{
		switch( wordUpper[ i ] )
		{
			case 'A':
			case 'E':
			case 'I':
			case 'O':
			case 'U':
			case 'Y':
				++vowelCount;
				break;
				
			default:
				break;
		}
	}
	
	return vowelCount;
}


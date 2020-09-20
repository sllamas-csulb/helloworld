function printMultTable()
{
	let output = "";

	let i = prompt( "Enter a number" );
	for( let j = 0; j <= 10; ++j )
	{
		output += i + " * " + j + " = " + ( i * j ) + ", ";
	}
	
	alert( output );
}
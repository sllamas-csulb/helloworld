function Calculate()
{
	let num1 = parseInt( prompt( "Enter first number" ) );
	let num2 = parseInt( prompt( "Enter second number" ) );
	let op = prompt( "Enter operation" );
	
	let result = "";
	switch( op )
	{
		case "+":
			result = num1 + num2;
			break;
		case "-":
			result = num1 - num2;
			break;
		case "*":
			result = num1 * num2;
			break;
		case "/":
			result = num1 / num2;
			break;
	}
	
	
	alert( num1 + " " + op + " " + num2 + " = "  + result );
}
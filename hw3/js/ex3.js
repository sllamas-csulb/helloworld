function calcNums()
{
	let num1 = prompt( "Enter first number" );
	if( isNaN( num1 ) )
	{
		alert("Invalid number entered!");
	}
	else
	{
		num1 = parseInt( num1 ); 
		let num2 = prompt( "Enter second number" );
		if( isNaN( num2 ) )
		{
			alert("Invalid number entered!");
		}
		else
		{
			num2 = parseInt( num2 ); 
			let output = "The following mathematical operations for the numbers entered\n";
			output += num1 + " + " + num2 + " = " + ( num1 + num2 ) + "\n";
			output += num1 + " - " + num2 + " = " + ( num1 - num2 ) + "\n";
			output += num1 + " * " + num2 + " = " + ( num1 * num2 ) + "\n";
			output += num1 + " / " + num2 + " = " + ( num1 / num2 ) + "\n";
			output += num1 + " % " + num2 + " = " + ( num1 % num2 ) + "\n";
			
			alert( output );
		}
	}
	

}
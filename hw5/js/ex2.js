
function ProcessArrays()
{
	let nums = [ ];
	for( var i = 1; i <= 10; ++i )
	{
		nums.push( i );
	}

	console.log( nums.filter( x => x % 2 == 1 ) );
	console.log( nums.filter( x => x % 2 == 0 || x % 5 == 0 ) );
	console.log( nums.filter( x => x % 3 == 0 ).map( x => x * x ) );
	console.log( nums.filter( x => x % 5 == 0 ).reduce( ( acc, value ) => acc + value * value, 0 ) );
}
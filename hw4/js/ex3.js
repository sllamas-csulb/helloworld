function AnalyzeArray()
{
	const values = [ 3, 11, 7, 2, 9, 10 ];
	
	var min = values[ 0 ];
	var max = values[ 0 ];
	var sum = values[ 0 ];
	
	for( var i = 1; i < values.length; ++i )
	{
		if( values[ i ] < min )
		{
			min = values[ i ];
		}
		if( values[ i ] > max )
		{
			max = values[ i ];
		}
		
		sum += values[ i ];
	}
	
	alert( "min:" + min + " max:" + max + " sum:" + sum );
}
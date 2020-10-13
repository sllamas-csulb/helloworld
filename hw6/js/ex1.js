

function ParseNodes()
{
	const bodyNodes = () =>
	{
		for( let i = 0; i < document.body.childNodes.length; ++i )
		{
			console.log( document.body.childNodes[ i ] );
		}
    };
	
	bodyNodes();
}
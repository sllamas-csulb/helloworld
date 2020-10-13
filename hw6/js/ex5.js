

function ParseNodes()
{
	const words =
	[
	{term: "Procrastination", definition: "Avoidance of doing a task that needs to be accomplished"},
	{term: "Tautology",definition: "logical argument constructed in such a way that it is logically irrefutable"},
	{term: "Oxymoron",definition: "figure of speech that juxtaposes elements that appear to be contradictory"}
	];


	if( document.getElementById("dictionary") == null )
	{
		let contentItem = document.getElementById("content");
		
		const descriptionListItem = document.createElement("dl");
		descriptionListItem.id = "dictionary";
		
		for( let i = 0; i < words.length; ++i )
		{
			const termItem = document.createElement( "dt" ); 
			const strongItem = document.createElement( "strong" ); 
			strongItem.appendChild( document.createTextNode( words[ i ].term ) );
			termItem.appendChild( strongItem );
			const descriptionItem = document.createElement( "dd" ); 
			descriptionItem.appendChild( document.createTextNode( words[ i ].definition ) );
	
			descriptionListItem.appendChild( termItem );
			descriptionListItem.appendChild( descriptionItem );
		
		}
		
		contentItem.appendChild( descriptionListItem );
	}
}
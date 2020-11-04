function appendRow( tableElement, key, value )
{
	const trElement = document.createElement( "tr" );
	keyElement = document.createElement( "td" );
	keyElement.innerText = key;
	trElement.appendChild( keyElement );
	
	valueElement = document.createElement( "td" );
	valueElement.innerText = value;
	trElement.appendChild( valueElement );
	
	tableElement.appendChild( trElement );
}

function displayInfo( formData )
{
	let infoElement = document.getElementById( "info" );
	if( infoElement )
	{
		while( infoElement.firstChild )
		{
			infoElement.firstChild.remove();
		}
		
		const tableElement = document.createElement( "table" );
		
		for( var pair of formData.entries() )
		{
			appendRow( tableElement, pair[ 0 ], pair[ 1 ] );
		}

		
		infoElement.appendChild( tableElement );
	}
}


document.querySelector("form").addEventListener("submit", e => {
  // Cancel default behavior of sending a synchronous POST request
  e.preventDefault();
  // Create a FormData object, passing the form as a parameter
  var formData = new FormData(e.target);
  displayInfo( formData );
});
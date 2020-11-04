function appendRow( tableElement, name, year, artist )
{
	const trElement = document.createElement( "tr" );
	nameElement = document.createElement( "td" );
	nameElement.innerText = name;
	trElement.appendChild( nameElement );
	
	yearElement = document.createElement( "td" );
	yearElement.innerText = year;
	trElement.appendChild( yearElement );
	
	artistElement = document.createElement( "td" );
	artistElement.innerText = artist;
	trElement.appendChild( artistElement );
	
	tableElement.appendChild( trElement );
}

let tableElement = document.getElementById( "paintings" );
if( tableElement )
{
	fetch( "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json" )
	.then( response => response.json() )
	.then( paintings => {
		paintings.forEach( painting => {
			let tableElement = document.getElementById( "paintings" );
			appendRow( tableElement, painting.name, painting.year, painting.artist );
		});
  })
	.catch( err => {
		console.error( err.message );
	});
  
}
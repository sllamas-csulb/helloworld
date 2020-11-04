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

function displayProfile( profile )
{
	let profileElement = document.getElementById( "profile" );
	if( profileElement )
	{
		while( profileElement.firstChild )
		{
			profileElement.firstChild.remove();
		}
		
		const pElement = document.createElement( "p" );
		const imgElement = document.createElement( "img" );
		imgElement.src = profile.avatar_url;
		pElement.appendChild( imgElement );
		profileElement.appendChild( pElement );
		
		const tableElement = document.createElement( "table" );
		appendRow( tableElement, "Name", profile.name );
		appendRow( tableElement, "Blog", profile.blog );
		appendRow( tableElement, "Created", profile.created_at );
		
		profileElement.appendChild( tableElement );
	}
}

function queryProfile()
{
	

	let inputElement = document.getElementById( "ghuname" );
	if( inputElement )
	{
		fetch( "https://api.github.com/users/" + inputElement.value )
		.then( response => response.json() )
		.then( profile => {
			displayProfile( profile );
		})
		.catch( err => {
			console.error( err.message );
		});
	  
	}
}

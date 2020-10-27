const countryList=[
"Afghanistan",
"Albania",
"Algeria",
"Andorra",
"Angola",
"Anguilla",
"Antarctica",
"Antigua-and-Barbuda",
"Argentina",
"Armenia",
"Aruba",
"Australia",
"Autria",
"Azerbaïjan"
];

let textInputElement = document.getElementById( "country" );
if( textInputElement )
{
	textInputElement.addEventListener("input", e => {
		let textInputElement = document.getElementById( "country" );
		let suggestionsElement = document.getElementById( "suggestions" );
		suggestionsElement.innerHTML = "";
		
		if( textInputElement.value.length > 0 )
		{
			for( let i = 0; i < countryList.length; ++i )
			{
				if( countryList[ i ].toUpperCase().startsWith( textInputElement.value.toUpperCase() ) )
				{
					suggestionsElement.innerHTML += countryList[ i ] + "<br/>";
				}
				
			}
		}

	});
}
const houses=[
{
code: "ST",
name: "Stark"
},
{
code: "LA",
name: "Lannister"
},
{
code: "BA",
name: "Baratheon"
},
{
code: "TA",
name: "Targaryen"
}
];


// Return an array of characters belonging to a house
const getCharacters = houseCode =>
{
	switch(houseCode)
	{
	case"ST":
		return["Eddard","Catelyn","Robb","Sansa","Arya","Jon Snow"];
	case"LA":
		return["Tywin","Cersei","Jaime","Tyrion"];
	case"BA":
		return["Robert","Stannis","Renly"];
	case"TA":
		return["Aerys","Daenerys","Viserys"];
	default:
	return[];// Empty array
	}
}

let selectItem = document.getElementById( "house" );
if( selectItem )
{
	for( let i = 0; i < houses.length; ++i )
	{
		let optionItem = document.createElement("option");
		optionItem.value = houses[ i ].code;
		optionItem.innerText = houses[ i ].name;
		selectItem.appendChild( optionItem );
	}

	selectItem.addEventListener('change', (event) => {
		let listItem = document.getElementById( "characters" );
		while( listItem.firstChild )
		{
			listItem.firstChild.remove()
		}

		const selectItem = document.getElementById( "house" );
		let characters = getCharacters( selectItem.value );
		for( let i = 0; i < characters.length; ++i )
		{
			const liItem = document.createElement( "li" ); 
			liItem.appendChild( document.createTextNode( characters[ i ] ) );
			listItem.appendChild( liItem );
		}
	});
}
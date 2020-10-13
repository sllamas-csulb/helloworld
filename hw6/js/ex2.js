

function ParseNodes()
{
	const displayText400 = () => {
		
		const existingElements = Array.from(document.getElementsByClassName( "400level" ) );
		existingElements.forEach( element => {
			console.log( element.textContent );
		});
	}

	displayText400();
}
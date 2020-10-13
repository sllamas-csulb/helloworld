

function ParseNodes()
{
	pElements = Array.prototype.slice.call( document.getElementsByTagName("p") );
	pElements.forEach( pTag => {
			pTag.style.fontWeight = "bold";
			pTag.style.backgroundColor = "yellow";
		});

}
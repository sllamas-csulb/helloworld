

function ParseNodes()
{
	if( document.getElementById("appendedLink") == null )
	{
		listElements = Array.prototype.slice.call( document.getElementsByTagName("li") );
		for( let i = 0; i < listElements.length; ++i )
		{
			if( listElements[ i ].innerText == "CSULB Home Page" )
			{
				const listItem = document.createElement("li"); 
				listItem.id = "appendedLink";
				
				const anchorItem = document.createElement("a");
				anchorItem.href = "https://www.csulb.edu/college-of-business";
				
				anchorItem.appendChild(document.createTextNode("College of Business"));
				listItem.appendChild( anchorItem );
				
				listElements[ i ].appendChild(listItem);
				break;
			}			
		}
	}
}
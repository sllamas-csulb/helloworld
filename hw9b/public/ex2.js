function displayInfo( result )
{
	let infoElement = document.getElementById( "info" );
	if( infoElement )
	{
		infoElement.innerText = result;
	}
}

document.querySelector("form").addEventListener("submit", e => {
    const data = 
    {
      name: "Sal",
      countries:
      [
        {
          name: "United States",
          year: 2020
        },
        {
          name: "Mexico",
          year: 2000
        }
      ]
    };
   

    e.preventDefault();
    fetch("http://localhost:3000/api/countries", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(result => {
      displayInfo( result );
    })
    .catch(err => {
      console.error(err.message);
    });
  });



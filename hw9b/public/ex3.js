function displayInfo( result )
{
	let infoElement = document.getElementById( "info" );
	if( infoElement )
	{
		infoElement.innerText = result;
	}
}

document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    fetch("http://localhost:3000/api/articles", {
      method: "POST",
      body: formData
    })
      .then(response => response.text())
      .then(result => {
        displayInfo( result );
      })
      .catch(err => {
        console.error(err.message);
      });
  });



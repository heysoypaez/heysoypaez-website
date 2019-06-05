


// Example POST method implementation:

function postData(url = 'https://www.linkedin.com/oauth/v2/accessToken', data = {}) {
  // Default options are marked with *
    return fetch(url, {
        
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        credentials: 'include', // include, *same-origin, omit
    

        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Grant_Type': 'client_credentials&client_id={781uylnakpa9tb}&client_secret={tSsLP8PK3oIkatMT}'
      
        },

        //body: JSON.stringify(data), // body data type must match "Content-Type" header
        
    })
    .then(response => response.json()); // parses JSON response into native Javascript objects 
}



postData( 'https://www.linkedin.com/oauth/v2/accessToken' , {



})
  .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
  .catch(error => console.error("Hay este error: ", error));


// API requests

if (false) {
fetch("https://api.linkedin.com/v2/person/939071", {

	method:"GET",

	headers: {
		Host: "api.linkedin.com",
		Connection: "Keep-Alive",
		Authorization: "Bearer {access_token}"		
	}
})
}










//   ======================================================================== ASYNC GET Example 1

const getData = async () => {
    try {
        const response = await fetch('https://api-to-call.com/endpoint')
        if (response.ok){
          const jsonResponse = await response.json();
          return jsonResponse
        }
      throw new Error('Request failed!');
    }
     catch (error) {
      console.log(error)
    }
  }

//   ======================================================================== ASYNC GET Example 2

// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jja=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
// Code goes here
const getSuggestions = async () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  try {
    const response = await fetch(endpoint, {cache: 'no-cache'});
    if(response.ok){
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);

//   ======================================================================== ASYNC POST Example 1

const getData = async () => {
    try {
        const response = await fetch('https://api-to-call.com/endpoint',{
          method: 'POST',
          body: JSON.stringify({id: 200}) // determines request is POST and what information will be sent to it from the API
          })
          if (response.ok){
            const jsonResponse = await response.json();
            return jsonResponse;
          }
          throw new Error('Request failed!'); 
    }
    catch (error) {
      console.log(error)
    }
  }

  //   ======================================================================== ASYNC POST Example 2

  // information to reach API
const apiKey = '<Your API Key>';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
// Code goes here
const shortenUrl = async () => {
	const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  try {
    const response = await fetch(url, {
			method: 'POST',
      body: data,
      headers: {
        'Content-type': 'application/json',
				'apikey': apiKey
      }
    });
		if(response.ok){
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

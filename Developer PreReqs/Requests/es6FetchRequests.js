// To make asynchronous event handling easier, promises were introduced in JavaScript in ES6:

// A promise is an object that handles asynchronous data. A promise has three states:
//      pending : when a promise is created or waiting for data.
//      fulfilled : the asynchronous operation was handled successfully.
//      rejected : the asynchronous operation was unsuccessful.


// ============================================================================================ Fetch Example 1

// fetch() is a Promise.

const url = 'https://api-to-call.com/endpoint';

fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!') //will throw if response.ok is falsy
}, networkError => {
    console.log(networkError.message);
  }).then(jsonResponse => {
    return jsonResponse;
  })

// ============================================================================================ Fetch Example 2

// Information to reach API
const url = 'https://api.datamuse.com/words';
const queryParams = '?sl=';

// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  
  fetch(endpoint, {cache: 'no-cache'}).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message)
  }).then(jsonResponse => {
    renderResponse(jsonResponse)
  })
}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);

// ============================================================================================ Fetch POST Example 1

fetch('https://api-to-call.com/endpoint', {
  method: 'POST',
  body: JSON.stringify({id: '200'}) // determines request is POST and what information will be sent to it from the API
}).then(response => {
  if (response.ok){
   return response.json();
  }
  throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message);
}).then(jsonResponse =>{
  
})

// ============================================================================================ Fetch POST Example 2

const apiKey = '8623b7fb99ef48229d590ad4f6731d2a'; // Rebrandly API Key
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten})
  fetch(url,{
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'apikey': apiKey
    },
    body: data
  }).then(response => {
    if (response.ok){
      // renderJsonResponse(response);
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
  console.log(networkError.message);
}).then(jsonResponse=>{
    // renderRawResponse(jsonResponse);
    renderResponse(jsonResponse);
  })
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

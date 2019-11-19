// =================================================================================== XHR GET Request
// boilerplate code for an AJAX GET request using an XMLHttpRequest object.

const xhr = new XMLHttpRequest();
xhr.responseType = 'json';

const url = 'https://api-to-call.com/endpoint';

xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        return xhr.response
    }
  }

xhr.open('GET', url);
xhr.send();

// =====================================================================================================================================
// Example 2:

// A query string contains additional information to be sent with a request. 
// The Datamuse API allows us to retrieve more specific data with query strings attached to the request URL.

// A query string is separated from the URL using a ? character. After ?, you can then create a parameter which is a key value pair joined by a =.
// If you want to add an additional parameter you will have to use the & character to separate your parameters.

// Information to reach API
const url = 'https://api.datamuse.com/words?'
const queryParams = 'rel_jjb=';
const additionalParams ='&topics='

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
// AJAX stands for Asynchronous JavaScript and XML.
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const topicQuery = topicField.value;
  const endpoint = url + queryParams + wordQuery + additionalParams + topicQuery
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
  c
    }
  }
  xhr.open('GET', endpoint);
  xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  };
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);

// =================================================================================== XHR POST Request
// XHR - stand for XMLHttpRequest

const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'});
xhr.responseType = 'json';

xhr.onreadystatechange = () => {
    if( xhr.readyState === XMLHttpRequest.DONE){
        return xhr.response
    }
  }

  xhr.open('POST', url);
  xhr.send(data)

//   =================================================================================================================================
// POST Example 2:

// Information to reach API
const apiKey = '234h5jh257jkh3vc76437c34576v3';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});

  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
  		renderResponse(xhr.response);
		}
  }
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-type', 'application/json');
	xhr.setRequestHeader('apikey', apiKey);
  xhr.send(data);
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

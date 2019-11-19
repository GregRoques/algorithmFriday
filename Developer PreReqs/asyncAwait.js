// async functions always return a promise. 
// This means we can use traditional promise syntax, like .then() and .catch with our async functions. 
// An async function will return in one of three ways:

// - If there’s nothing returned from the function, it will return a promise with a resolved value of undefined.
// - If there’s a non-promise value returned from the function, it will return a promise resolved to that value.
// - If a promise is returned from the function, it will simply return that promise

async function fivePromise() { 
  return 5;
}

fivePromise()
.then(resolvedValue => {
    console.log(resolvedValue);
  })  // Prints 5


//   ======== Thus:

function withConstructor(num){
    return new Promise((resolve, reject) => {
      if (num === 0){
        resolve('zero');
      } else {
        reject('not zero');
      }
    })
  }
  
  withConstructor(0)
    .then((resolveValue) => {
    console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
  })
  
  // Is the Same As :

  async function withAsync(num){
    if (num === 0){
        return 'zero';
      } else {
        return 'not zero';
      }
  }
  
  withAsync(100)
    .then((resolveValue) => {
    console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
  })

//   The await keyword can only be used inside an async function. await is an operator: 
//   it returns the resolved value of a promise.
//    Since promises resolve in an indeterminate amount of time, await halts, or pauses, 
//    the execution of our async function until a given promise is resolved.


// ============================== dependant promises with Async Await

function nativePromiseVersion() {
    returnsFirstPromise()
    .then((firstValue) => {
        console.log(firstValue);
        return returnsSecondPromise(firstValue);
    })
   .then((secondValue) => {
        console.log(secondValue);
    });
}

// nested promise can also be done:

async function asyncAwaitVersion() {
    let firstValue = await returnsFirstPromise();
    console.log(firstValue);
    let secondValue = await returnsSecondPromise(firstValue);
    console.log(secondValue);
   }

//    ================================ try and catch

// With async...await, we use try...catch statements for error handling.

async function usingTryCatch() {
    try {
      let resolveValue = await asyncFunction('thing that will fail');
      let secondValue = await secondAsyncFunction(resolveValue);
    } catch (err) {
      // Catches any errors in the try block
      console.log(err);
    }
   }
   
   usingTryCatch();

//    =============================================================== Await Promise.all()

// We can pass an array of promises as the argument to Promise.all(), and it will return a single promise. 
// This promise will resolve when all of the promises in the argument array have resolved. 
// This promise’s resolve value will be an array containing the resolved values of each promise from the argument array.

async function asyncPromAll() {
  const resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()]);
  for (let i = 0; i<resultArray.length; i++){
    console.log(resultArray[i]); 
  }
}
// In our above example, we await the resolution of a Promise.all(). 
// This Promise.all() was invoked with an argument array containing four promises (returned from required-in functions). 
// Next, we loop through our resultArray, and log each item to the console. 
// The first element in resultArray is the resolved value of the asyncTask1() promise, 
// the second is the value of the asyncTask2() promise, and so on.

// Promise.all() allows us to take advantage of asynchronicity— each of the four asynchronous tasks can process concurrently. 
// Promise.all() also has the benefit of failing fast, 
// meaning it won’t wait for the rest of the asynchronous actions to complete once any one has rejected. 
// As soon as the first promise in the array rejects, the promise returned from Promise.all() will reject with that reason. 
// As it was when working with native promises, Promise.all() is a good choice if multiple asynchronous tasks are all required, 
// but none must wait for any other before executing.
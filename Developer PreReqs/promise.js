// ============================================ What is a Promise?
// Promises are objects that represent the eventual outcome of an asynchronous operation. 
// A Promise object can be in one of three states:

// 1.) Pending: The initial state— the operation has not completed yet.
// 2.) Fulfilled: The operation has completed successfully and the promise now has a resolved value. 
//     ** For example, a request’s promise might resolve with a JSON object as its value.
// 3.) Rejected: The operation has failed and the promise has a reason for the failure. This reason is usually an Error of some kind.

// === Make a Promise

const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
  };
  
  const myExecutor = (resolve, reject) =>{
    if (inventory.sunglasses > 0){
      resolve("Sunglasses order processed.")
    } else {
      reject("That item is sold out.")
    }
  }
  
  const orderSunglasses = () => new Promise(myExecutor)
  
  const orderPromise = orderSunglasses()
  
  console.log(orderPromise)

//   ====================================================================== .then()

// .then() is a higher-order function— it takes two callback functions as arguments. 
// We refer to these callbacks as handlers. When the promise settles, the appropriate handler will be invoked with that settled value.

// The first handler, sometimes called onFulfilled, is a success handler, and it should contain the logic for the promise resolving.
// The second handler, sometimes called onRejected, is a failure handler, and it should contain the logic for the promise rejecting.

let prom = new Promise((resolve, reject) => {
    let num = Math.random();
    if (num < .5 ){
      resolve('Yay!');
    } else {
      reject('Ohhh noooo!');
    }
  });
  
  const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
  };
  
  const handleFailure = (rejectionReason) => {
    console.log(rejectionReason);
  };
  
  prom.then(handleSuccess, handleFailure);

//   ======= .catch()

// The .catch() function takes only one argument, onRejected. 
// In the case of a rejected promise, this failure handler will be invoked with the reason for rejection. 
// Using .catch() accomplishes the same thing as using a .then() with only a failure handler.


prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });


//   =================================================================================== Promise All

// Promise.all() accepts an array of promises as its argument and returns a single promise. 
// That single promise will settle in one of two ways:

// If every promise in the argument array resolves, the single promise returned from Promise.all()
//  will resolve with an array containing the resolve value from each promise in the argument array.
// If any promise from the argument array rejects, the single promise returned from Promise.all() 
// will immediately reject with the reason that promise rejected. This behavior is sometimes referred to as failing fast.
// Let’s look at a code example:

let myPromises = Promise.all([returnsPromOne(), returnsPromTwo(), returnsPromThree()]);

myPromises
  .then((arrayOfValues) => {
    console.log(arrayOfValues);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });
// Complete List of iterators:
//       https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods
// ==========================================================================================================================


// Most Common:

// forEach() = changes elements in an array
// map() = iterates through an array forming a new array
// filter() = only returns those elements that meet a certain condition

// ========================== .reduce()

// The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array. 
// The callback function has two parameters, accumulator and currentValue.
//  The value of accumulator starts off as the value of the first element in the array and the currentValue starts as the second element. 
// As .reduce() iterates through the array, the return value of the callback function becomes the accumulator value for the next iteration,
//  currentValue takes on the value of the current element in the looping process.

// The .reduce() method can also take an optional second parameter to set an initial value for
//  accumulator (remember, the first argument is the callback function!). For instance:

// const numbers = [1, 2, 4, 10];

// const summedNums = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue
// }, 100)  // <- Second argument for .reduce()

// console.log(summedNums); // Output: 117

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);

// ================================================================= .some() and .every()

// The some() method tests whether at least one element 
// in the array passes the test implemented by the provided function. 
// It returns a Boolean value. 

// const array = [1, 2, 3, 4, 5];

// // checks whether an element is even
// const even = (element) => element % 2 === 0;

// console.log(array.some(even));
// // expected output: true

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some(word => {
  return word.length < 6;
})); //expected output 'true'


// The every() method tests whether all elements 
// in the array pass the test implemented by the provided function.
//  It returns a Boolean value. 

console.log(interestingWords.every((word) => {
    return word.length > 5}));



// ============================================================================= Test

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);


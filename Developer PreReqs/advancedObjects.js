// https://www.codecademy.com/courses/introduction-to-javascript/

// ===================================================== using 'this'

// The this keyword references the calling object which provides access to the calling object’s properties.

const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo(){
      return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
    }
  };
  
  console.log(robot.provideInfo())

//   ======================================================== arrow functions

const goat = {
    dietType: 'herbivore',
    makeSound() {
      console.log('baaa');
    },
    diet: () => {
      console.log(this.dietType); // because arrow function already binded to object, 'this' accesses global scope
    }
  };
  
  goat.diet(); // Prints undefined

//   In the comment, you can see that goat.diet() would log undefined. 
//   So what happened? Notice that in the .diet() is defined using an arrow function.
//   Arrow functions inherently bind, or tie, an already defined this value to the function itself that is NOT the calling object. 
//   In the code snippet above, the value of this is the global object, or an object that exists in the global scope, 
//   which doesn’t have a dietType property and therefore returns undefined.



// ============================================================== Privacy and "_"

// Certain languages have privacy built-in for objects, but JavaScript does not have this feature. 
// Rather, JavaScript developers follow naming conventions that signal to other developers how to interact with a property. 
// One common convention is to place an underscore _ before the name of a property to mean that the property should not be altered.
//  Here’s an example of using _ to prepend a property.

const bankAccount = {
  _amount: 1000
}


// ====================================================================== Getter Method


// Example: 

const person = {
    _firstName: 'John',
    _lastName: 'Doe',
    get fullName() {
      if (this._firstName && this._lastName){
        return `${this._firstName} ${this._lastName}`;
      } else {
        return 'Missing a first name or a last name.';
      }
    }
  }
  
  // To call the getter method: 
  person.fullName; // 'John Doe'

// Notice that in the getter method above:

// 1) We use the get keyword followed by a function.
// 2) We use an if...else conditional to check if both _firstName and _lastName exist 
// (by making sure they both return truthy values) and then return a different value depending on the result.
// 3) We can access the calling object’s internal properties using this. In fullName, we’re accessing both this._firstName and this._lastName.
// 4) In the last line we call fullName on person. In general, getter methods do not need to be called with a set of parentheses. 
// Syntactically, it looks like we’re accessing a property.


// Now that we’ve gone over syntax, let’s discuss some notable advantages of using getter methods:

// 1) Getters can perform an action on the data when getting a property.
// 2) Getters can return different values using conditionals.
// 3) In a getter, we can access the properties of the calling object using this.
// 4) The functionality of our code is easier for other developers to understand.
// 5) Another thing to keep in mind when using getter (and setter) methods is that properties cannot share the same name as the getter/setter function. 
// If we do so, then calling the method will result in an infinite call stack error. 
// One workaround is to add an underscore before the property name like we did in the example above.

const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel (){
      if (typeof this._energyLevel == 'number'){
        return `My current energy level is ${this._energyLevel}`
      } else {
        return 'System malfunction: cannot retrieve energy level'
      }
    }
  };
  
  console.log(robot.energyLevel)

  
// ======================================================================================= Setter methods

// setter methods which reassign values of existing properties within an object. 
// ... think this.setState() in React

const person = {
    _age: 37,
    set age(newAge){
      if (typeof newAge === 'number'){
        this._age = newAge;
      } else {
        console.log('You must assign a number to age');
      }
    }
  };

//   Notice that in the example above:
  
//   We can perform a check for what value is being assigned to this._age.
//   When we use the setter method, only values that are numbers will reassign this._age
//   There are different outputs depending on what values are used to reassign this._age.
//   Then to use the setter method:
  
  person.age = 40;
  console.log(person._age); // Logs: 40
  person.age = '40'; // Logs: You must assign a number to age

//   Another Example: 

  const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    
    set numOfSensors(num){
      if (typeof num === 'number' && num >= 0){
        this._numOfSensors = num
      } else {
        return 'Pass in a number that is greater than or equal to 0'
      }
    }
  };
  
  robot.numOfSensors = 100
  console.log(robot.numOfSensors)

//   ============================================================================================ Factory Functions

// The Factory
// In object-oriented programming, a factory is an object for creating other objects.

const monsterFactory = (name, age, energySource, catchPhrase) => {
    return { 
      name: name,
      age: age, 
      energySource: energySource,
      scare() {
        console.log(catchPhrase);
      } 
    }
  };

  //The (variable) product
  const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
  ghost.scare(); // 'BOO!'

//   Example:

const robotFactory = (model, mobile) => {
    return{ 
      model,
      mobile,
      beep: () => {console.log('Beep Boop')}  
    }
  }
  
  const tinCan = robotFactory('P-500', true)
  
  tinCan.beep()


//   ======================================================================================================= Built-in Object Methods

// Full Reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods

const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot)
console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

console.log(newRobot);

 //   =================================================================================== Object Prototypes

//  The JavaScript prototype property allows you to add new properties to object constructors:

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.nationality = "English";


// The JavaScript prototype property also allows you to add new methods to objects constructors:

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};
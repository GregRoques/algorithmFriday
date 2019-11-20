//================================================================== A basic Higher Order Function
// A higher order function is a function that takes a function as an argument, or returns a function.

const checkConsistentOutput = (checkFunction, checkVariable) => {
    let answer =[]; 
    for (let i = 1; i < 3; i++){
      answer.push(checkFunction(checkVariable))
    }
      if (answer[0] === answer[1]) {
            console.log(checkFunction(checkVariable))
            return checkFunction(checkVariable);
      } else {
          return 'This function returned inconsistent results';
      }
  }
  
  const callBack = variable => {
    return variable
  }
  
//   checkConsistentOutput(callBack, "Cat")

//================================================================================================= autonomous self-calling function

(function pokemonBattle (protagonist, antagonist){
  console.log(`${protagonist} vs. ${antagonist}`)
})('Pikachu', "Meowith")


// ================================================================================================ Objects

// An "object" is a collection of properties... a "property" is an association between a name (or key) and a value. 
// A property's value can be a function, in which case the property is known as a method. 
// In addition to objects that are predefined in the browser, you can define your own objects. 

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  // Write your code below
  spaceship.color = 'glorious gold'
  spaceship.numEngines = 9
  delete spaceship['Secret Mission'] // haven't used this before
//   console.log(spaceship)



// ==================================================================================================================Methods

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
const alienShip = {
  retreat () { console.log(retreatMessage)},
  takeOff () { console.log('Spim... Borp... Glix... Blastoff!') }
}

console.log(alienShip.takeOff())



// ==================================================================================================================for...in

let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// Write your code below
for (let crewMember in spaceship.crew){
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
}

for (let crewMember in spaceship.crew){
  console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
}



// ======================================================================= Node.js

// ====================== module.exports

// In menu.js:

let Menu = {};
Menu.specialty = "Roasted Beet Burger with Mint Sauce"

module.exports = Menu; 

// The pattern we use to export modules is thus:

// Create an object to represent the module.
// Add properties or methods to the module object.
// Export the module with module.exports.

// To make use of the exported module and the behavior we define within it, we import the module into another file. 
// In Node.js, use the require() function to import modules.

const Menu = require('./menu.js');

function placeOrder() {
  console.log('My order is: ' + Menu.specialty);
}

placeOrder();

// ================================================================== ES6

// When using ES6 syntax, we use export default in place of module.exports.
//  Node.js doesn’t support export default by default, so module.exports is usually used for Node.js development 
//  and ES6 syntax is used for front-end development.

let Airplane = {
    availableAirplanes: [
      {name: 'AeroJet',
      fuelCapacity: 800},
      {name: 'SkyJet',
      fuelCapacity: 500}
    ]
};
   
export default Airplane;

// ==================================================================

import Airplane from './airplane';

function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element){
  console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

// ===================================== export Named Exports



let availableAirplanes = [
    {
      name: 'AeroJet',
      fuelCapacity: 800,
      availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators']
     }, 
     {name: 'SkyJet',
      fuelCapacity: 500,
      availableStaff: ['pilots','flightAttendants']
     }
    ];
    
    let flightRequirements = {}
    flightRequirements.requiredStaff = 4
    
    function meetsStaffRequirements (availableStaff, requiredStaff){
      if (availableStaff.length >= requiredStaff)
      return true
    else 
      return false 
    }
    
    export {availableAirplanes, flightRequirements, meetsStaffRequirements};

    // =====

    import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
  });
}

displayStaffStatus();


// ================================================================================ Export As / Import As

// ==== from a file calle menu.js

let specialty = '';
let isVegetarian = function() {
}; 
let isLowSodium = function() {
}; 

export { specialty as chefsSpecial, isVegetarian as isVeg, isLowSodium };

// ======

import { chefsSpecial, isVeg } from './menu';


// ============================ Combining Export Statements


// We can also use named exports and default exports together. In menu.js:

let specialty = '';
function isVegetarian() {
}; 
function isLowSodium() {
}; 
function isGlutenFree() {
};

export { specialty as chefsSpecial, isVegetarian as isVeg };
export default isGlutenFree;

// Here we use the keyword export to export the named exports at the bottom of the file. 
// Meanwhile, we export the isGlutenFree variable using the export default syntax.

// This would also work if we exported most of the variables as declared and exported others with the export default syntax.

export let Menu = {};

export let specialty = '';
export let isVegetarian = function() {
}; 
export let isLowSodium = function() {
}; 
let isGlutenFree = function() {
};

export default isGlutenFree;

// Here we use the export keyword to export the variables upon declaration, 
// and again export the isGlutenFree variable using the export default syntax

// While it’s better to avoid combining two methods of exporting, it is useful on occasion. 
// For example, if you suspect developers may only be interested in importing a specific function 
// and won’t need to import the entire default export.

// =========== Likewise... Combining Imports

import { specialty, isVegetarian, isLowSodium } from './menu';

import GlutenFree from './menu';
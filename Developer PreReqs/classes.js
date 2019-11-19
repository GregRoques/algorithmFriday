// Class - in object-oriented programming, an "extensible program-code-template for creating objects", 
// providing initial values for state (member variables) and implementations of behavior (member functions or methods).

class Dog {
    constructor(name) {
      this._name = name;
      this._behavior = 0;
    }
  
    get name() {
      return this._name;
    }
    get behavior() {
      return this._behavior;
    }   
  
    incrementBehavior() {
      this._behavior ++;
    }
  }
  
  const halley = new Dog('Halley');
  console.log(halley.name); // Print name value to console
  console.log(halley.behavior); // Print behavior value to console
  halley.incrementBehavior(); // Add one to behavior
  console.log(halley.name); // Print name value to console
  console.log(halley.behavior); // Print behavior value to console

//   ========================================================================== Constructors

// JavaScript calls the constructor() method every time it creates a new instance of a class.

class Surgeon {
    constructor(name, department) {
      this._name = name;
      this._department = department;
    }
  }

//   =============================================================================== Instance

// An instance is an object that contains the property names and methods of a class, but with unique property values. 

// The new keyword to generate a new instance of the Dog class. 
// The new keyword calls the constructor(), runs the code inside of it, and then returns the new instance.

class Surgeon {
    constructor(name, department) {
      this.name = name;
      this.department = department;
    }
  }
  
//   const surgeonCurry = new Surgeon('Curry','Cardiovascular')
  
//   const surgeonDurant = new Surgeon('Durant','Orthopedics')

  //   =============================================================================== Class Methods

  class Surgeon {
    constructor(name, department) {
      this._name = name;
      this._department = department;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get department() {
      return this._department;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  }
  
  const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
  const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

    console.log(surgeonCurry.name)
    surgeonCurry.takeVacationDays(3)
    console.log(surgeonCurry.remainingVacationDays)

    //   =============================================================================== Inheritance

    // Parent class

    class HospitalEmployee {
        constructor(name) {
          this._name = name;
          this._remainingVacationDays = 20;
        }
        
        get name() {
          return this._name;
        }
      
        get remainingVacationDays() {
          return this._remainingVacationDays;
        }
        
        takeVacationDays(daysOff) {
          this._remainingVacationDays -= daysOff;
        }

        static generatePassword(){ 
            const password = Math.floor(Math.random() * 10000)
            return password
        } // static - you can call it directly from the class, but not from an instance of the class.
      }

      class Nurse extends HospitalEmployee {
        constructor(name, certifications) {
          super(name);
          this._certifications = certifications;
        } 
        
        get certifications(){
          return this._certifications
        }
        
        addCertification(newCertification){
          this._certifications.push(newCertification)
        }
      }
      
      const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
      nurseOlynyk.takeVacationDays(5);
      console.log(nurseOlynyk.remainingVacationDays);
      nurseOlynyk.addCertification('Genetics')
      console.log(nurseOlynyk.certifications)



    
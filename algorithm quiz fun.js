function findHobbyists(hobbies, hobby) {
    let hobbiests = []
    Object.keys(hobbies).map(enthusiast =>{
        if((hobbies[enthusiast]).includes(hobby)){
            hobbiests.push(enthusiast)
        }
    })
    return hobbiests
}
  
  var hobbies = {
    "John": ['Piano', 'Puzzles', 'Yoga'],
    "Adam": ['Drama', 'Fashion', 'Pets'],
    "Mary": ['Magic', 'Pets', 'Reading']
  };
  
  console.log(findHobbyists(hobbies, 'Pets'));

// =============================================================================

// return original array without letters

function filterNumbersFromArray(arr) {
    const newArray =[]
    arr.map(nonNum => {        
        if(!isNaN(nonNum)){
            newArray.push(nonNum)
        }
    })
    arr = newArray
    console.log(arr)
  }
  
  var arr = [1, 'a', 'b', 2];
  filterNumbersFromArray(arr);


  
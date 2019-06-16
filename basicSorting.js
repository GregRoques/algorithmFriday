function findHobbyists(hobbies, hobby) {
    hobbies.map(enthusiast =>{
        let hobbiests = []
        if(enthusiast.inclues(hobby)){
            hobbiests.push(enthusiast)
        }
        console.log(hobbiests)
    })
}
  
  var hobbies = {
    "John": ['Piano', 'Puzzles', 'Yoga'],
    "Adam": ['Drama', 'Fashion', 'Pets'],
    "Mary": ['Magic', 'Pets', 'Reading']
  };
  
  console.log(findHobbyists(hobbies, 'Yoga'));
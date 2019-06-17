//Make array of "people" with particular hobbies

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

const newArray =[]
function filterNumbersFromArray(arr) {
    arr.map(nonNum => {        
        !isNaN(nonNum) ? newArray.push(nonNum) : null
    })
    arr = newArray
  }

// ============================================ was having trouble with splice with my original logic
//   function filterNumbersFromArray(arr) {
//     arr.map(nonNum => {        
//         isNaN(nonNum) ? arr.splice((arr.indexOf(nonNum), 1)) : null
//     })
//     arr = newArray
//   }
  
  var arr = [1, 'a', 'b', 2];
  filterNumbersFromArray(arr);
  console.log(arr)



// =============================================================================
// Turn one card side up, all others upsidedown

var cards = document.getElementsByClassName('card');
for (var i = 0; i < cards.length; i++) {
    cards[i].onclick = function(value) {
        [].forEach.call(cards, function(card) { 
            card.innerHTML = "down" 
        });
        this.innerHTML = "up";
    }
}

// =============================================================================
// Make button with id = 'btn' dissapear for one second on click, then reappear

const chooseButton = () =>{
    document.getElementById('btn').style.visibility = 'hidden';
    setTimeout(()=>{
        document.getElementById('btn').style.visibility = 'visible';
    }, 1000)
}

document.getElementById('btn').addEventListener('click', chooseButton())
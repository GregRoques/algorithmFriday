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

let anArray = ('blink182').split('')
function filterNumbersFromArray(arr) {
    newArray = []
    arr.map((nonNum, i) => {        
        !isNaN(nonNum) ? newArray.push(arr[i]) : null
    })
    anArray = newArray
  }

filterNumbersFromArray(anArray)
console.log(anArray)




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
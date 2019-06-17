//remove the duplicates in an array

const array = ['cat', 'Greg', 'dog', 'cat', 'Midnight', "Callie", "Nacheaux", "Midnight",
'cat', 'burrito', 'Margarita', 'taco', 'Margarita', 'The Cure', 'Nacho Libre', 'burrito']

const removeDuplicates = arr =>{
    let duplicatelessArray =[]
    arr.map(str => {
        !duplicatelessArray.includes(str) ? duplicatelessArray.push(str) : null
    })
    console.log(duplicatelessArray.sort())
}

// removeDuplicates(array)

// ================================================================================================
//Write code that reads data from a 2d array and distributes elements from the second column
//into five new arrays of equal size. The elements from the second column should be added to
//the new arrays in random order.

const twoDimensionalArray = [
    [1,2,3,4,5],
    [6,7,8,9,10,11,12,13]
]

const randomNumerGenerator = max =>{
    return Math.floor(Math.random() * Math.floor(max))
}

const arrayCreator = arr =>{
    for (i=5;i>0;i--){
        let copyArr = [...arr[1]];
        let newArr = []
        while(copyArr.length){
            let randNum = randomNumerGenerator(copyArr.length);
            let spliceNum = (copyArr.splice(randNum,1)).pop()
            newArr.push(spliceNum)
        }
        twoDimensionalArray.push(newArr)
    }
}

arrayCreator(twoDimensionalArray)
// console.log(twoDimensionalArray)

// ================================================================================================
// Make an elivator app

var currentFloor = 1;
async const elevator = floor =>{
    if (floor > currentFloor){
        let up = floor - currentFloor;
        await function goingUp(){
            while(up){
                setTimeout(()=>{
                    console.log(currentFloor + 1)
                    up -= 1
                },1)
            }
        }
        currentFloor = floor
    } else {
        
    }
}


// ================================================================================================
// Write a recursive factorial function

const myFactorial = num =>{
   return num !=1 ? num * myFactorial(num-1) : 1 //calls itself and reduces num by one if not one over and over
}

// console.log(myFactorial(4))

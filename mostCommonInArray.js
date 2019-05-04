const myArray = ['dog','cat','fish','dog','cat','gerbil',
'The Cure','cat','Robert Smith','apples','cat','tacos','pizza',
'cat', 'pizza', 'pizza', 'Callie', "Midnight",
"Callie",'Midnight','cat']

let newArray={}

myArray.map(anObject =>{
    if (Object.keys(newArray).includes(anObject)){
        newArray[anObject] += 1
    } else{
        newArray[anObject] = 1
    }
})

const highestNumber = Math.max(...Object.values(newArray))

const answer = Object.keys(newArray).filter(theObject => newArray[theObject] === highestNumber )

console.log(newArray)
console.log(answer, highestNumber)
//most common in an array or string & reverse string

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

const answer = Object.keys(newArray).filter(theObject =>{
    return newArray[theObject] === highestNumber 
})

// console.log(newArray)
// console.log(answer, highestNumber)

//=============================================================================================

const philCollins = `Do you like Phil Collins? I've been a big Genesis fan ever since the release of their 1980 album, Duke. Before that, I really didn't understand any of their work. Too artsy, too intellectual. It was on Duke where Phil Collins' presence became more apparent. I think Invisible Touch was the group's undisputed masterpiece. It's an epic meditation on intangibility. At the same time, it deepens and enriches the meaning of the preceding three albums. Christy, take off your robe. Listen to the brilliant ensemble playing of Banks, Collins and Rutherford. You can practically hear every nuance of every instrument. Sabrina, remove your dress. In terms of lyrical craftsmanship, the sheer songwriting, this album hits a new peak of professionalism. Sabrina, why don't you, uh, dance a little. Take the lyrics to Land of Confusion. In this song, Phil Collins addresses the problems of abusive political authority. In Too Deep is the most moving pop song of the 1980s, about monogamy and commitment. The song is extremely uplifting. Their lyrics are as positive and affirmative as anything I've heard in rock. Christy, get down on your knees so Sabrina can see your asshole. Phil Collins' solo career seems to be more commercial and therefore more satisfying, in a narrower way. Especially songs like In the Air Tonight and Against All Odds. Sabrina, don't just stare at it, eat it. But I also think Phil Collins works best within the confines of the group, than as a solo artist, and I stress the word artist. This is Sussudio, a great, great song, a personal favorite.`

const philArray = (philCollins).split(" ")

// console.log(philArray)

let newPhilArray = {}

philArray.map(anObject =>{
    if (Object.keys(newPhilArray).includes(anObject)){
        newPhilArray[anObject] += 1
    } else{
        newPhilArray[anObject] = 1
    }
})

const highestNumberPhil = Math.max(...Object.values(newPhilArray))

const philAnswer = Object.keys(newPhilArray).filter(theObject => newPhilArray[theObject] === highestNumberPhil )

// console.log(newPhilArray)
// console.log(philAnswer, highestNumberPhil)

//Reversal
const philArrayForReversal = (philCollins).split("")
const reversedPhilArray = (philArrayForReversal.reverse()).join("")
console.log(reversedPhilArray)
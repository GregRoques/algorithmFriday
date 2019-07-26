// reverse a string

let aString = "Taco Cat"
let newString = aString.split("").reverse().join("")
// console.log(aString, newString)

const newString2 = []
const part2Array = aString.split('')
for( let i = part2Array.length - 1; i>=0; i-- ){
    newString2.push(part2Array[i])
}
console.log(newString2.join(''))

// ======================================================================================
// Palindrome check w/out spaces

const isPalindrome = stringForward =>{
    const stringForwardNoSpace = stringForward.replace(/\s/gi, '')
    const stringBackward = stringForward.replace(/\s/gi, '').split('').reverse().join('')

    stringForwardNoSpace === stringBackward ? console.log('Palindrome') : console.log ('No Palindrome')
}

isPalindrome('taco cat')

// ======================================================================================
// Most common word in a song's lyrics

const Rio = `Moving on the floor now babe you're a bird of paradise
Cherry ice cream smile I suppose it's very nice
With a step to your left and a flick to the right
You catch that mirror way out west
You know you're something special and you look like you're the best
Her name is Rio and she dances on the sand
Just like that river twisting through a dusty land
And when she shines she really shows you all she can
Oh Rio, Rio dance across the Rio Grande
I've seen you on the beach and I've seen you on TV
Two, of a billion stars it means so much to me
Like a birthday or a pretty view
But then I'm sure that you know it's just for you
Her name is Rio and she dances on the sand
Just like that river twisting through a dusty land
And when she shines she really shows you all she can
Oh Rio, Rio dance across the Rio Grande
Hey now (wow) look at that did he nearly run you down
At the end of the drive the lawmen arrive you make me feel
Alive, alive, alive
I'll take my chance 'cause luck is on my side
I tell you something I know what you're thinking
I tell you something I know what you're thinking
Her name is Rio and she dances on the sand
Just like that river twists across a dusty land
And when she shines she really shows you all she can
Oh Rio, Rio dance across the Rio Grande
Her name is Rio, she don't need to understand
And I might find her if I'm looking like I can
Oh Rio Rio hear them shout across the land
From mountains in the north down to the Rio Grande
Doo doo doo doo doo doo doo 
Doo doo doo doo doo doo doo`


const DDArray = (Rio.replace(/\n/gi, ' ').replace(/\'/gi, '').replace(/,/gi, '').split(' '))

let DDObject ={}

DDArray.map(lyric=>{
    if(Object.keys(DDObject).includes(lyric)){
        DDObject[lyric] += 1
    }else{
        DDObject[lyric] = 1
    }
})

// console.log(DDObject)

let highestNum = Math.max(...Object.values(DDObject))
// console.log(highestNum)

const answer = Object.keys(DDObject).filter(word =>{
    return DDObject[word] === highestNum
})

console.log(answer)

// =================================================================================

const leapYear = year =>{
    if(year % 400 === 0){
        console.log('Leap Year')
    } else if( year % 4 === 0 || year % 100 !== 0){
        console.log('Leap Year')
    } else{
        console.log('No Leap Year')
    }
}

leapYear(2014)
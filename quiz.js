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
// Find Leap Year

const leapYear = year =>{
    if(year % 400 === 0){
        console.log('Leap Year')
    } else if( year % 4 === 0 && year % 100 !== 0){
        console.log('Leap Year')
    } else{
        console.log('No Leap Year')
    }
}

leapYear(2014)
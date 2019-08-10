var fs = require('fs')

let contents = (fs.readFileSync('names.txt','utf8'));
    // console.log(contents)
let namesArray = contents.split('\n')
    // console.log(namesArray)
let numbers = (fs.readFileSync('numbers.txt','utf8'));
let numbersArray = numbers.split('');

let sum = 0
for (i=0;i<(numbersArray.length);i++){
    sum += Number(numbersArray[i]) 
}
console.log(sum)


let newArray =[]
for (let i = 0; i < namesArray.length; i++){
    if (namesArray[i] === (((namesArray[i].split('')).reverse()).join(""))){
        newArray.push(namesArray[i])
    }
}
console.log(newArray)
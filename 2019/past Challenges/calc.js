const ourCalculation = "1+3"

const numbers = ourCalculation.split(/\+|\-|\×|\÷/g);

const intArray = numbers.map(integer => parseInt(integer))

console.log(intArray)



const operators = ourCalculation.replace(/[0-9]|\./g, "").split("")

console.log(numbers)

console.log(operators)

function answer(numbers, action){
    console.log(action)
    console.log(numbers[0])
    if (`${action}` === "+" ){
        console.log(numbers[0] + numbers[1])
    } else if (`${action}` === "-" ){
        console.log(numbers[0] - numbers[1])
    }

}

answer(intArray, operators)

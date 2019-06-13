// .sort accepts comparator function
    // two items...a or b

const  numberCompare = (num1, num2) => {
    return num1 - num2
}

const numCom2 = (num1, num2) => {
    return num2 - num1
}

const array = [6,4,15,10]

// console.log(array.sort(numberCompare))
// console.log(array.sort(numCom2))

const compareByLength = (str1, str2) => {
    return str1.length - str2.length
}

const catsArray = ['Midnight', 'Callie', 'Nacheaux', 'Felix', 'Heithcliff', 'Garfield']

// console.log(catsArray.sort(compareByLength))
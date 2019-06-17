const array = ['cat', 'Greg', 'dog', 'cat', 'Midnight', "Callie", "Nacheaux", "Midnight",
'cat', 'burrito', 'Margarita', 'taco', 'Margarita', 'burrito']

const removeDuplicates = arr =>{
    let duplicatelessArray =[]
    arr.map(str => {
        !duplicatelessArray.includes(str) ? duplicatelessArray.push(str) : null
    })
    console.log(duplicatelessArray)
}

removeDuplicates(array)


// https://www.hackerrank.com/challenges/gem-stones/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

const gemstones = arr => {
    const sortedArray = arr[0].split("").sort()
    let newArr = [];
    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] !== sortedArray[i + 1]) {
            newArr.push(sortedArray[i]);
        }
    }

    let finalCount = 0;
    let firstCount = 0;
    newArr.map(letter =>{
        finalCount += firstCount;
        firstCount = null;
        for (let i = 0; i < arr.length; i++) {
            const currArr = arr[i].split("").sort().join("")
            let secondCount = 0
            for (let j = 0; j < currArr.length; j++) {
                currArr[j] === letter ? secondCount ++ : null;
            }
             firstCount === null ? firstCount = secondCount :
            secondCount < firstCount ? firstCount = secondCount: null
        }
    })
    console.log(finalCount)
    return finalCount

}
const array = ["abcdde", "baccd", "eeabg" ]
gemstones(array)

// let answer = arr[0].split("")
// for (let i = 1; i < arr.length; i++){
//     answer = answer.filter(letter =>{
//         return arr[i].includes(letter) ? letter : null
//     })
// }
// console.log(answer, answer.length)
// return answer.length
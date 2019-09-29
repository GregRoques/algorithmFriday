// https://www.hackerrank.com/challenges/gem-stones/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
const gemstones = arr => {
    let answer = arr[0].split("")
    for (let i = 1; i < arr.length; i++){
        answer = answer.filter(letter =>{
            return arr[i].includes(letter) ? letter : null
        })
    }
    console.log(answer, answer.length)
    return answer.length

}
const array = ["abcdde", "baccd", "eeabg" ]
gemstones(array)
// Hacker Rank
// https://www.hackerrank.com/challenges/funny-string/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

const funnyString = (s) => {
    const ascii = (s.split("")).map(char => {
        return char.charCodeAt(0)
    })

    let differences = [];
    let differencesReverse = []
    
    for (let i = 0; i < ascii.length - 1; i ++){
        differences.push(Math.abs(ascii[i] - ascii[i+1]))
        differencesReverse.unshift(Math.abs(ascii[i] - ascii[i+1]))
    }
        differences.join("") === differencesReverse.join("") ? console.log("Funny") : console.log("Not Funny");
        return differences.join("") === differencesReverse.join("") ? ("Funny") : ("Not Funny");
}

const string = "acxz"
// const string = "bcxz"
funnyString(string)
// https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

const hackerrankInString = s => {
    let newWord = "";
    const originalWord = "hackerrank";
    for (let i =0; i < originalWord.length; i++){
        for (let j = 0; j < s.length; j++){
            if (originalWord[i] === s[j]){
                newWord += s[j]
                break
            };
        };
    };
    console.log(newWord)
    newWord === originalWord ? console.log("Yes") : console.log("No");
};

// const myString = "hereiamstackerrank";
const myString = "hackerworld";
hackerrankInString(myString);
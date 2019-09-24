// Hacker Rank
// https://www.hackerrank.com/challenges/caesar-cipher-1/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=7-day-campaign

const caesarCipher = (s, k) => {
    const alphabet ="abcdefghijklmnopqrstuvwxyz"; //26 letters = index of 0 – 25
    const cipher = s.split("").map(letter => {
        const searchLetter = letter.toLowerCase()
        if (alphabet.includes(searchLetter)){
            let newindex = alphabet.indexOf(searchLetter) + k
            if(newindex > 25) { 
                while (newindex > 25){
                    newindex -= 26} 
            }
            return letter === searchLetter.toUpperCase() ? (alphabet[newindex]).toUpperCase() : alphabet[newindex];
        } else {
            return letter
        }
    });
    console.log(cipher.join(""))
    return cipher.join("")
};

const string = "middle-Outz";
const rotate = 2;
caesarCipher(string, rotate)
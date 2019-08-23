const isAnagram = (firstWords, secondWords) => {
    for (let i=0; i <firstWords.length; i++) {
        const firstWord = firstWords[i].split('').sort().join('');
        const secondWord = secondWords[i].split('').sort().join('');
        firstWord === secondWord ? console.log(1) : console.log(0)
    }
};

const set1 = ["cinema", "host", "aba", "train"];
const set2 =["iceman", "shot", "bab", "rain"];
isAnagram(set1, set2)


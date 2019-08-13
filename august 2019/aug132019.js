function designerPdfViewer(h, word) {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const wordArray = word.split("");
    let letterHeight = "";
    wordArray.map(letter=>{
        const alphabetIndex = letters.indexOf(letter);
        const currentValue = h[alphabetIndex];
        currentValue > letterHeight ? letterHeight = currentValue : null
    });
    const answer = letterHeight * wordArray.length
    console.log(answer)
    return answer
};

const heights = '1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5';
const letterString = 'abc';

designerPdfViewer(heights, letterString);
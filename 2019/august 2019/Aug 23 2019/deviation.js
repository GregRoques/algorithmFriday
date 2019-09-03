const deviation = (array, deviation) => {
    let j = 0;
    let maxDeviation = 0;
    while( j + deviation <= array.length) {
        console.log(array)
        const currentNumbers = array.slice(j, deviation+j).sort((a, b) => a - b);
        // console.log(currentNumbers)
        const currentDeviation = currentNumbers[currentNumbers.length -1] - currentNumbers[0]
        console.log(currentDeviation)
        currentDeviation > maxDeviation ? maxDeviation = currentDeviation: null
        j++
    };
    console.log(maxDeviation)
};
const list = [6,9,4,7,4,1];
const num =3;
deviation(list,num);
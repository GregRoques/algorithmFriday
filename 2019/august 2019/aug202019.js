// Function Description:
// Complete the getTotalX function in the editor below. 
// It should return the number of integers that are betwen the sets.
// getTotalX has the following parameter(s):
// a: an array of integers
// b: an array of integers

// Personal Note – Map Vs. Every: https://stackoverflow.com/questions/7340893/what-is-the-difference-between-map-every-and-foreach

const getTotalX = (a, b) => {
    const ceiling = Math.max(...b);
    let count = 0;

    for (let i = 1; i <= ceiling; i++){
        if (a.every(num => (i % num === 0))) {
            if (b.every(num => ( num % i === 0))) {
                count ++
            };
        };
    };
    console.log(count);
    return(count);
};

const arrayA = [2,4];
const arrayB = [16,32,96];

getTotalX(arrayA, arrayB);
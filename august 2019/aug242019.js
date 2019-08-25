
// Lily has a chocolate bar that she wants to share it with Ron for his birthday. 
// Each of the squares has an integer on it. 
// She decides to share a contiguous segment of the bar selected such that the length of the segment matches 
// Ron's birth month and the sum of the integers on the squares is equal to his birth day. 
// You must determine how many ways she can divide the chocolate.

// s: an array of integers, the numbers on each of the squares of chocolate
// d: an integer, Ron's birth day
// m: an integer, Ron's birth month



const birthday = (s, d, m) => {
    const add = (a, b) => a + b;
    let squares = 0;

    for (let i = 0; i + m <= s.length; i++){
        const sum = [...s].splice(i, m).reduce(add)
        if (sum === d) {
            squares ++
        }
    }
    console.log(squares);
    return squares;
}

const array = [4];
const day = 4;
const month = 1;

birthday(array, day, month)

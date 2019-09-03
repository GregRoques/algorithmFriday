// Complete the countApplesAndOranges function in the editor below. It should print the number of apples and oranges that land on Sam's house, each on a separate line.

// countApplesAndOranges has the following parameter(s):

// s: integer, starting point of Sam's house location.
// t: integer, ending location of Sam's house location.
// a: integer, location of the Apple tree.
// b: integer, location of the Orange tree.
// apples: integer array, distances at which each apple falls from the tree.
// oranges: integer array, distances at which each orange falls from the tree.

const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
    let answer = [0,0]

    apples.map(apple => {
        if (apple + a >= s && apple + a <= t){
            answer[0] ++
        };
    });

    oranges.map(orange => {
        if(orange + b >=s && orange + b <= t){
            answer[1] ++
        };
    });
    console.log(answer);
    return answer;
};

const houseStart = 7;
const houseEnd = 11;
const appleTree = 5;
const organgeTree = 15;
const redDelicious = [-2,2,1];
const floridaOrange =[5,-6];

// const houseStart = 7;
// const houseEnd = 10;
// const appleTree = 4;
// const organgeTree = 12;
// const redDelicious = [2,3,-4];
// const floridaOrange =[3,-2,-4];

countApplesAndOranges(houseStart, houseEnd, appleTree, organgeTree, redDelicious, floridaOrange);
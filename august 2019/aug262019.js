// Divisible Sum Pairs 
// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

function divisibleSumPairs(n, k, ar) {
    let answer = 0
    console.log(ar)
    for (let i = 0; i +1 < n; i++){
        for( let j = i+ 1; j < n; j++){
            console.log(ar[i], ar[j])
            if((ar[i] + ar[j]) % k === 0){
                answer ++
            }
        }
    }
    console.log(answer)
}

const anArray = [1, 3, 2, 6, 1, 2];
const anArrayLength = 6;
const divideBy = 3;

divisibleSumPairs(anArrayLength, divideBy, anArray)
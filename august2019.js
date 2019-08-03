// Total pairs of socks

function sockMerchant(n, ar) {
    let socks = {};
    let pairs = [];

    ar.map(num => {
        let sock = num.toString()
        if (Object.keys(socks).includes(sock)) {
            socks[sock] += .5
        }else{
            socks[sock] = .5
        }
    });

    Object.keys(socks).map(sock=>{
        pairs.push(Math.floor(socks[sock]))
    });

    const answer = pairs.reduceRight((a,b)=> a + b);

    // console.log(socks, pairs, answer);

}
const arrayOfNumbers = [1,2,1,2,1,2,3,4,4,5,6,7,7,8,8,8,8,8,8];
sockMerchant(null, arrayOfNumbers);

// ________________________________________________________________________________________________
// Count Valleys and Mountains
// n is # of setupMaster, s is his path

function countingValleys(n, s) {
    const path = s.split('')
    let ground = 0;
    let Mountains = 0
    let Valleys = 0

    path.map(vertical=>{

        if(vertical === "U"){
            if(ground === 0){
                ground += 1;
                Mountains += 1
            }else{
                ground += 1
            }
            
        } else{
            if(ground === 0){
                ground -= 1;
                Valleys += 1
            }else{
                ground -= 1
            }
        }
           
    })
    // console.log('Valleys: ', Valleys, 'Mountains: ', Mountains)
};

const hike = 'UDDDUDUU'
countingValleys(null, hike)

// ________________________________________________________________________________________________
// Repeated String
// n is # of letters to consider, s is the string to repeat

function repeatedString(s, n) {
    let count = 0
    let stringRepeatedArray = []
    let answer = 0

   if(s.length === 1){
       if(s === 'a'){
        answer = n
       } else{
        answer = 0
       }
   } else {
        for(let i = n-1; i >=0; i--){
            stringRepeatedArray.push(s[count])
            count === s.length - 1 ? count = 0 : count+=1
            
        }
        
        stringRepeatedArray.map(a=>{
            a === 'a' ? answer +=1 : null
        })
    }
    // console.log(answer)
    return answer
}

const number = 10
const string = 'aba'
const number1 = 1000000000000
const string1 = 'a'
repeatedString(string, number)
repeatedString(string1, number1)
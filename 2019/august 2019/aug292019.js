// Migratory Birds
// https://www.hackerrank.com/challenges/migratory-birds/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

// const migratoryBirds = arr => {
//     let birds = {};
//     const bird = [...new Set(arr)];

//     arr.map(bird =>{
//         birds[bird] ? birds[bird]++ : birds[bird] = 1;
//     });
    
//     let finalbirds =[]
//     let counter = 0;
    
//     bird.map(aBird => {
//         if(birds[aBird] > counter){
//             finalbirds = [aBird];
//             counter = birds[aBird]
//         } else if (birds[aBird] === counter){
//             finalbirds.push(aBird)
//         };
//     });

//     const answer = finalbirds.length === 1 ? finalbirds[0] : Math.min(...finalbirds);

//     console.log(answer);
//     return answer;
// };

// // const flock = [1, 4, 4, 4, 5, 3];
// const flock = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
// migratoryBirds(flock)

// ========================================================================================================
// Kinda Shorter Solution

const migratoryBirds = arr => {
    let birds = {};
    arr.map(bird =>{
        birds[bird] ? birds[bird]++ : birds[bird] = 1;
    });

    const birdsArray = (Object.entries(birds)).sort((a,b) =>{
        return a[1] > b[1] ? 1 : -1;
    })

    let finalbirds = []; 
    for (let i = 0; i< birdsArray.length; i++){
        if(birdsArray[i][1] === birdsArray[birdsArray.length-1][1]){
            finalbirds.push(birdsArray[i][0])
        }
    }

    const answer = finalbirds.length === 1 ? finalbirds[0] : Math.min(...finalbirds);
    console.log(answer);
}

// const flock = [1, 4, 4, 4, 5, 3];
const flock = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
migratoryBirds(flock)
// Breaking the Record
https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

const breakingRecords = scores => {
    const scoresArray = scores.split(" ")
    const firstNum = Number(scoresArray.shift());

    let besties = [firstNum];
    let worsties = [firstNum];
        scoresArray.map(next=>{
            let nextNum = Number(next)
            if(nextNum > besties[besties.length -1]){
                besties.push(nextNum)
            } else if (nextNum < worsties[worsties.length -1]){
                worsties.push(nextNum)
            } else {
                return
            }
        })
        const best = besties.length - 1
        const worst = worsties.length - 1
        console.log(best, worst)
    
};

myScores ="3 4 21 36 10 28 35 5 24 42"
breakingRecords(myScores)
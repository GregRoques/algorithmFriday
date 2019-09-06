// https://www.hackerrank.com/challenges/mars-exploration/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

const marsExploration = s => {
    let answer =0;
    for (let i = 0; i < s.length; i+=3) {
        if(s[i] !== 'S') {
            answer++;
        }
        if(s[i + 1] !== 'O') {
            answer++;
        }
        if(s[i + 2] !== 'S') {
            answer++;
        }
    };
    console.log(answer);
    return answer;
}

const message = "SOSSOSSSSOSOIEISOSPOISOSIUSISO"
marsExploration(message)

// const answer = (s.replace(/S/g,"").replace(/O/g,"")).length
    // // console.log(answer)
    // const answer = (s.replace(/SOS/g,"")).length

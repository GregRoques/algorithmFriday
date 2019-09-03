const hill = v => {
    const array2 = [...v].sort((a,b) => a - b);

    const smallest = array2[0]
    const highest = array2[array2.length-1]

    const compare1 = smallest - array2[v.indexOf(smallest)]
    const compare2 = v[array2.indexOf(highest)] - highest
    
    const answer = compare1 < compare2 ? compare1 : compare2
    console.log(answer, compare2)
};

anArray =[5,4,3,2,8]
hill(anArray)

// Below works, but the answer above seem more Big O friendly ... still better than a bubble sort, I believe

    // const array2 = [...v].sort((a,b) => a - b);
    // let condensed1 = [];
    // let condensed2 = []

        //this weeds out any comparisons that won't give us a negative number
    // for (let i = 0; i < array2.length ; i++){
    //     v[i] >= array2[i] ? break : condensed1.push(v[i]) && condensed2.push(array2[i]);
    // }

    // let answer = 0

    // for (let i = 0; i < condensed1.length; i++){
    //     const runnerUp = condensed1[i] - condensed2;
    //      runnerUp < answer ? answer = runnerUp : null;
    // }
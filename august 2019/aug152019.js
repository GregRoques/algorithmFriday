const utopianTree = n => {
    let j = 1
    for (let i = 0; i < n; i++){
       if (i % 2 !== 0 ){
           j ++
       } else {
           j === 1 ? j ++ : j *= 2
       }
    };
    console.log(j);
    return j;
};

// const cycle = '5';
// const cycle = '0';
// const cycle = '1';
// const cycle = '4';
utopianTree(cycle);
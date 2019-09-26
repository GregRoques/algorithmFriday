const alternatingCharacters = (s) => {
    let count = 0

    for (let i = 0; i < s.length; i++){
        s[i] === s[i+1] ? count +=1 : null;
    }

    console.log(count)
    return count

}

// const string = "AAAA" //3
// const string = "BBBBB" //4
// const string = "ABABABAB" //0
// const string = "BABABA" //0
const string = "AAABBB" //4

alternatingCharacters(string)
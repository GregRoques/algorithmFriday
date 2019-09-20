const panagram = string => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const stringEdit = (string.replace(/[^0-9a-zA-Z_]/gi, "").toLowerCase())
    const check = alphabet.split("").filter((letter, i)=>{
        return stringEdit.includes(letter) ? letter : null;
    });
    alphabet === check.join("") ? console.log("A Panagram") : console.log("Not a Panagram")
    return alphabet === check.join("") ? "panagram" : "not panagram"
};

panagram("The quick brown fox jumps over the lazy dog")
// panagram("Callie and Midnight love Turkey")
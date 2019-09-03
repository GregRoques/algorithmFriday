const camelcase = s => {
let word = 1
const camelArray = s.split("");
camelArray.map(cap => {
    cap === cap.toUpperCase() ? word++ : null
});
console.log(word);
return word;
};
const name = "saveChangesInTheEditor"
camelcase(name)
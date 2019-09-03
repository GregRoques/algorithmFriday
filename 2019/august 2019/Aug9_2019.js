// Complete the hurdleRace function in the editor below. 
// It should return the minimum units of potion Dan needs to drink to jump all of the hurdles.
// hurdleRace has the following parameter(s):
// k: an integer denoting the height Dan can jump naturally
// height: an array of integers denoting the heights of each hurdle

function hurdleRace(k, height) {
let magicPotion = 0
let jumpman = k

height.map(hurdle =>{
    if (hurdle > jumpman){
        let dose = hurdle - jumpman
        magicPotion += dose
        jumpman += dose
    }
})
console.log(magicPotion)

}

hurdleRace(4, [1,6,3,5,2])
hurdleRace(7, [2,5,4,5,2])
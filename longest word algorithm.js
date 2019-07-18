//find the longest word in the array; if there are 
//two words of equal-longest length, only return the first one

const stuff = ['car', 'catch', 'burgerkingtacobell123', 'cat', 'tacobellburgerking321']

let answer = 'a'
console.log(stuff.length)
for(var i=0; i<stuff.length; i++){
    if(stuff[i].length > answer.length){
        answer = stuff[i]
    }
    console.log(answer)
}

// Complete the miniMaxSum function in the editor below. 
// It should print two space-separated integers on one line: 
// the minimum sum and the maximum sum of 4 of 5 elements.

function miniMaxSum(arr) {
    const array = arr.sort((a,b)=> a-b)
    const arrayMin = array.slice(0, array.length-1)
    const arrayMax = array.slice(1, array.length)
    
    let min = 0
    arrayMin.map(num=>{
        min +=num
    })

    let max = 0
    arrayMax.map(num=>{
        max +=num
    })

    // console.log(min, max)
}

miniMaxSum([1,2,3,4,5])

// ========================================================================================
// Complete the bonAppetit function in the editor below. 
// It should print Bon Appetit if the bill is fairly split. 
// Otherwise, it should print the integer amount of money that Brian owes Anna.

// bonAppetit has the following parameter(s):

// bill: an array of integers representing the cost of each item ordered
// k: an integer representing the zero-based index of the item Anna doesn't eat
// b: the amount of money that Anna contributed to the bill

function bonAppetit(bill, k, b) {

    bill.splice(k,1)

    function annaBillArray(total, eachItem) {
        return total + Math.round(eachItem);
    }

    const annaOwes = bill.reduce(annaBillArray,0)/2

    b === annaOwes ? console.log('Bon Appetit') : console.log(b-annaOwes)

}
// bonAppetit([3,10,2,9], 1, 12)
// bonAppetit([3,10,2,9], 1, 7)

// ========================================================================================
// Complete the pageCount function in the editor below. 
// It should return the minimum number of pages Brie must turn.

// pageCount has the following parameter(s):

// n: the number of pages in the book
// p: the page number to turn to

function pageCount(n, p) {

    const midWay = Math.floor(n/2)
    let pageCount = 0

    if(p <= midWay){
        for(let i = 1; i<=p;i++){
            i % 2 === 0 ? pageCount++ : null
        }
    }else{
        
        for(let i = n % 2 !== 0 ? n-1 : n; i>=p; i--){
            i % 2 !== 0 ? pageCount++ : null
        }
    }

    console.log(pageCount)
}

// pageCount(7,4)
// pageCount(6,2)
pageCount(5,4)
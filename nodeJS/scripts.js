// for (i=2; i<=20; i++){
//     let m = i * 2;
//     let s = m * m;
//     console.log(`${i} x ${i} = ${m} moves x ${s} sides.`)

// }

// ========================================= Trying to return a factorial

// path = 0

// for (i=1; i<20;i++){
    
// path *= i + i
// console.log(path)
    
// }





// =========================================== Ian Solution

// let numRows = 20;
// let numCols = 20;
// let matrix = [];
// for (let row = 0; row < numRows; row++){
//   matrix.push([]);
//   for(let cell = 0; cell < numCols; cell++){
//     if (row === 0 || cell === 0){
//       matrix[row][cell] = 1;
//     } else {
//       matrix[row][cell] = matrix[row-1][cell] + matrix[row][cell-1];
//     }
//   }
// }
// matrix.forEach(row => console.log(row));
// console.log(`The number of paths is ${matrix[numRows-1][numCols-1]}`);

// ===========================

// =========================================== Rob Solution

// function findRoutes(gridSize){
//     // console.log(gridSize)
//     let routeMatrix = [];
//     for(let i = 1; i <= gridSize; i++){
//         routeMatrix.push(1);
//     }

//     for(let i = 1; i <= gridSize; i++){
//         for(let j = 1; j < gridSize; j++){
//             routeMatrix[j] = routeMatrix[j] + routeMatrix[j-1];
//         }
        
//         routeMatrix[i] = 2 * routeMatrix[i-1];
//     }
//     // console.log(routeMatrix)
//     return routeMatrix[gridSize]
// }


// console.time('grid')
// gridSize = 2000;
// n = findRoutes(gridSize);
// console.log(n)

// ========================================================= Palindrome Exercise

// let highestPalindrome = 0;

// function reverseString(str){
//     let newNum;
//     str = product.toString();
//     for (i = 1; i < str.length; i++){
//         newNum += (str[str.length-1])
//     }
//     return Number(newNum);
// }

// for (let i=999;i>100;i--){
//     for (let j= 999;j>100;j--){
//         product = i * j;
//         let palindrome = reverseString(product)

//     if (product === palindrome){
//         if(product > highestPalindrome) {
//         highestPalidrome = product;
//         }
//     }
//     }
// }
// console.log(highestPalindrome)

        // ========================================================================================= Palindrome Kyle Solution

        // A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.


        // Find the largest palindrome made from the product of two 3-digit numbers.
        
        
        let highestPalindrome = 0;
        
        let reverseStr = str => {
         let arr = str.split('');
         let reversed = arr.reverse();
         return reversed.join('');
        
        }
        
        for (let i = 999; i > 100; i--) {
         for (let j = i; j > 100; j--) {
           let product = i * j;
        
           //is the product the same forward & backwards?
           let productStr = product.toString();
        
           if(productStr === reverseStr(productStr)){
        
             if(product > highestPalindrome) {
        
               highestPalindrome = product;
             }
           }
         }
        }
        
        // highestPalindrome is the answer
        console.log(highestPalindrome);
        
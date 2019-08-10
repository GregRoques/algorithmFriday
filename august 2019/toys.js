// Mark and Jane are very happy after having their first child. Their son loves toys, so Mark wants to buy some. There are a number of different toys lying in front of him, tagged with their prices. Mark has only a certain amount to spend, and he wants to maximize the number of toys he buys with this money.

// Given a list of prices and an amount to spend, what is the maximum number of toys Mark can buy? For example, if  and Mark has  to spend, he can buy items  for , or  for  units of currency. He would choose the first group of  items.

// Function Description

// Complete the function maximumToys in the editor below. It should return an integer representing the maximum number of toys Mark can purchase.

// maximumToys has the following parameter(s):

// prices: an array of integers representing toy prices
// k: an integer, Mark's budget
// Input Format

// The first line contains two integers,  and , the number of priced toys and the amount Mark has to spend. 

function maximumToys(prices, k) {
    let cost = 0
    let count =0
    let sortedPrices = prices.sort((a,b) => a-b)

    sortedPrices.map((toy)=>{
        if(toy < k){
            cost += toy
            if(cost <=k){
                count++
            }
        }
    })
    // console.log(count)
    return count
}

maximumToys([1,2,3,4], 7)
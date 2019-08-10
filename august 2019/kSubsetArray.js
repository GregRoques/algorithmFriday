// Find the number of subset arrays divisible by a single number
// k = the divisible number; nums = array

const kSub = (k, nums) => {
    let answer = 0
    
    for(let i = 0; i<nums.length; i++){
        let array=[]
        for(let j = i; j<nums.length; j++){
            
            array.push(nums[j])
           
            let subArraySum = 0
            array.map(singleNum=>{
                subArraySum += singleNum
            })
            
            if(subArraySum % k === 0){
                answer++
            }
        }
    }
    console.log(answer)
}

const number = 5
const array = [5,10,11,9,5]
kSub(number, array)
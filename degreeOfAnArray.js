const degreeOfAnArray = (input) =>{
    
    const n = input.split('\n')[1].split(' ')
    
    let contigiousSubarrays = {}

    for(let i = 0; i<=n.length -2; i++){
        for(let j = i+1; j<=n.length-1; j++){
            
            if (n[i] === n[j]){
                contigiousSubarrays[(n[i])] ? contigiousSubarrays[(n[i])] +=1 : contigiousSubarrays[(n[i])] = 1
            } else {
                i++
            }
        }
    }

    const smallestArray = Math.floor(...Object.values(contigiousSubarrays))

    let answer = Object.keys(contigiousSubarrays).map((subArray, i)=>{
        if(contigiousSubarrays[subArray] === smallestArray){
            return Object.keys(contigiousSubarrays)[i]
        }
    })

    console.log(answer)
}

degreeOfAnArray(`5
1 2 2 3 1`)

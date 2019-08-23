const braces = array => {

    var finalArrays = [];
    var answer = [];

    //split strings to arrays and weed out uneven arrays
    array.filter(individualArray =>{
        if (individualArray.length % 2 === 0){
            finalArrays.push(individualArray.split(''))
        } else {
            answer.push(0)
        }
    })

    finalArrays.map(array => {
        const matches = {
            '{':'}',
            '[':']',
            '(':')'
        }

        //an array of opening tags
        let matchers =[];

        for ( let i =0; i < array.length; i++){
            let currMatch = array[i];
            // See if "currMatch" key matches key in matchers
            if (matches[currMatch]){
                //if so, push key to "matchers"
                matchers.push(currMatch)
            } else {
                //if "currMatch" does not correspond to a key, it must correspond to a value
                //if the "matchers" key's corresponding "matches" value equals "currMatch", pop off the "matchers" key
                if (matches[matchers[matchers.length-1]] === currMatch){
                    matchers.pop()
                }
                
            }
        }
        // if the "matchers" length is 0, that means each of the "matchers" keys had a properly corresponding "matches" value
        matchers.length ? answer.push(0) : answer.push(1)
    })
    console.log(answer)
};

expressions = [ `)(){}`, `[]({})`, `([])`, `{(){}}`, `([)]` ];
braces(expressions);
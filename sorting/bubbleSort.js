// bubble sort, bubble bubble bubble sort

    //Buble Sort – a sorting algorithm where the largest values bubble up to the top!
        //sometimes called sinking sort, because largest sinks to the end
        //NOT the best (quickest) sorting method

        //swapping examples:
        
        //ES5
        const swapES5 = (arr, idx1, idx2) => {
            var temp = arr[idx1];
            arr[idx1] = arr[idx2];
            arr[idx2] = temp;
        }

        //ES6+
        const swapES6 = (arr, idx1, idx2) => {
            [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]] 
        }

//Now, a bubble sort

const bubbleSort = arr => {
    var noSwaps;
    for (let i = arr.length ; i > 0; i--){ //so it repeats the swap method for the full length of the array
        noSwaps = true;
        for (let j = 0; j < i -1 ; j++){ //each swap cycle
            if(arr[j]>arr[j+1]){
                noSwaps = false; //break if all swaps are complete before cycle end
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
        if(noSwaps) break;
        console.log('one pass: ', arr)
    }
   console.log(arr)
}

bubbleSort([37,45,29,8 ,12, 97, 6, 999,2])


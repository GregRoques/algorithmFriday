//insertion sort – builds up a sort gradually, creating larger left half which is always sorted

const insertionSort = arr => {
    for (let i = 1; i < arr.length; i++){
        var currVal = arr[i];
        for (var j = i -1; j >= 0 && arr[j] > currVal; j--){
            arr [j+1] = arr[j]
            console.log(arr)
        }
        arr[j+1] = currVal
    }
    console.log('final answer: ', arr)
}



insertionSort([2,1,9,76,4])

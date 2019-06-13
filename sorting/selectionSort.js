//similar to bubble sort
    //however, instead of first placing large values into sorted position, it places small values into sorted position
    //easy, but not very Good either

const selectionSort = arr => {

    const swap = (arr, idx1, idx2) =>{
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]] )
    }

    for (let i = 0; i <arr.length; i++){
        let min = i;
        for (let j = i + 1; j<arr.length; j++){
           if(arr[j] < arr[min]){
               min = j
           }
        }
        if(i !== min) swap(arr, i, min)
    }
    console.log('final pass: ', arr)
}

selectionSort([43,22,10,19,17])
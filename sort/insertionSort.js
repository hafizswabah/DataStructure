let arr= [8,7,1,4,3,2]

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
          
            array[j + 1] = array[j];
            j--;
        }
        array[j+1] = key;
    }
    return array;
}

console.log(insertionSort(arr));




for(let i=1; i<arr.length; i++){
    let key=arr[i]
    let swapPos= i;
    for(let j=i-1; j>=0; j--){

        if(key < arr[j]){
            let temp=arr[j];
            arr[j]=arr[swapPos];
            arr[swapPos]=temp;
            swapPos=j;   
        }
    }
}


console.log(arr)
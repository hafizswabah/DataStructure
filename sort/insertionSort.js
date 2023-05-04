// let arr = [9, 8, 7, 6, 5, 4];

// function insertionSort(array) {
//     for (let i = 1; i < array.length; i++) {
//         let key = array[i];
//         let j = i - 1;
//         while (j >= 0 && array[j] > key) {
//             array[j + 1] = array[j];
//             j--;
//         }
//         array[j] = key;
//     }
//     return array;
// }

// console.log(insertionSort(arr));


let arr= [5,6,3,4,1,5]

for(let i=1; i<arr.length; i++){
    let key=arr[i]
    console.log(arr)
    for(let j=i-1; j>=0; j--){
        if(key < arr[j]){
            let temp=arr[j];
            arr[j]=key;
            key=temp;
        }
    }
    arr[i]=key
}


console.log(arr)
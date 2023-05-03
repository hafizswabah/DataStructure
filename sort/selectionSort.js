let arr = [6, 3, 5, 9, 7, 1]
let temp;
function selectionSort(arr) {
    for (i = 0; i < arr.length; i++) {
        let min = i
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                min = j
            }
            console.log();
        }
        if(i!=min){
            temp=arr[i]
            arr[i]=arr[min]
            arr[min]=temp
        }
    }
    return arr
}
console.log(selectionSort(arr));

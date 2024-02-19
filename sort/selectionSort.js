let arr = [9,7,6,5,4,3,2,1,8]
let temp;
function selectionSort(arr) {
    for (i = 0; i < arr.length; i++) {
        
        let min = i
        for (j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j
            }
         
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

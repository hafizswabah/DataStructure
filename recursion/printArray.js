let arr = [1, 2, 3, 4]

function printArray(arr, i = 0) {
    if (i === arr.length)
        return 0
    else {
     console.log(arr[i]);
     printArray(arr,i+1)
    }
}
printArray(arr)
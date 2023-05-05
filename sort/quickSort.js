let arr = [8, 7, 6, 5, 4, 3, 2, 1]
function quickSort(arr) {
    if(arr.length<2){
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (pivot < arr[i]) {
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}
console.log(quickSort(arr));
let arr = [5, 7, 9, 8, 1, 2, 4]
function bubbleSort(arr) {
    let temp;
    let swapped;
    do {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
    } while (swapped)
    return arr
}
console.log(bubbleSort(arr));
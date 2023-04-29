let arr = [1, 2, 3, 4, 5]

function sum(arr, i=0) {
    if (i===arr.length) {
        return 0
    } else {
        return arr[i] + sum(arr, i + 1)
    }
}
console.log(sum(arr));
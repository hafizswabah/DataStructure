
let target = 5
function binarySearch(arr, value, left = 0, right) {
    right = right ?? arr.length - 1

    if (left > right) {
        return 'not found'
    }
    const mid = Math.floor((left + right) / 2)
    if (arr[mid] === value) {

        return mid

    }
    if (value > arr[mid]) {
        return binarySearch(arr, value, left = mid + 1, right)

    } else {
        return binarySearch(arr, value, right = mid - 1, left)
    }
}
console.log(binarySearch([1, 2, 3, 5], 5));
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11]
let target = 10
function binarySearch(arr,target){
    let leftIndex=0
    let rightIndex=arr.length-1
    while(leftIndex<=rightIndex){
        let middleIndex=Math.floor((leftIndex+rightIndex)/2)
        if(target===arr[middleIndex]){
            return middleIndex
        }
        if(target<arr[middleIndex]){
            rightIndex=middleIndex-1
        }else{
            leftIndex=middleIndex+1
        }
    }
    return 'not found'
}
console.log(binarySearch(arr, target));
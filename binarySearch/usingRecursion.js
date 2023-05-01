let arr=[1,2,3,4,5]
let target=5
function binarySearch(arr,value,left=0,right=arr.length-1){
    if(left>right){
        return 'not found'
    }
    const mid=Math.floor((left+right)/2)
    if(arr[mid]===value){
        return mid
    }
    if(value>arr[mid]){
         return binarySearch(arr,target,left=mid+1,right)

    }else{
     return binarySearch(arr,target,right=mid-1,left)
    }
}
console.log(binarySearch(arr,5));
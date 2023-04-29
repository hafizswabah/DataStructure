function linearSearch(arr,target){
for (i=0;i<arr.length;i++)
{
    if(arr[i]==target){
        return i
    }
}
return 'not found'
}


let arr=[1,2,3,4,5]
let target =5

console.log(linearSearch(arr,target));
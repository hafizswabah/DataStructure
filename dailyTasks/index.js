let str ='johna` smith'
let arr=str.split('')
let space=arr.indexOf(' ')
let k=1
let rev=[]
for(let i=0;i<space;i++){
    rev.push([arr[i]])
   
    for(let j=space+k;j<=space+k;j++){
       rev.push(arr[j])
    }
     k++
}
let a=rev.join('')
console.log(a);
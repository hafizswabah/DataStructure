let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let newArr = []

for (let i = 0; i < arr.length; i++) {
    let temp=[]

    for (let j = 0; j < arr.length; j++) {

        temp.push(arr[j][arr.length-i-1])
    }
    newArr.push(temp)
}
console.log(newArr);


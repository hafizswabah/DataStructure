let n = 555

function digit(n) {
    let arr = []
    let value = 0
    while (n > 0) {
        arr.unshift(n % 10)
        n = Math.floor(n / 10)
    }
   for (let i = 0; i < arr.length; i++) {
        value += arr[i]
    }
   return value
}

let num = digit(n)

if (num < 10) {
    console.log(num)
} else {
    let small = digit(num)
    console.log(small)
}
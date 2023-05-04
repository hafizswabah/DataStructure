
function lastSum(numb) {
    let value = 0
    while (numb > 0) {
        let digit = numb % 10
        value += digit
        numb = Math.floor(numb / 10)
    }
    return value
}

let num = lastSum(999999999999)

if (num < 10) {
    console.log(num);

} else {
    let leastvalue = lastSum(num)
    console.log(leastvalue);
}


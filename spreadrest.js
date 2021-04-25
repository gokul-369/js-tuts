var sum= function (a,b) {
    return (a+b)
}
var arr = [5, 8]
console.log(sum(...arr));

function sumpack(a,b,...args) {
    
    let sum = 0
    let multi = a*b
    for (const a of args) {
        sum+=a
    }
    return `the product of 1st 2 elements is ${multi} and sum of other elements is ${sum}`
}
console.log(sumpack(3,6,8,7,9));
// Anonymous function
(function (a, b, c) {
    return a + b + c
})

// Function expression
const x = 1
const sum = function (a, b) {
    return a + b
}

console.log(sum(1, 60))

const anotherSum = sum
console.log(anotherSum(1, 3))
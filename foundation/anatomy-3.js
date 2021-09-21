// Arrow function is always anonymous
const increment = (n) => {
    return n + 1
}

const increment2 = n => {
    return n + 1
}

const increment3 = n => n + 1

console.log(increment(1))
console.log(increment2(11))
console.log(increment3(82))

const sum = (a, b) => a + b
console.log(sum(53, 1))
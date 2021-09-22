const numbers = [1, 2, 3, 4, 5, 6]

const numberV2 = numbers.map(function (el) {
    return el * 2
})
const numberV2r = numbers.map(el => (el * 2) + 1000)
console.log(numberV2)
console.log(numberV2r)

const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Susan', score: 8.6 },
    { name: 'Emma', score: 9.4 },
    { name: 'Peter', score: 9.1 },
]

const getScore = el => el.score
const result = students
    .map(getScore)
    .map(Math.ceil)
    
console.log(students, result)
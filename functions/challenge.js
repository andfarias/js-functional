// somar(3)(4)(5)

function somar(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

const somarAB = somar(3)(4)
console.log(somarAB(13))

// fn -> 3 * 7
// fn -> 3 + 7
// fn -> 3 - 7
// calcular(3)(7)(fn)

function calcular(x) {
    return function (y) {
        return function (fn) {
            return fn(x, y)
        }
    }
}

const add = function (a, b) {
    return a + b
}

const subtract = function (a, b) {
    return a - b
}

const multiply = (x, y) => x * y

const divide = (x, y) => x / y

console.log(calcular(3)(7)(add))
console.log(calcular(3)(7)(subtract))
console.log(calcular(3)(7)(multiply))
console.log(calcular(3)(7)(divide))
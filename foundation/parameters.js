function logParams(a, b, c) {
    console.log(a, b, c)
}

logParams(1, 2, 3)
logParams(1, 2, 3, 4, 5)
logParams(1, 2)
logParams(1)

function defaultParams(a, b, c = 0) {
    console.log(a, b, c)
}

defaultParams(1, 2, 3)
defaultParams(1, 2, 3, 4, 5)
defaultParams(1, 2)

// spread/rest
function logNums(...num) {
    console.log(num)
    for (let n of num)
        console.log(n)
}

logNums(1, 2, 3)
const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

let promiseExample = new Promise(function (resolve) {
    resolve(['Ana', 'Bia', 'Carlos'])
});

promiseExample
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)
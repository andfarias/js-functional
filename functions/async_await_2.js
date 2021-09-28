function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numerosProibidos.includes(aleatorio)) {
            reject('Número repitido')
        } else {
            resolve(aleatorio)
        }
    });
}

async function gerarMegaSena(qtdeNum) {
    try {
        const numeros = []
        for (let _ of Array(qtdeNum).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch(e) {
        throw 'Que chato!'
    }
}

gerarMegaSena(6)
    .then(console.log)
    .catch(console.log)

gerarNumerosEntre(1, 5, [1, 2, 4])
    .then(console.log)
    .catch(console.log)
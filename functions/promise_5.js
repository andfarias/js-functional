function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) {
            reject('Ocorreu um erro')
        } else {
            resolve(valor)
        }
    });
}

funcionarOuNao('Testando...', 0.5)
    .then(console.log)
    .then(
        v => consol.log(v),
        err => console.log(`Erro esp.: ${err}`)
    )
    .catch(err => console.log(`Erro: ${err}`))

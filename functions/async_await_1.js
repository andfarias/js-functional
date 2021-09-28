function esperarPor(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Vish')
        }, tempo);
    });
}

esperarPor(2000)
    .then(() => console.log('Executando promise 1...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 3...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 2...'))
    .then(esperarPor)

async function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(10)
        })
    })
}

async function executar() {
    let valor = await retornarValor()

    await esperarPor(1500)
    console.log(`Async/await ${valor}...`)

    await esperarPor(1500)
    console.log(`Async/await ${valor + 1}...`)

    await esperarPor(1500)
    console.log(`Async/await ${valor + 2}...`)

    return valor + 3
}

async function executarDeVerdade() {
    const v = await executar()
    console.log(v)
}

executar().then('Ultimo executar ' + console.log)
class Produto {
    constructor(nome, preco, desc) {
        this.nome = nome
        this.preco = preco
        this.desc = desc
    }

    get nome() {
        return `Produto: ${this._nome}`
    }

    set nome(noveNome) {
        this._nome = noveNome.toUpperCase()
    }

    get preco() {
        return this._preco
    }

    set preco(novoPreco) {
        if (novoPreco >= 0) {
            this._preco = novoPreco
        } else {
            throw 'Valor inválido'
        }
    }

    get getPrecoFinal() {
        return this.preco * (1 - this.desc)
    }

    precoFinal() {
        return this.preco * (1 - this.desc)
    }
}

const p1 = new Produto('Caneta', 1)
try {
    p1.nome = 'caneta'
    p1.preco = -1
} catch (e) {
    console.log(`Erro: ${e.toString()}`)
}
console.log(p1.nome)

const p2 = new Produto('Geladeira', 3000, 0.2)
console.log(p2.preco)
console.log(p2.precoFinal())
console.log(p2.getPrecoFinal)
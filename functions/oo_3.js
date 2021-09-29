// função construtora
function Produto(nome, preco, desconto = 0.01) {
    this.preco = preco
    this.nome = nome
    this._desconto = desconto

    this.precoFinal = () => this.preco * (1 - desconto)
}

Produto.prototype.log = function() {
    console.log(`Nome: ${this.nome}, Preço: R$ ${this.preco}`)
}

Object.defineProperty(Produto.prototype, 'desc', {
    get: function() {
        return this._desconto
    }
})
Object.defineProperty(Produto.prototype, 'descString', {
    get: function() {
        return `${this._desconto * 100}% de desconto`
    }
})

const p1 = new Produto('Caneta', 1)
p1.log()
console.log(p1.nome)

const p2 = new Produto('Geladeira', 3000)
console.log(p2.preco)
console.log(p2.precoFinal())
console.log(p2.desc)
console.log(p2.descString)
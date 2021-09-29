// função construtora
function Produto(nome, preco, desconto = 0.01) {
    this.preco = preco
    this.nome = nome
    this.desconto = desconto

    this.precoFinal = () => this.preco * (1 - desconto)
}

const p1 = new Produto('Caneta', 1)
console.log(p1.nome)

const p2 = new Produto('Geladeira', 3000)
console.log(p2.preco)
console.log(p2.precoFinal())
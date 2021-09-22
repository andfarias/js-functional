// curring
function finalPrice(tax) {
    return function (price) {
        return price * (1 + tax)
    }
}

console.log(finalPrice(0.08)(1))

const nycFinalPrice = finalPrice(0.085)

console.log(nycFinalPrice(45.3))

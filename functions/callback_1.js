function exec (fn, x, y) {
    return fn(x, y)
}

const somarNoTerminal = (x, y) => console.log(x + y)
const subitratirNoTerminal = (x, y) => console.log(x - y)

exec(somarNoTerminal, 50, 41)
exec(subitratirNoTerminal, 50, 41)

setInterval(() => console.log('Exec 1'), 5000)
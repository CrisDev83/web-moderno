function reajuste(plano, salAtual) {
    switch (plano){
        case 'A':
            return salAtual * 1.1
        case 'B':
            return salAtual * 1.15
        case 'C':
            return salAtual * 1.2
        default:
            return 'Plano inválido'
    }
}

console.log(reajuste('A', 1000))
console.log(reajuste('B', 1000))
console.log(reajuste('C', 1000))
console.log(reajuste('D', 1000))
// possibilidade sem parametro
function cumprimentar () {
    console.log('Olá, Leonardo!')
    console.log('Olá, Maria!')
}

cumprimentar()



// possibilidade  sem colocar em variavel
function cumprimentar(nome) {
    return`Olá, ${nome}!`
}

console.log(cumprimentar('Leonardo'))
console.log(cumprimentar('Maria'))



// possibilidade colocando resultado em variavel
function cumprimentar(nome) {
    return `Olá, ${nome}!`
}

let ola = cumprimentar("Leonardo")
let ola2 = cumprimentar('Maria')

console.log(ola)
console.log(ola2)
// let e const

{
    var a = 2  // escopo global e de função
    let b = 3 // escopo de blco

    console.log(b)
}

console.log(a)
//console.log(b)


//Template String

const produto = 'iPad'
console.log(`${produto} 
é caro`)

// Destructering

const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = {nome:'Ana', idade: 9}
console.log(i, nome)
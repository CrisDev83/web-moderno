
function primeiroElemento(array){
    return array[0]
}

function primeiraLetra(string){
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()



let p = new Promise((resolve ) => {
    resolve(["Ana", 'Bia', 'Carlos', 'Daniel'])
})

p
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)
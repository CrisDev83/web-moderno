const { reject } = require("lodash")

function gerarNumeros(min, max, numerosProibidos){
    if(min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)){
            reject('Numero Repetido')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMega(qtdNumeros, tentativas = 1){
    try {
        const numeros = []
        for(let _ of Array(qtdNumeros).fill()){
        numeros.push(await gerarNumeros(1, 60, numeros))
        }
        return numeros
    } catch(e) {
        if(tentativas > 10) {
            throw "Não deu certo"
        }else {
            return gerarMega(qtdNumeros, tentativas + 1)
        }
    }

}

gerarMega(6)
    .then(console.log)
    .catch(console.log)






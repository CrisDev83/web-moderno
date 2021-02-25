// Closure é o escopo criado quando vc define uma função
// e esse escopo vai permiter a função aessar e manipular variáveis externas á função

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())


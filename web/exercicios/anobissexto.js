function anoBissexto (ano) {
    if (ano <= 0) {
        return "Não é Bissexto"
    } else if(ano % 400 == 0 || ano % 100 == 0 || ano % 4 == 0) {
        return "É Bissexto"
    } else {
        return "Não é Bissexto"
    }
}

console.log(anoBissexto(0))
console.log(anoBissexto(4))
console.log(anoBissexto(100))
console.log(anoBissexto(400))
console.log(anoBissexto(800))
console.log(anoBissexto(2020))
console.log(anoBissexto(2021))

function classDia(numero) {
    switch (numero) {
        case 1:
            return "Fim de semana"
        case 2: case 3: case 4: case 5: case 6:
            return "Dia útil"
        case 7:
            return "Fim de semana"
        default:
            return "Dia inválido"
    }
}

console.log(classDia(1))
console.log(classDia(2))
console.log(classDia(3))
console.log(classDia(4))
console.log(classDia(5))
console.log(classDia(6))
console.log(classDia(7))
console.log(classDia("a"))
function calcularCrescimento(alt1, taxa1, alt2, taxa2){
    if(alt1 == alt2){
        if(taxa1 > taxa2) {
            return 'A criança 1 ultrapassará a criança 2 em 1 ano'
        } else if(taxa1 < taxa2) {
            return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
        } else {
            return "As crianças tem igual altura e crescimento"
        }
    } else {
        if(alt1 > alt2){
            if(taxa1 >= taxa2){
                return 'A criança menor não ultrapassará a maior.'
            } else {
                return calcularTempo(alt2, taxa2, alt1, taxa1)
            }
        } else {
            if(taxa2 >= taxa1){
                return 'A criança menor não ultrapassará a maior.'
            } else {
                return calcularTempo(alt1, taxa1, alt2, taxa2)
            }
        }
    }
}

function calcularTempo(altMenor, taxaAltMenor, altMaior, taxaAltMaior){
    let qtdAnos = 0
    while (altMenor < altMaior) {
        altMenor += taxaAltMenor
        altMaior += taxaAltMaior
        qtdAnos++
    }
    console.log(qtdAnos)
    return qtdAnos
}

console.log(calcularCrescimento(150, 2, 130, 4))
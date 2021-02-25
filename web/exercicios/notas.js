function classAluno(nota) {
    let notaCorrigida = arredondar(nota)
    if(notaCorrigida >= 40) {
        console.log(`Aprovado com nota ${notaCorrigida}`)
    } else {
        console.log(`Reprovado com nota ${notaCorrigida}`)
    }
}

function arredondar(nota){
    if(nota % 5 > 2){
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

classAluno(100)
classAluno(30)
classAluno(38)
classAluno(88)
classAluno(61)

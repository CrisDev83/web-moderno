function juroSimples(capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function juroComposto(capitalInicial, taxa, tempo){
    return capitalInicial * (1 + taxa) ** tempo
}


console.log(juroSimples(100, 10/100, 2))
console.log(juroComposto(100, 10/100, 2))


let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function adicionaVetor(vetorIncial, vetorAdicionar) {
    for(let i = 0; i < vetorAdicionar.length; i++){
        console.log(vetorAdicionar[i])
        vetorIncial.push(vetorAdicionar[i])
    }
    console.log('Vetor adicionado: ' + vetorAdicionar)
    console.log('Vetor resultado ' + vetorIncial)
}

adicionaVetor(vetorPilha, vetorAdiciona)
// percorrendo um array

 const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

 aprovados.forEach(function(nome, indice, array){
     console.log(`${indice + 1}) ${nome}`)
     console.log(array)
 })

 aprovados.forEach(nome => console.log(nome))


 const exibirAprovaods = aprovado => console.log(aprovado)

 aprovados.forEach(exibirAprovaods)

 console.log(aprovados)
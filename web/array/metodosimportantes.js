const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos)

pilotos.pop() // massa quebrou
console.log(pilotos)

pilotos.push('Verstappen') // adiciona ultimo
console.log(pilotos)

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona inicio
console.log(pilotos)

// splice pode adicionar e remover

//adicionar
pilotos.splice(2, 0, 'Botas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)


// slice pega uma parte do array
const algunsPilotos = pilotos.slice(2) // novo array
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4) // entra o primeiro não entra o final
console.log(algunsPilotos2)

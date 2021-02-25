const contadorA = require('./istanciaunica')
const contadorB = require('./istanciaunica')

const contadorC = require('./instancianova')()
contadorD = require('./instancianova')()

contadorA.inc()
contadorA.inc()

console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
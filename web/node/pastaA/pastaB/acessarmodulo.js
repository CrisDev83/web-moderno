const moduloA = require('../../moduloA') // no linux tem que respeitar a letra
console.log(moduloA.ola)

const saudacao = require('saudacao') // modulo node module
console.log(saudacao.ola)

const c = require('./pastaC') // não precisa usar o index
console.log(c.ola2)

/*const http = require('http') // modulo core
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)*/

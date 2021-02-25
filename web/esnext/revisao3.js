// ES8: Object.values/Obeject.entries
const obj = {a: 1, b: 2, C: 3}
console.log(Object.values(obj))
console.log(Object.keys(obj))
console.log(Object.entries(obj))

//melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Oi Gente'
    }
}

console.log(pessoa.nome, pessoa.ola())

//Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'au au'
    }
}

console.log(new Cachorro().falar())
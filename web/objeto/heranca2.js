// Cadeia de prototipo (prototype chain)
Object.prototype.attr0 = "0" // não faça isso
const avo = {
    attr1: "A"
}

const pai = {
    __proto__: avo, 
    attr2: "B"
}

const filho = {
    __proto__: pai,
    attr3: "C"
}

console.log(filho.attr0)
console.log(filho.attr1)
console.log(filho.attr2)
console.log(filho.attr3)


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo:'f40',
    velMax: 324 // shadow
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

volvo.acelerarMais(300)
console.log(ferrari.status())


// a partir de class
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

// a partir de Factory
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 =  criarPessoa('Joao')
p2.falar()


// a partir de Função Construtora
function Pessoa2(nome) {
    this.nome = nome
    
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p3 = new Pessoa2('João')
p3.falar()

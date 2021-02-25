// uando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object())
const obj2 = new Object
console.log(obj2)

// Funçoes Contrutoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoDesconto = () => {
        return preco * ( 1 - desc)
    }
}

const p1 = new Produto('Camera', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)

console.log(p1.getPrecoDesconto())
console.log(p2.getPrecoDesconto())

// Função Factory 
function criarFuncionario(nome, sal, faltas) {
    return {
        nome,
        sal,
        faltas,
        getSal(){
            return (sal / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSal(), f2.getSal())

//Object.create
const filha = Object.create(null)
filha.nome = "Ana"
console.log(filha)

//Uma função famosa que retorna Ovjeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)
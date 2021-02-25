const a = {
    name: 'Teste'
}


const b = a;


b.name = 'Opa';

console.log(a);
console.log(b);

let c = 3;

let d = c;

d++

console.log(d);
console.log(c);



let valor //não inicializada

console.log(valor);

valor =  null //ausência de valor
console.log(valor);
//console.log(valor.toString()); //Erro!

const produto = {}
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto.preco);

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco);
//delete produto.preco
console.log(produto);

produto.preco = null // sem preço

console.log(!!produto.preco);
console.log(produto);

//Se vc quiser setar uma referencia use null




// Armazenando uma função em variavel

const imprimirSoma = function(a, b){
    console.log(a + b);
};

imprimirSoma(2, 3);

//Armazenando uma função arrow em uma varaiável


const soma = (a, b) => {
    return a + b;
}

console.log(soma(2, 3));

// retorno implicito o

const subtração = (a, b) => a - b;

console.log(subtração(2, 3));

const imprimir2 = a => console.log(a);
imprimir2('Legal!!')
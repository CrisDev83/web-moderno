function classeTriangulo(lado1, lado2, lado3) {
    if(lado1 === lado2 && lado2 === lado3) {
        console.log('Triângulo Equilátero')
    } else if(lado1 === lado2 || lado2 === lado3 || lado1 ===lado3) {
        console.log('Triângulo Isósceles')
    } else {
        console.log('Triângulo Escaleno')
    }

}

classeTriangulo(3, 3, 3)
classeTriangulo(4, 2, 4)
classeTriangulo(4, 2, 3)
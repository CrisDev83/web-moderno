function valores(valorDecimal) {
    valorReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorReais)
}

valores(0.1 + 0.2)



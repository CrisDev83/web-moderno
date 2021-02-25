function precoPlano(idade){
    if(idade < 10){
        return 180
    } else if(idade < 30) {
        return 150
    } else if(idade < 60){
        return 195
    } else {
        return 230
    }

}

console.log(precoPlano(8));
console.log(precoPlano(15));
console.log(precoPlano(35));
console.log(precoPlano(52));
console.log(precoPlano(80));

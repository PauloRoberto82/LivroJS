const prompt = require("prompt-sync")() //adiciona pacote prompt-sync
const valor = Number(prompt("Valor da Compra R$ : "))//lê o valor da compra
const aux = Math.floor(valor/20) //aux = nº de parcelas sem condições
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux     
const valorParcela = valor / parcelas //Cálculo do valor da parcela
console.log(`\nPode pagar em ${parcelas}x de de R$ ${valorParcela.toFixed(2)}`)

/* 
Para calcular o número de parcelas, no Exemplo 4.8 foi utilizado o operador ternário .Ele equivalente às seguintes linhas de código:

let parcelas 
if(aux == 0) parcelas = 1
} else if (aux > 6) {
parcelas = 6
}else{
parcelas = aux
}
*/
const prompt = require('prompt-sync')();//adiciona pacote ao programa
const salario = Number(prompt("Salário R$: "))//lê os dados de entrada
const tempo = Number(prompt("Tempo (anos): "))
const quadrienios = Math.floor(tempo/4) //calcula quadrienios
const acrescimo = salario * quadrienios/100 //calcula o acrescimo salarial

console.log(`Quadriênios: ${quadrienios}`)//imprime o resultado

console.log(`Salario final R$: ${(salario + acrescimo).toFixed(2)}`)//imprime o resultado final
 
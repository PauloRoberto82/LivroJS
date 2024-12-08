const prompt = require("prompt-sync")() //

const numero = parseInt(prompt("Digite um número: "))
const result = numero % 2 == 0 ? "Par" : "Ímpar"

console.log(`O número: ${numero} é ${result}.`)

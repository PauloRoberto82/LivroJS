const jantar = Number(prompt("Digite um número: "));
const taxaGarçom = jantar * 0.10
const total = jantar + taxaGarçom

alert(`O valor do Jantar foi de R$:${jantar.toFixed(2)}\nTaxa Garçom R$:${taxaGarçom.toFixed(2)},\n Total R$:${total.toFixed(2)}`);

const jantar2 = Number(prompt("Digite um número: "));
const taxaGarçom2 = jantar2/10
const total2 = jantar2 * 1.10
alert(`O valor do Jantar foi de R$:${jantar2.toFixed(2)}\nTaxa Garçom R$:${taxaGarçom2.toFixed(2)},\n Total R$:${total2.toFixed(2)}`);
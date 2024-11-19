//cria referencia ao form e ao elemento h3 (onde será exibido o resposta)
const frm = document.querySelector('form');
const resp = document.querySelector('h3');
const resp2 = document.querySelector('h4');

//cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
 const nome = frm.inNome.value //obtém o nome digitado
 resp.innerText = `Olá, ${nome}!`//exibe a resposta do programa 
 resp2.innerText = `De novo, ${nome}!`//exibe a mesma resposta que a anterior, mas em um elemento(tag) diferente *Eu que repliquei para testar
 e.preventDefault()//evita o envio do formulário form
})

const a = 5 % 2 // a=1
const b = 7 % 4 // b=3

console.log(a , b)


console.log(Math.abs(-8)) // +8 Math.abs retorna numero positivo


console.log(Math.ceil(4.56))// 5 Math.ceil arredonda para cima


console.log(Math.floor(4.56))// 4 Math.floor arredonda para baixo


console.log(Math.pow(3, 2)) // 9 Math.pow eleva a potência

console.log(Math.random())
// Math.random() gera um número aleatório entre 0 e 1

console.log(Math.round(5.5)) // 6 Math.round arredonda para o número mais próximo
console.log(Math.round(5.4))// 5 Math.round arredonda para o número mais próximo

console.log(Math.sqrt(81))// 9 Math.sqrt retorna a raiz quadrada
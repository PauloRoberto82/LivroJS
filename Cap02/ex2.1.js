//cria referencia ao form e ao elemento h3 (onde será exibido o resposta)
const frm = document.querySelector('form');
const resp = document.querySelector('h3');
const resp2 = document.querySelector('h4');

//cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
 const nome = frm.inNome.value //obtém o nome digitado
 resp.innerText = `Olá, ${nome}!`//exibe a resposta do programa 
 resp2.innerText = `De novo, ${nome}!`//exibe a resposta do programa *a mesma resposta que a anterior, mas em um elemento diferente
 e.preventDefault()//evita o envio do formulário form
})
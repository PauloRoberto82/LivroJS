
//Cria referencia ao form e aos elementos h3 e h4 (respostas)

const frm = document.querySelector("form");
const pagar = document.querySelector("h3");


//Cria um "ouvinte" de eventom acionado quando o botao submit for clicado
frm.addEventListener("submit",(e) =>{
const valor = parseFloat(frm.min15.value)// obtem conteudo dos campos

const duracao = Number(frm.tempo.value)

const b15 = Math.ceil(duracao/15)

const valor2 = b15 * valor

pagar.innerText = `O Valor a pagar R$ ${valor2}` //exibe as respostas
 
e.preventDefault() //evita o envio do form
})
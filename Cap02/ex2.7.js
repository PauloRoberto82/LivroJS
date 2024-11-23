
//Cria referencia ao form e aos elementos h3 e h4 (respostas)

const frm = document.querySelector("form");
const h3 = document.querySelector("#pr");
const promo = document.querySelector("#pr2");


//Cria um "ouvinte" de eventom acionado quando o botao submit for clicado
frm.addEventListener("submit",(e) =>{
const item = frm.produto.value// obtem conteudo dos campos

const precoitem = Number(frm.tempo.value)

const precopromo = precoitem/2
const precopromo3 = precoitem*2.5


h3.innerText = `${item} Promoção leve 3 por R$: ${precopromo3}`

promo.innerText = `O 3º item  "${item}" custa apenas R$ ${precopromo.toFixed(2)}` //exibe as respostas
 
e.preventDefault() //evita o envio do form
})
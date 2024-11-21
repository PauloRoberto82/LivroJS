//cria referencia ao form e aos elementos h3 (onde sera exibida a resposta)

const frm = document.querySelector("form")
const resp = document.querySelector("h3")


//cria um "ouvinte" de eventos, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e)=> {
const quilo = Number(frm.inQuilo.value) //obtém o conteudo dos campos
const consumo = Number(frm.inConsumo.value)

const valor = (quilo/1000)*consumo //obtém conteúdo dos campos


resp.innerText = `Valor a pagar R$: ${valor.toFixed(2)}` //exibe a resposta 

 
e.preventDefault()//evita o envio do form 
})


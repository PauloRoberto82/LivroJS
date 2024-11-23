//cria referencia ao form e aos elementos h3 (onde sera exibida a resposta)

const frm = document.querySelector("form")
const resp1 = document.querySelector("#oferta")
const resp2 = document.querySelector("#desconto")


//cria um "ouvinte" de eventos, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e)=> {
const rem = frm.remedio.value
const preco = Number(frm.preco.value) //obtém o conteudo dos campos
const promocao = preco * 2
const oferta = promocao * 0.9

  
resp1.innerText = `Promoção ${rem}`
resp2.innerText = `Leve 2 por apenas R$: ${oferta}` //exibe a resposta 

 
e.preventDefault()//evita o envio do form 
})


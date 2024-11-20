//cria referencia ao form e aos elementos se resposts (pelo seu id)

const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")
const resp4 = document.querySelector("#outResp4")

//cria um "ouvinte" de eventos, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e)=> {
const veiculo = frm.inVeiculo.value //obtém o conteudo dos campos
const preco = Number(frm.inPreco.value)

const entrada = preco * 0.50 //calcula o valor da entrada
const parcela = (preco * 0.50)/12 //calcula o valor da parcela

resp1.innerText = `Promoção: ${veiculo}` //exibe a mensagem no campo de resposta 1
resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`
resp3.innerText = `12x de R$:${parcela.toFixed(2)}` 
e.preventDefault()//evita o envio do form 
})


frm.addEventListener("submit", (e)=> {
    const veiculo = frm.inVeiculo.value 
    const preco = Number(frm.inPreco.value)
    const entrada = preco * 0.50 
    const parcela = (preco * 0.50)/12 
    const juros = parcela * 1.05
    const valorjuros = juros - parcela
    
resp1.innerText = `Promoção: ${veiculo}` 
resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`
resp3.innerText = `12x sem juros de R$:${parcela.toFixed(2)}`
resp4.innerText = `24x parcelas de ${juros.toFixed(2)} com juros de cada parcela R$: ${valorjuros.toFixed(2)}`
e.preventDefault() 
    })
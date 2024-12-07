const frm = document.querySelector("form") //obtém elementos da página
const resp1 = document.querySelector("#outResp1") 
const resp2 = document.querySelector("#outResp2") 
const resp3 = document.querySelector("#outResp3")
const resp4 = document.querySelector("#outResp4")

frm.addEventListener("submit", (e) => {e.preventDefault()
    const saque = Number(frm.inSaque.value)

    if(saque %10 != 0){
        alert("Valor inválido para notas disponíveis(R$10,,R$20,R$50,R$100")
        frm.inSaque.focus()
        return
    }
    const notasCem= Math.floor(saque/100)
    let resto = saque % 100
    const notasCinquenta = Math.floor(resto/50)
    resto = resto % 50
    const notasVinte = Math.floor(resto/20)
    resto = resto % 20
    const notasDez = Math.floor(resto/10)
    resto = resto % 10
    if (notasCem > 0){
        resp1.innerText = `Notas de R$100: ${notasCem}`
    }
    if (notasCinquenta > 0){
        resp2.innerText = `Notas de R$50: ${notasCinquenta}`
    }
    if(notasVinte > 0){
        resp3.innerText = `Notas de R$20: ${notasVinte}`
    }
    if(notasDez > 0){
        resp4.innerText = `Notas de R$10: ${notasDez}`}
})

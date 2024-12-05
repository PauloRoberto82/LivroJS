const frm = document.querySelector("form") //obtém elementos da página
const resp = document.querySelector("h3") 

frm.addEventListener("submit", (e) => {
    e.preventDefault() //evita o comportamento padrão do formulário
    const numero = Number(frm.inNumero.value) //obtém número digitado do form
    const raiz = Math.sqrt(numero) //calcula a raiz quadrada 
    if(Number.isInteger(raiz)){
        resp.innerText = `Raiz: ${raiz}` //exibe a raiz no h3  
        } else{
        resp.innerText = `Não há raiz exata para ${numero}`//mostra mensagem
        }  
})
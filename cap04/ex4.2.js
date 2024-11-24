//cria referencia ao form e aos elementos h3 (onde sera exibida a resposta)

const frm = document.querySelector("form")
const resp = document.querySelector("h3")
const resp2 = document.querySelector("h2")



//cria um "ouvinte" de eventos, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault() //evita que a página recarregue
    
    const nome = frm.nome.value //obtém o valor do form

    const masculino = frm.masculino.checked //obtém o conteudo dos campos
    const altura = Number(frm.altura.value)
    
    let peso //declara a variavel peso
    if (masculino) {
        peso = 22 * (altura,2)
    }else{
        peso = 21 * (altura,2)
    }
    

    //apresenta a resposta ao conteudo do elemento h3 da página
    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(2)}kg` //exibe a media das notas

    //Operador ternário
    let peso2 = masculino ? 22 * (altura,2) : 21 * (altura,2)
    
    //resposta do operador ternário
    resp2.innerText = `${nome}: Seu peso ideal é ${peso2.toFixed(2)}kg` //exibe a media das notas
    resp2.style.color ="green"


})
frm.addEventListener("reset", () => {
    resp.innerText = ""//limpa o conteúdo do elemento h3 que exibe a resposta 
})


//cria referencia ao form e aos elementos h3 (onde sera exibida a resposta)

const frm = document.querySelector("form")
const resp = document.querySelector("h3")



//cria um "ouvinte" de eventos, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault() //evita que a página recarregue
    
    const nome = frm.nome.value //obtém o valor do form

    const masculino = frm.masculino.checked //obtém o conteudo dos campos
    const altura = Number(frm.altura.value)
    
    let peso //declara a variavel peso
    if (masculino) {
        peso = 22 * Math.pow(altura,2)
    }else{
        peso = 21 * Math.pow(altura,2)
    }

    //apresenta a resposta ao conteudo do elemento h3 da página
    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(2)}kg` //exibe a media das notas
  
})


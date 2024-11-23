//cria referencia ao form e aos elementos h3 (onde sera exibida a resposta)

const frm = document.querySelector("form")
const resp1 = document.querySelector("#notamedia")
const resp2 = document.querySelector("#resultado")


//cria um "ouvinte" de eventos, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const nome = frm.nome.value

    const nota1 = Number(frm.n1.value) //obtém o conteudo dos campos
    const nota2 = Number(frm.n2.value) //obtém o conteudo dos campos


    const media = (nota1 + nota2) / 2 //calcula a media

    if (media >= 7) {
        resp2.innerText = `Parabéns ${nome}!,Você foi Aprovado(a)`
        resp2.style.color = "#33FF33"
    } else if (media < 7 && media >= 4) {
        resp2.innerText = `${nome} você ficou de Recuperação`
        resp2.style.color = "#FFFF00"
    } else {
        resp2.innerText = `${nome} Infelizmente você foi Reprovado(a)`
         resp2.style.color = "#B30000"
    }




    resp1.innerText = `Media das notas: ${media}` //exibe a media das notas



    e.preventDefault()//evita o envio do form 
})


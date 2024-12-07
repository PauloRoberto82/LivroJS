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
        resp2.innerHTML = `Parabéns ${nome}!, Você foi <span style="color: #33FF33;">Aprovado(a)</span>`;
    } else if (media < 7 && media >= 4) {
        resp2.innerHTML = `${nome} você ficou de <span style="color: #FFFF00;">Recuperação</span>`;
    } else {
        resp2.innerHTML = `${nome} infelizmente você foi <span style="color: #FF0000;"> Reprovado(a)</span>`
       
    }

    resp1.innerText = `Media das suas notas: ${media}` //exibe a media das notas



    e.preventDefault()//evita o envio do form 
})


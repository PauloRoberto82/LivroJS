/* Métodos querySelector() ou getElementById()
ex:
const resp = document.querySelector("h3") primeiro elemento h3 da página
const cor = document.querySelector("#inCor") elemento com id=inCor
const lista = document.querySelector(".lista") elemento com classe=lista
*/

//Cria referencia ao form e aos elementos h3 e h4 (respostas)

const frm = document.querySelector("form");
const resp1 = document.querySelector("h2");
const resp2 = document.querySelector("h3");

//Cria um "ouvinte" de eventom acionado quando o botao submit for clicado
frm.addEventListener("submit",(e) =>{
const titulo = frm.inTitulo.value // obtem conteudo dos campos
const duracao = Number(frm.inDuracao.value)

const horas = Math.floor(duracao/60) // arredonda para baixo resultado
const minutos = duracao % 60 // resto da divisao

resp1.innerText = titulo //exibe as respostas
resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)` 
e.preventDefault() //evita o envio do form
})
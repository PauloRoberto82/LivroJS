//cria referencia ao form e elemento onde será exibida a resposta

const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//"ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit",(e)=>{
e.preventDefault() //evita o envio do formulário
const horaBrasil = Number(frm.inHoraBrasil.value)
let horaFranca = horaBrasil + 5 //Calcula o horário da França
if(horaFranca>24){ 
    horaFranca = horaFranca - 24 //se o horário for maior que 24, subtrai
}
resp.innerText = `A hora na França é ${horaFranca.toFixed(2)}:00` //exibe a resposta
})
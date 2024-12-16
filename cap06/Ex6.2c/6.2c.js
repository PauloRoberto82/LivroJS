const frm = document.querySelector('form'); //obtém elementos da página
const respErros = document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDica = document.querySelector("#outDica")

const erros = [] //vetor de escopo globo com números já apostados
const sorteado = Math.floor(Math.random()*100) + 1 //num aleatório entre 1 e 100
const CHANCES = 6 // constante com o número máximo de chances

frm.addEventListener("submit", (e)=>{
e.preventDefault() //evita o comportamento padrão do form

const numero = Number(frm.inNumero.value) //obtém o número digitado
    
if (numero == sorteado) {//se acertou
    respDica.innerText = `Parabéns, você acertou o número sorteado = ${sorteado}`
    respDica.style.color = "green"
        
    frm.btSubmit.disabled = true //troca o status do botão
    frm.btNovo.className = "exibe"
    } else {
        
        if(erros.includes(numero)){
            alert(`Você já apostou o número ${numero}.Tente outro..`)
        
        }else{
            
            erros.push(numero) //adiciona o número ao vetor de erros
            
        const numErros = erros.length
        const numChances = CHANCES - numErros //calcula nº de chances restantes
        
        respErros.innerText = `${numErros} (${erros.join(",")})` //exibe nº de erros e números já apostados
        respChances.innerText = numChances
        
        if(numChances == 0){ //se não houver mais chances
        alert("Suas chances acabaram...")
            
        frm.btSubmit.disabled = true //troca o status do botão
        frm.btNovo.className = "exibe"
        respDica.innerText = `O número sorteado era = ${sorteado}`
               
         } else {//usa operador ternário para mensagem da dica
                 
            const dica = numero < sorteado ? "Maior" : "Menor"
            respDica.innerText = `Tente um número ${dica} que o número sorteado.`
            }
           }
          }

frm.inNumero.value = "" //limpa o campo de entrada
frm.inNumero.focus() //posiciona cursor neste campo

})

frm.btNovo.addEventListener("click", ()=>{
    location.reload()//recarrega a página
})
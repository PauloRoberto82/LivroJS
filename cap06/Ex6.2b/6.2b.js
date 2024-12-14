const frm = document.querySelector("form")
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

const pacientes = [] //declara vetor global

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    
    const nome = frm.inPaciente.value //obtém nome do paciente
    pacientes.push(nome)   //adiciona o nome no final do vetor
    let lista = "" //string para concatenar pacientes
   
    for(let i = 0; i < pacientes.length; i++){
        lista += `${i + 1}.${pacientes[i]}\n` 
    }

    respLista.innerText = lista //exibe lista de pacientes
    frm.inPaciente.value = "" //limpa conteúdo campo formulário paciente
    frm.inPaciente.focus() //posiciona o cursor no campo
})

frm.btUrgencia.addEventListener("click", ()=>{
    if(!frm.checkValidity()){
        alert("Preencha o campo paciente")
        frm.inPaciente.focus()
        return
    }


const nome = frm.inPaciente.value //obtém nome do paciente
pacientes.unshift(nome) //adiciona paciente no início do vetor
let lista= "" //string para concatenar pacientes


pacientes.forEach((pacientes, i) => (lista += `${i + 1}.${pacientes}\n`)) //concatena pacientes

respLista.innerText = lista //exibe lista de pacientes
frm.inPaciente.value = "" //limpa conteúdo campo formulário paciente
frm.inPaciente.focus() //posiciona o cursor no campo

})

frm.btAtender.addEventListener("click", () => { 

    if(pacientes.length == 0){
        //alert("Não há pacientes na lista de espera")
        frm.inPaciente.focus()
        respNome.innerText = "Não há mais pacientes "
        respNome.style.color = '#E6221C'
        return
    }
 
  const atender = pacientes.shift() //retira paciente do início do vetor
  respNome.innerText = atender //exibe nome do paciente atendido
  respNome.style.color = ''
  let lista = "" //string para concatenar pacientes

  pacientes.forEach((pacientes, i) => (lista += `${i + 1}.${pacientes}\n`))

  respLista.innerText = lista //exibe lista de 
  // pacientes na página

})

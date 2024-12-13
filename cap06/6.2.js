

/*******************************************************/

// declara e define conteúdo inicial do array/vetor
const cidades = ["Pelotas","São Lourenço", "Porto Alegre"] 
for (let i = 0; i < cidades.length; i++) {
    console.log(cidades[i])
    }

console.log("-".repeat(40)) //exibe uma linha de hífens
console.log(cidades.toString())//converteu o array/vetor em string
console.log(cidades.join(" - "))//exibe um hífen entre cada cidade

//percorrer os elementos utilizando o método for...of
for (const cidade of cidades) {
    console.log(cidade)
    }

//método forEach chama uma função para cada elemento do array
cidades.forEach((cidade,i) => {
    console.log(`${i+1}ª Cidade: ${ cidade}`)
})

const numeros =[5 ,10 ,15 ,20 ,25]
let soma = 0
numeros.forEach(num=>soma += num)
console.log(`Soma dos Números: ${soma}`)

//metodo forEach com função para numerar os elementos do array
numeros.forEach((numero,i)=> {
    console.log(`${i+1}º Número: ${numero}`)
})
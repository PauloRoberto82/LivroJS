const idade = []
idade[0] = 18
idade[1] = 13
idade[2] = 22
idade[3] = 25

console.log(idade[1])

idade.push("john")// push adiciona um elemento ao final do array/vetor
idade.unshift(7)
// unshift adiciona um elemento no início do array/vetor

idade.pop()// remove o último elemento do array/vetor

idade.shift()
console.log(idade)

/*******************************************************/

// declara e define conteúdo inicial do array/vetor
const cidades = ["Pelotas"] 

// adiciona elemento ao final do array/vetor
cidades.push("São Lourenço") 
console.log(cidades)

// adiciona elem. no início e desloca as demais array/vetor
cidades.unshift("Porto Alegre") 

//["Porto Alegre", "Pelotas", "São Lourenço"]
console.log(cidades) 

//remove a última cidade do array/vetor
const ultima  = cidades.pop()
console.log(cidades) //["Porto Alegre", "Pelotas"]

//remove a primeira e "sobe" as demais
const primeira = cidades.shift()
console.log(cidades) //["Pelotas"]

/************************************************/

// declara e define conteúdo inicial do array/vetor
const letras = ["A", "B", "C", "D", "E"] 

// obtém as 2 últimas letras
const letras2 =  letras.slice(-2) 

// obtém do inicia até final exceto a última letra
const letras3 = letras.slice(0, -1) 

console.log(letras) //["A", "B", "C", "D", "E"]
console.log(letras2) //["D", "E"]
console.log(letras3) //["A", "B", "C", "D"]

//remove a partir da posição 2 ou índice, 1 elemento ("C") 
const retira = letras.splice(2, 1) 
console.log(letras) //["A", "B", "D", "E"]
console.log(retira) //["C"]
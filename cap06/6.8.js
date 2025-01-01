const numeros = [10,13,20,8,15] //vetor inicial
const dobros = numeros.map(num => num * 2) //cada numero é obtido e multiplicado por 2 , criando um novo vetor/array
console.log(dobros.join(" , ")) //20, 26, 40, 16, 30

//-------------------------------------------------//
const amigos = [{nome: "Ana", idade:20},
                {nome: "Bruno",idade:17}, 
                {nome:"Cátia", idade:25}]

const amigos2 = amigos.filter(aux => aux.idade >= 21 || aux.nome.includes("B")) //filtra os amigos que tem idade maior ou igual a 18

for (const amigo of amigos2) {
    console.log(`${amigo.nome} - idade: ${amigo.idade} anos`)
}

if (amigos2.length === 0) {
    console.log("Nenhum amigo encontrado")
}

const numeros2 = [10,13,20,8,15]
const soma = numeros2.reduce((acumulador, num) => acumulador + num, 0) //inicializa o acumulador com
console.log(soma) //66


let acumulador = 0
for (const num of numeros2){
    acumulador  = acumulador + num
}
console.log(acumulador) 
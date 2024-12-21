const carros =[]
const modelo = "Fiesta"
const preco = 46800

carros.push({modelo,preco})


    for (const carro of carros) {
        const {modelo,preco} = carro //"desestrutura" o objeto carro em modelo e preco
        console.log(`${modelo} - R$:${preco}`)//Desestruturdo
        console.log(carro)//valor entre chaves
       console.log(carros)//valor entra colchetes
     }

const pacientes = ["Ana", "Carlos" , "Sofia"]
const [a,b,c] = pacientes

console.log(a)
console.log(b)
console.log(c)
 
const [atender, proximo,cancelado,...outros] = pacientes// Os ... passa a ideia de espalhar
console.log(atender)
console.log(proximo)
console.log(cancelado)
console.log(outros)

//Operador de spread
const carro = {modelo:"Corsa", preco: 46600}
const carro2 = {...carro, ano:2020}
console.log(carro2)

const pacientes2 = ["Ana", "Carlos"]//
console.log(pacientes2)
pacientes2 = ["Sofia", ...pacientes2] // acrescenta Sofia no início do vetor
console.log(pacientes2)

pacientes2 = [...pacientes2 , "Joao"]//acrescenta Joao no final do vetor
console.log(pacientes2)
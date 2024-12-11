const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const num  = Number(frm.inNumber.value)
    let numDivisores = 0
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) { 
        numDivisores++
        }
    }
    if(numDivisores == 2){
        resp.innerText = `O número ${num} é primo`
    }else {
        resp.innerText = `O número ${num} não é primo`
    }

})
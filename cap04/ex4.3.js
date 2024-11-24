

const bairro = parseInt(prompt("Escolha o Bairro da Entrega:\n1. Centro\n2. Fragata\n3. Laranjal\n4. Outros bairros"))

let taxaEntrega
switch (parseInt(bairro)) {
    case 1:
        taxaEntrega = 5.00
        alert(`Taxa R$:${taxaEntrega.toFixed(2)} para entregar no Centro`)
        break;
    case 2:
        taxaEntrega = 7.00
        alert(`Taxa R$:${taxaEntrega.toFixed(2)} para entregar em Fragata`)
        break;
    case 3:
        taxaEntrega = 9.00
        alert(`Taxa R$:${taxaEntrega.toFixed(2)} para entregar em Laranjal`)
        break;
    default:
        taxaEntrega = 12.00
        alert(`Taxa R$:${taxaEntrega.toFixed(2)} para entrega em outros bairros`)
}

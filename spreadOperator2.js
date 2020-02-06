let fabricante = {
    empresa: "Unilever",
    cnpj: "12.123.123/0001-35"
}

let produto = {
    nome: "Vanish 500ml",
    preco: 5.0,
    ...fabricante

    
}

// como usar o spreadOperator

let a = [1,4,6,'sapo'];
let b = [ 7, ...a, 'gasolina']
console.log(b)

function treste(){
    return (resulado = arguments)
}

console.log(treste(1,2));

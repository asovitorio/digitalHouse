let fabricante = {
    empresa: "Unilever",
    cnpj: "12.123.123/0001-35"
}

let produto = {
    nome: "Vanish 500ml",
    preco: 5.0,
    ...fabricante

    
}

console.log(produto)
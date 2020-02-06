// let bart = {
//     mae: "Marge",
//     pai: "Homer",
//     hobbie: "Skate",
//     corCamiseta: "Laranja"
// }


// for(let propriedade in bart){
//     console.log(propriedade,":",bart[propriedade]);
// }

// let frase = "Essa semana vou no colearning";

// for(let letra of frase){
// console.log(letra);

// }

// let data = new Date(1980, 02, 06);


// let diaSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado']

// console.log(diaSemana[data.getDay()]);
// console.log(data.getFullYear());

// data.setYear(2020);
// data.setMonth(02);
// data.setDate(06);

// console.log(data)

// let destinosIncriveis = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']

// let [ , bariloche, ,china]  = destinosIncriveis;

// console.log(bariloche,china);

//forIn é para objetos literais
let pessoa = {
    nome: ' Natalia Lira',
    idade: 21,
    endereco:'Rua das flores'
}

// verificar se a pessoa tem cpf
// Caso não tenha cadatrar

for(campo in pessoa){
    console.log(`${campo}: ${pessoa[campo]}`)
    
}
//forOf
let array = ['Mayara','Pedro', 'Dario','Laura'];

for (nome of array) {
    console.log(nome);
}

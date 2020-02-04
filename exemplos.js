//Exemplos de filter!!!

let pessoas = [
    {nome: "Alessandro" , idade: 39},
    {nome: "Sergio" , idade: 40},
    {nome: "Natalia" , idade: 21},
    {nome: "Luiz Alexandre" , idade: 25},

];

let maiorDe22 = pessoas.filter(
    (pessoa) => {
        return pessoa.idade > 22
    })

console.log(maiorDe22)

let vetor = [1,2,3]
 const a = (num) =>Math.pow(num,2);
 console.log(vetor.map(a));
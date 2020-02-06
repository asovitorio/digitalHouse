//filter
a = [2, 3, 4, 8, 0];
console.log(a.filter(x => x > 5));

//filter com map
let resultado1 = a.filter(x => x > 5).map(y => y ** 2)
let resultado = a.map(y => y ** 2).filter(x => x > 5)
console.log(resultado1)
console.log(resultado)

// forEach

a.forEach(x => console.log(`esse numero é o ${x}`))

//template string 
let pessoa = {
    nome: 'Pedro',
    idade: 25,
    interesse: ['javascript', 'node', 'mysql']
}
console.log(`Olá me nome é ${pessoa.nome} e tenho ${pessoa.idade} anos, e gosto muito de ${pessoa.interesse}`)

//reduce
let cidade = [
    {
        nome: "São Paulo",
        pop: 12800000
    },
    {
        nome: "Campinas",
        pop: 1000000
    },
    {
        nome: "Salvador",
        pop: 3000000
    },
    {
        nome: "Guaxupé",
        pop: 60000
    }
];
console.log(
cidade.reduce(
    (acumulado, cidade)=>{
        return acumulado + cidade.pop;
    },0));


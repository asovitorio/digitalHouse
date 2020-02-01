let pessoa =  ['Alessandro']
console.log(pessoa);
pessoa.push('Sandra', 'Erick')
pessoa.pop();

console.log(pessoa);


let arrayFrase = [
    "Não",
    "fracassei,",
    "simplesmente",
    "encontrei",
    "dez",
    "mil",
    "soluções",
    "equivocadas"
]

let fraseNova = arrayFrase.join(" ");

console.log(fraseNova);

let estudantes = [
    {
      nome: "Álvaro",
      media: 9,
      curso: "Android"
    },
    {
      nome: "Daniel",
      media: 6,
      curso: "Full Stack"
    },
    {
      nome: "Alexis",
      media: 3,
      curso: "iOS"
    }
  ];

  let alunoFormado = estudantes.pop();

  console.log(estudantes)
  console.log("--------------------------------------------------------------------------------------------")
  console.log(alunoFormado)
  console.log("--------------------------------------------------------------------------------------------")
  
  estudantes.push({
    nome: 'João',
    media: 5,   
    curso: 'iOS'})

    console.log(estudantes);
    console.log("--------------------------------------------------------------------------------------------")
    estudantes.push({
        nome: 'Miguel',
        media: 2,   
        curso: 'Android'})

        console.log(estudantes);
        console.log("--------------------------------------------------------------------------------------------")

        estudantes.unshift({
            nome: 'Mariana',
            media: 9,   
            curso: 'Full Stack'
        },
        {
            nome: 'Francisco',
            media: 2,   
             curso: 'Android'
        }
        )

        console.log(estudantes)

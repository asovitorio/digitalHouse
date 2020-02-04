json = `[{"nome":"Repete Pet",
"raca":"Passsaro",
"dataNascimento":"10/12/2018",
"tipo":"Papagaio",
"peso":3.5,
"sexo":"Macho",
"dono":{"nome":"vinicius","idade":25},
"vacinado":false,
"servicos":["Banho","Tosa"]},
{"nome":"Menina",
"raca":"Vira-Lata",
"dataNascimento":"2016-01-14T16:30:22Z",
"tipo":"cachorro",
"sexo":"Fêmea",
"peso":3.5,
"dono":{"nome":"João","idade":25},
"vacinado":true,
"servicos":["Banho","Tosa"]}] `;

//Padrão de string de data para json: AAAA-MM-DDTHH:mm:SSZ
//
const lerPets = (umJSON) => {

  const pets = JSON.parse(umJSON);
   
  pets.map(function(lista){

    lista.dataNascimento = new Date(lista.dataNascimento);
  })
    
   return pets;
//   console.log("fim da função")
  
};

 console.log(lerPets(json));
  let vetor = [1,2,3]
 const a = (num) =>Math.pow(num,2);
 console.log(vetor.map(a));

// const vacinarPet = function(pet){
//     if(!pet.vacinado){
//         pet.vacinado = true
//                  return "O Pet foi vacinado com sucesso!";
//     }else {
//          return "Esse pet já está vacinado!";
//     }

// }


// const darEntradaPets = (listaPets, leituraLista, vacinarPet)=>{
   
//    let pets =  leituraLista(listaPets)
//     // console.log(pets)
//     const msgFinal = (pet , resultado) =>{
//         console.log("O pet: "+ pet.nome + resultado)
//     }
    
//     for (let i = 0; i < pets.length; i++) {
//        let resultado = vacinarPet(pets[i]);
//        msgFinal(pets[i], resultado)
//     }

   
// }

// // Usar os dois callback para realizar os processos de leitura e vacina nos pets
// //criar uma função para dar mensagem de finalização do serviço dentro da função principal


// darEntradaPets(json, lerPets, vacinarPet)
// function papagaio(texto){
//     for(let i = 1; i<=5; i++){
//           console.log(texto);
//     }
//   }

//   papagaio("deu certo");

// function naoPareDeContarImparesAte(numero){
//     // Escreva aqui o seu código
//     let cont = [];
//     for(let i = 0; i <=numero;i++){
//         if( i % 2 != 0){
//             cont[i] = 
//         }
//     } return cont;
// }

// console.log(naoPareDeContarImparesAte(10));

function encontreUm5(numeros){
    let i = -1;
 do{
      i++;
numeros[i] == 5 ? console.log("Encontramos um 5!") : console.log(numeros[i]);
      
}while(numeros[i] != 5);   

}

encontreUm5([1,2,5,4,5,6,7]);
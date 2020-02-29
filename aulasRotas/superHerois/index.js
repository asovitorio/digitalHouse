

const superHerois = [{

    nome: "Batman",
    habilidade: "Inteligencia",
    poder: (forca) => {
        let poder = forca * 10;
        return poder;
    }
},
{
    nome: "Superman",
    habilidade: "Forca",
    poder: (forca) => {
        let poder = forca * 1000000;
        return poder;
    }
}]
const teste = [1,5,9,7,8]
function teste2(elem, index, array){
       console.log("a[" + index + "] = " + elem );
    let soma = [];
    soma = soma[index] + elem
    console.log(soma)
    
}
function teste3(acumulador,valor) {
   return acumulador + valor;
  }

console.log(teste.reduce(teste3))
let numero = teste.map(teste3)
console.log(numero)


module.exports = superHerois;


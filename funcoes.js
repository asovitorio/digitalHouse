//função que execulta outra função arrow...
let soma = (a,b) => c => console.log('reultado = ' + (a+b+c))
 soma(2,3)(18);

 // função com retorno
function  area(largura,altura){
    const area = largura * altura
    if(area > 20){
        console.log(`valor da area acima do permitido: ${area}m²`)
    } else{
        return area
    }
}
//console.log(area(6,6))


function somaDinamica(){
    let soma = 0;

    for(i in arguments){
        soma += arguments[i];
    }
    return soma
}

console.log(somaDinamica(2,3,5,6,9,111,'a'))

function teste(...nume){

     return nume.reduce((a,b) => a * b);
}

console.log(teste(1,2,3,4,5,6,9))

let clubesUm = ['Paysandu', 'Corinthians', 'Santos'];

let clubesDois = ['Flamengo', 'Palmeiras', 'São Paulo'];

let todosClubes = [...clubesUm, ...clubesDois];



let fatias = ['aniversário', 'para']
let frase = ['Feliz',...fatias, 'você']


let auto = {

    marca: 'Ferrari',
    Kms: 0,
    ano: 2019
};



let pilotoUm = {

    nome: 'Vetel',
    idade: 33,
    ...auto
}

let pilotoDois = {

    nome: 'Leclerc',
    idade: 22,
    ...auto
}


let notas = [9.3,8.5,3.2,7,10];


function myFuncao(...parametro){
    return parametro;
}

function somar( outrosParametros, ...numeros){

    return numeros.reduce((pilha,num)=> pilha += num);
}

//console.log(myFuncao("teste",1593,{teste:"deu certo", agora: "22:32"},'Alessandro'));
console.log(somar(22,22,31,22));
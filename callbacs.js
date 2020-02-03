// //operações
// const somar = (numeroA,numeroB) => numeroA + numeroB;
// const subtrair = (numeroA,numeroB) => numeroA - numeroB;
// const multiplicar = (numeroA,numeroB) => numeroA * numeroB;
// const dividir = (numeroA,numeroB) => numeroA / numeroB;
// //callbacks
// const calculadora = (numeroA , numeroB , operacao) => operacao(numeroA, numeroB)

// console.log(calculadora(10, 20,somar))
// console.log(calculadora(10,20,subtrair))
// console.log(calculadora(10,20,multiplicar))
// console.log(calculadora(10,20,dividir))

// let meuCallback = () => console.log("olá mundo");

// setTimeout(meuCallback, 5000);

// function nomeCompleto(nome, sobrenome){
//     return nome + ' ' + sobrenome + ' ! ';
// };

// function iniciais(nome, sobrenome){
//     return nome[0] + sobrenome[0];
// }

// function saudar(nome, sobrenome, callback) {

//     return "Olá Sr. " + callback(nome, sobrenome);
// }

// console.log(saudar("Alessandro", "Vitorio",nomeCompleto)); 
// console.log(saudar("Alessandro", "Vitorio",iniciais)); 

// const dobro =(numero) => 2 * numero;
// const triplo =(numero) => 3 * numero;

// const aplicar = (numero, callback)=>{
//     return callback(numero);
// }
// function dobro(numero){
//     return 2 * numero;
// }
// function triplo(numero){
//     return 3 * numero;
// }

// function aplicar(numero, callback){
//     return callback(numero);
// }
// function somar(numeroA, numeroB){
//     return numeroA + numeroB;
// }
// function subtrair(numeroA, numeroB){
//     return numeroA - numeroB;
// }
// function multiplicar (numeroA, numeroB){
//     return numeroA * numeroB;
// }
// function dividir(numeroA, numeroB){
//     return numeroA / numeroB;
// }

// function calculadora(numeroA,numeroB,callback){
//     return callback(numeroA,numeroB);
// }

// console.log(calculadora(4,2,subtrair));


function adicionarHttp(url) {
    return 'http://' + url;
}

function processar(url,callback){
    let urls = [];
    for(let i = 0; i< url.length;i++){
        urls[i] = callback(url[i])
    }
    return urls
} 

console.log(processar(['ale','ononeia', 'mica'],adicionarHttp))
//ALessandro

var teste;

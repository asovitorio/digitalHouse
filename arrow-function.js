let somar = (a, b) => a + b;

let dobro = (a, b) => {
    return a * b;
}

let horaAtual = () => {
    let data = new Date()
    return data.getHours() + ":" + data.getMinutes();
}
console.log(somar(2, 3));
console.log(dobro(2, 3));
console.log(horaAtual);
// git teste ALessandro

const notas = [6.7, 7.4, [2, 33, 22, 4, 66], 9.8, 8.1, 7.7, [1, 2, 3, 4, 5]];

for (i in notas) {

    if (i < (notas.length - 1)) {

        console.log(i, notas[i])

    } else {

        for (j in notas[(notas.length - 1)]) {

            console.log("array do array: " + j, notas[notas.length - 1][j])
        }
    }
}
console.log("------------------------------------------------------------------------------------------------------");

function arrayExebicao(array) {

    for (i in array) {
        if (typeof array[i] != 'object') {
            console.log(i + ' - ', array[i]);
        } else {
            for (j in array[i]) {
                console.log(i + ' - ' + j + '- array - ' + array[i][j])
            }
        }

    }
}
console.log("------------------------------------------------------------------------------------------------------");

//arrayExebicao(notas)

const pessoa = [{
    nome: 'Alessandro',
    sobrenome: 'Vitorio',
    idade: 39,
    peso: 64
},
{
    nome: 'Airton',
    sobrenome: 'Vitorio',
    idade: 12,
    peso: 37
}
]

console.log(pessoa);
console.log("------------------------------------------------------------------------------------------------------");

for(let atributo in pessoa){

console.log(`${pessoa[atributo]}`)
}
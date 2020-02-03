
let somar = (a, b) => a + b;

let dobro = (a, b) => {
    return a * b;
}

let horaAtual = () => {
let data = new Date()
return data.getHours() + ":" + data.getMinutes(); 
}
console.log(somar(2,3));
console.log(dobro(2,3));
console.log(horaAtual);
// git teste ALessandro

let texto = "Micalateia irmão de Ononeia"

console.log(texto.length);
console.log(texto.indexOf("ivdvdfv"));
console.log(texto.slice(0,10));
console.log(texto.trim())
console.log(texto.split(" "))
console.log(texto.replace("irmão","irmãs"))
let nome = "Alessandro"
console.log(nome[3]);

function substituicaoRapida(texto,palavra,substituicao){
    return console.log(texto.replace(palavra,substituicao));
    }

    substituicaoRapida(texto,"de","para");

    function menciona(texto,palavra){
        if(texto.indexOf(palavra) > -1){
            return true;
        }else{
            return false;
        }
        }
       console.log(menciona("Existem muitas linguagens de programação e javascript é uma delas","programaçãdddddo"));
       let nomeUsuario = "Olá, sou Carlos!".slice(9,15);
       console.log(nomeUsuario);
	   //erick pietro
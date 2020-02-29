const http = require('http');
const url = require('url');
const superHerois = require('./superHerois');

const server = http.createServer((req, res) => {
    let urlCompleta = url.parse(req.url, true);
    let rotas = urlCompleta.pathname;
    let dados = urlCompleta.query;

    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    if (rotas == '/') {
        res.write('<h1>Sejam Bem Vindos</h1>')
        res.end();
    }
    if (rotas == '/contatos') {
        res.write("<h1>Contato</h1>")
        for (let i in dados) {
            res.write("<h2>" + i + ": " + dados[i] + "</h2>")
           
        }
        res.end();
    }
    if(rotas == '/superherois'){
        res.write("<h1>Herois</h1>")
        
       let listar = (heroi,i) => console.log(heroi[i])
        superHerois.forEach(superHerois,i,listar)

       listar(superHerois,0);
       // res.write(JSON.stringify())

        res.end();

    }

    // res.write(200);

  


})


server.listen(3000, "localhost", () => {
    console.log("Servidor: porta->3000")
})
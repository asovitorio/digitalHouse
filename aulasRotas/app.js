const fs = require('fs');
const url = require('url');
const superHerois = require('./superHerois');
let ende = 'http://localhost:8080/default.html/gugu?year=2017&month=february'
urlCompleta = url.parse(ende,true);
let rotas = urlCompleta.pathname


console.log(urlCompleta);
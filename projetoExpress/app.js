const express = require('express');
const rotasProdutos = require('./rotas/rotasProduto')
let app = express();

app.get('/',(req,res)=> res.send('olá mundo'));

app.use('/produtos',rotasProdutos);


//criando um servidor
app.listen(3000,()=>console.log("servidor ativo porta 3000"));


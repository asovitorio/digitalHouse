const express = require('express');
let app = express();
app.get('/',(req,res) => res.send(['olá mundo',45,99,1.22]));
app.get('/contato',(req,res) => res.send({nome: "Alessandro", idade: 39}))

let series = ["Amagedon", "The Good Doctor","Game of Trhones"]
app.get('/produto/:id?',(req,res) => {
    let {id} = req.params
   
})
let produto = {

    tipoProduto: null,
    preco: null,
    quantidade: null
}

produto.tipoProduto = "living";
produto.preco = 12345;
produto.quantidade = 300;

// app.post('/produto/criar',(req, res) =>{
//  res.send(produto)
// })
app.listen(3000,() => console.log("Servidor rodando na porta 3000"));
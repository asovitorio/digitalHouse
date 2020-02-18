const ProdutoController = {

criarProduto: (req, res) => {
res.send("Criando um Produto 123");
},
deletarProduto: (req,res) =>{
    const {id} = req.params;
    res.send('deletando o porduto com id: ' + id)
}


}

module.exports = ProdutoController

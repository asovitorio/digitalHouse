const express = require('express');
const ProdutoControllers = require('../controllers/ProdutoController')
const router = express.Router();

router.get('/criar',ProdutoControllers.criarProduto)
router.get('/delete/:id', ProdutoControllers.deletarProduto);

module.exports = router;




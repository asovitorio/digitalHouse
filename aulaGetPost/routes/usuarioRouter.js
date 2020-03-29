var express = require('express');
var router = express.Router();
var usuarioController = require('../controllers/usuarioController')

router.get('/',usuarioController.listar);
router.get('/cadastrar',usuarioController.cadastrar);
router.post('/cadastrar',usuarioController.salvarCadastro);
router.get('/login',usuarioController.login);
router.post('/login',usuarioController.logar);



module.exports = router
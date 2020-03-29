const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
let usuariosJson = path.join('\models', 'usuarios.json')


const usuarioController = {
   listar: (req, res) => {
      // res.send("deu Certo");
      res.render("listaUsuario", {
         titulo: "Lista de Usuarios"
      })
   },
   cadastrar: (req, res) => {
      // res.send("deu Certo");

      res.render("usuario", {
         titulo: "Cadastro de Usuarios"
      })
   },

   salvarCadastro: (req, res) => {
      // res.send("deu Certo");
      let {
         nome,
         email,
         senha
      } = req.body;
      let senhaC = bcrypt.hashSync(senha, 10);


      let usuario = {
         nome: nome,
         email: email,
         senha: senhaC
      };

      fs.writeFileSync(usuariosJson, JSON.stringify(usuario));
      res.render('login', {
         titulo: "login"
      });

   },
   login: (req, res) => {
      // res.send("deu Certo");
      res.render("login", {
         titulo: "Login"
      });
   },
   logar: (req, res) => {
      let {
         email,
         senha
      } = req.body;
      let usuarioSalvo = fs.readFileSync(usuariosJson, {
         encoding: 'utf-8'
      });
      user = JSON.parse(usuarioSalvo);
      if (email == user.email && bcrypt.compareSync(senha, user.senha) == true) {
         return res.render('listaUsuario', {
            usuarios: user,
            titulo: "Lista de usuarios"
         });
         //return res.send(user);
      } else {
         return res.send("usuario ou senha invalido");
      }

   }

}


module.exports = usuarioController

// const bcrypt = require("bcrypt");

// let hash = bcrypt.hashSync("ale1228579",10)
// console.log(hash)
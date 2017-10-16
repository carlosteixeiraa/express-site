// Declaração Variaveis
var express = require('express');
var site = express();
var caminho = require("path");
var porta = 3000;

// Pagina inicial
site.get('/',function(req,res){
  res.sendFile(caminho.join(__dirname+'/public/index.html'));
  console.log('Pagina inicial acessada!');
});

// Pagina sobre
site.get('/sobre',function(req,res){
  res.sendFile(caminho.join(__dirname+'/public/sobre.html'));
  console.log('Pagina sobre acessada!');
});

// Site a escutar
site.listen(porta)
console.log('Site a escutar na porta ' + porta);
console.log('Entre em localhost:' + porta + ' para aceder ao site!')

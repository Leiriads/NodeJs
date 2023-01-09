require('dotenv').config({path:'variables.env'}); //dotenv pra conseguir ler as variaveis .env
const express = require('express');
const cors = require('cors'); //permite acesso pra trabalhar com api de outros sites
const bodyParser = require('body-parser');//modulo que converte o body de uma requisição em varios formatos

const routes = require('./routes'); //onde estao as rotas do servidor

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));

server.use("/api",routes); //todos endereços vao ter esse prefixo /api

//ler o variaveis.env
server.listen(process.env.PORT,()=>{
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});

// https://resttesttest.com/# pra testar as requisições
// exemplo de busca http://localhost:3000/api/cars
// olhar o routes.js
const mysql = require('mysql'); //usando a dependencia do mysql
const { connect } = require('./routes');

const connection = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME
});

connection.connect((error)=>{
    if(error) throw error; //throw joga o erro
    console.log(`Conectado ao Banco de Dados: ${process.env.DB_NAME}`)
});

module.exports = connection;

/* 

create database dbApiCar;

use dbApiCar;

create table car (
codigo int primary key auto_increment,
modelo varchar(30),
placa varchar(7)

);

insert into car ( modelo,placa) values ('GTR-Nissan','GRLE98');
insert into car ( modelo,placa) values ('Ferrari','LGWKF25');

select * from car;

*/
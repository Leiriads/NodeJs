//classe service chama a conexao
const db= require('../db');

module.exports = {
    fetch_all: ()=>{
        return new Promise((accept,rejected)=>{
            db.query('SELECT * FROM car',(error,results)=>{
                if(error){ rejected(error); return;}
                accept(results);
            });
        });
    },



    fetch_one: (codigo)=>{
        return new Promise((accept,rejected)=>{
            db.query('SELECT * FROM car WHERE codigo = ?',[codigo],(error,results)=>{
                if(error){ rejected(error); return;}
                if(results.length > 0){
                    accept(results[0]);
                }else{
                    accept(false);
                }
            });
        });
    },


    insert_car: (modelo,placa)=>{
        return new Promise((accept,rejected)=>{
            db.query('INSERT INTO car (modelo,placa) VALUES (?,?)',[modelo,placa],(error,results)=>{
                if(error){ rejected(error); return;}
                    accept(results.insertCodigo);
               
            });
        });
    },

//alterar é o metodo PUT http
    alter_car: (codigo,modelo,placa)=>{
        return new Promise((accept,rejected)=>{
            db.query('UPDATE car SET modelo = ?, placa = ? WHERE codigo = ?',[modelo,placa,codigo],(error,results)=>{
                if(error){ rejected(error); return;}
                    accept(results);
               
            });
        });
    },

    delete_car: (codigo)=>{
        return new Promise((accept,rejected)=>{
            db.query('DELETE FROM car WHERE codigo = ?',[codigo],(error,results)=>{
                if(error){ rejected(error); return;}
                    accept(results);
            });
        });
    },

};
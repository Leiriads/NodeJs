//no mysql v
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
//flush privileges;

//faz o arquivo carro controler  ver o carro service, regras de bd no carro service
const CarService = require('../services/CarService'); 

module.exports = {
    fetch_all: async(req,res)=> {
        let json = {error:'', result:[]}; //retorna um array

        let cars = await CarService.fetch_all();

        for(let i in cars){
            json.result.push({
                codigo: cars[i].codigo,
                descricao: cars[i].modelo,
                placa:cars[i].placa
            });
        }
        res.json(json); //formato json
    },

    fetch_one: async(req,res)=> {
        let json = {error:'', result:{}}; //agora retorna um objeto

        let codigo = req.params.codigo;

        let car = await CarService.fetch_one(codigo);

        if(car){
            json.result = car;
        }
        res.json(json);
    },

    insert_car: async(req,res)=> {
        let json = {error:'', result:{}};

        let modelo = req.body.modelo;
        let placa = req.body.placa;

        if(modelo && placa){
            
            let car_Code = await CarService.insert_car(modelo,placa);
            json.result = {
                codigo:car_Code,
                modelo,
                placa
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },


    update_car: async(req,res)=> {
        let json = {error:'', result:{}}; 

        let codigo = req.params.codigo; //codigo vem do parametro nao do corpo
        let modelo = req.body.modelo;
        let placa = req.body.placa;

        if(codigo && modelo && placa){
            await CarService.alter_car(codigo,modelo,placa);
            json.result = {
                codigo,
                modelo,
                placa
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    delete_car: async(req,res)=> {
        let json = {error:'', result:{}}; //agora retorna um objeto

        let codigo = req.params.codigo;

        let car = await CarService.delete_car(codigo); // ou req.params.codigo pra pegar direto do parametro

        if(car){
            json.result = car;
        }
        res.json('Deleted '+json);
    },

    /*
    delete_car: async(req,res)=> {
        let json = {error:'', result:{}}; //agora retorna um objeto
        await CarService.delete_car(req.params.codigo);        
        res.json('Deleted '+json);
    },

    */

}
var Game = require("../models/Game")

class GameController{

    async create(req,res){
        var {name,price,year} = req.body

        if(name == undefined){
            res.status(400)
            res.json({err: "O nome e invalido!"})
            return
        }

        if(price == undefined){
            res.status(400)
            res.json({err : "O preço não pode estar vazio !"})
            return
        }

        if(year == undefined){
            res.status(400)
            res.json({err: "O Ano não pode estar vazio !"})
            return
        }

        var nameExists = await Game.findName(name)

        if(nameExists){
            res.status(406)
            res.json({err: "O nome ja esta cadastrado!"})
            return
        }

        await Game.new(name,price,year)
        res.status(200)
        res.send("Tudo ok !")

    }

    async index (req,res){
       var games = await Game.findAll();
       res.json(games)
    }

    async findGame(req,res){

        var id = req.params.id;
        if(isNaN(id)){
            res.status(406)
            res.json({err: "So Numeros!"})
            return;
        }

        var game = await Game.findById(id);

        if(game == undefined){
            res.status(404)
            res.json({err: ("O game não existe!")})
        }else{
            res.status(200)
            res.json(game)
         }
    }

    async remove (req,res){
        var id = req.params.id;
        if(isNaN(id)){
            res.status(406)
            res.json({err:"So numero !"})
            return
        }

        var result = await Game.delete(id)

        if(result == undefined){
            res.status(200)
            res.send("Game deletado!")
            
        }else{
            res.status(406)
            res.send(result.err)
        }
    }

    async edit(req,res){
        var {id,name,price,year} = req.body
        
        var result = await Game.update(id,name,price,year)

        if(result != undefined){
            if(result.status){
                res.status(200)
                res.send("Game Atualizado!")
            }else{
                res.status(404)
                res.send(result.err)
            }
        }else{
            res.status(406)
            res.send("Ocorreu um erro no servidor!")
        }
    }

}

module.exports = new GameController()
var knex = require ("../database/connection")

    class Game {

        async findAll(){
            try{
                var result = await knex.select(["id","name","price","year"]).table("games")
                return result;
            }catch(err){
                console.log(err)
                return[]
            }
        }

        async findById(id){
            try{
            var result = await knex.select("id","name","price","year").where({id:id}).table("games")

            if(result.length > 0){
                return result
            }else{
                res.json({err: "ooooo"})
            }
''
        }catch(err){
                console.log("err")
                return undefined
            }
        }

        async findName(name){
            try{
                var result = await knex.select("*").from("games").where({name:name})
                if(result.length > 0){
                    return true;
                }else{
                    return false
                }
            }catch(err){
                console.log(err)
                return false
            }
        }

        async new(name,price,year){
            try{
                await knex.insert({name,price,year}).table("games")
            }catch(err){
                console.log("err")
            }
        }

        async delete (id){
            var game = await this.findById(id)
            if(game != undefined){
                try{
                    await knex.delete().where({id:id}).table("games")
                }catch{
                    return {status: false,err:err}   
                }
            }else{
                return {status: false,err:"O Game não existe, portanto não pode ser deletado."}
            }
        }

        async update(id,name,price,year){
            var game = await this.findById(id)

            if(game != undefined){
                var editGame = {}

                if(name != undefined){
                    editGame.name = name
                }

                if(price != undefined){
                    editGame.price = price
                }

                if(year != undefined){
                    editGame.year = year
                }

                try{
                    await knex.update(editGame).where({id:id}).table("games")
                    return {status: true}
                }catch(err){
                    return {status:false,err: err}
                }

             
            }else{
                return{status: false,err: "O usuário não existe!"}
               }


        }


    }

 module.exports = new Game ()
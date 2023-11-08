
const jwt = require("jsonwebtoken")
const JWTSecret = "gdsgdgasdfsagneinkfbsaufoabikfbniapknb"


var DB = {
    users: [
        {
            id: 1,
            nome: 'Rold Fear',
            email:'denilsonb53719@gmail.com',
            password:'12345678'
        },{
            id: 20,
            nome: 'Bielzera',
            email:'Gabrielb5371@gmail.com',
            password:'12345678'
        }
    ]
}

 class jwtController{
    async auth(req,res){
        var{email, password} =req.body

        if(email != undefined){
         var user = DB.users.find(u => u.email == email)
            if(user != undefined){
    
                if(user.password == password){
    
                        jwt.sign({id: user.id, email: user.email },JWTSecret,{expiresIn:'48h'},(err,token) =>{
                        if(err){
                            res.status(400)
                            res.json({err:"Falha interna !"})
                        }else{
                            res.status(200)
                            res.json({token: token})
                        }
                    })
                }else{
                    res.status(401)
                    res.json({err:'Credenciais Invalida'})
                }
    
            }else{
                res.status(404)
                res.json({erro:'O E-mail Enviado não existe na base de dados'})
            }
    
        }else{
            res.status(400)
            res.send({err:'O E-mail enviado é Inválido'})
        }
    
    }

 }

 module.exports = new jwtController();

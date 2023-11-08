# Api de Games
Esta API é utilizada para venda de games...

Npm install para instala as biblioteca.

## Endpoints
### GET /game
Esse endpoint é responsável por retornar a listagem de todos os games cadastrados no banco de dados.
#### Parametros
Nenhum
#### Respostas
##### ok! 200

Caso essa resposta aconteça você vai receber a listagem de todos os games.

Exemplo de resposta:
```
[
    {
        "id": 19,
        "title": "Sea of thieves",
        "year": "2020",
        "price": "89,99"
    },
    {
        "id": 20,
        "title": "Minecraft",
        "year": "2018",
        "price": "59,99"
    }
]

```
```
##### Falha na autenticação! 401
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo da autenticação. Motivos: Token inválido, Token expirado.

Exemplo de resposta:
{
    "err": "Token invalido !"
}
```

## Endpoints
### GET /game/:id
Esse endpoint é responsável por pesquisar um game.
#### Parametros
Nenhum
#### Respostas
##### ok! 200

Caso essa resposta aconteça você vai receber a listagem do game procurado.

Exemplo de resposta:
```
[
    {
        "id": 19,
        "title": "Sea of thieves",
        "year": "2020",
        "price": "89,99"
    }
]

```
```
##### Falha na autenticação! 404
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo de pesquisa. Motivos: Não encontrado.

Exemplo de resposta:
{
    Not Found
}
```

```
##### Falha na autenticação! 400
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo da autenticação. Motivos: Invalido.

Exemplo de resposta:
{
   Bad Request
}
```

## Endpoints
### POST /game
Esse endpoint é responsável por cadastrar um game no banco de dados.
#### Parametros
Nenhum
#### Respostas
##### ok! 200

Caso essa resposta aconteça você vai cadastrar um game.

Exemplo de resposta:
```
ok

```

```
##### Falha na autenticação! 400
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo de cadastramento. Motivos: dados invalidos.

Exemplo de resposta:
{
    {err:"O nome é invalido !"}
    {err:"O ano é invalido !"}
    {err:"O valor do preço é invalido !"}
}
```


## Endpoints
### DELETE /game/:id
Esse endpoint é responsável por deletar um game cadastrados no banco de dados.
#### Parametros
Nenhum
#### Respostas
##### ok! 200

Caso essa resposta aconteça você vai receber a listagem de todos os games.

Exemplo de resposta:
```
"Game Deletado !"

```


```
##### Falha na autenticação! 404
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo de pesquisa. Motivos: Não encontrado.

Exemplo de resposta:
{
    Not Found
}
```

```
##### Falha na autenticação! 400
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo da autenticação. Motivos: Invalido.

Exemplo de resposta:
{
   Bad Request
}
```

## Endpoints
### PUT /game/:id
Esse endpoint é responsável para editar um game cadastrados no banco de dados.
#### Parametros
Nenhum
#### Respostas
##### ok! 200

Caso essa resposta aconteça você vai receber a listagem de todos os games.

Exemplo de resposta:
```
"Game Editado !"

```

```
##### Falha na autenticação! 404
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo de pesquisa. Motivos: Não encontrado.

Exemplo de resposta:
{
    Not Found
}
```

```
##### Falha na autenticação! 400
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo da autenticação. Motivos: Invalido.

Exemplo de resposta:
{
   Bad Request
}
```

## Endpoints
### Post /auth
Esse endpoint é responsável por fazer o processo de login.
#### Parametros
email: E-mail do usuário cadastrado no sistema.
password: Senha do usuário cadastrado no sistema, com aquele determinado e-mail.

Exemplo:

```
{
"email":"denilsonb53719@gmail.com",

"password":"12345678"
}
```

#### Respostas
##### ok! 200
Caso essa resposta aconteça você vai receber o token JWT para conseguir acessar endpoints protegidos na API.
Exemplo de resposta:
```

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJSb2xkRmVhckBnbWFpbC5jb20iLCJpYXQiOjE2NzY1ODc5ODAsImV4cCI6MTY3Njk0Nzk4MH0.8OnGfuHn-iFvYbKUgttXJbFvTf62C8YzIxp7Ok2oKKM"
}

```
```
##### Falha na autenticação! 401
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo da autenticação. Motivos: Senha ou e-mail incorretos.

Exemplo de resposta:
{
    {err: "Credencias inválidas"}
}

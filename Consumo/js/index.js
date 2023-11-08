
var Auth = {
    headers: {
        Authorization:"Bearer " + localStorage.getItem("token")
    }    
}

function Login(){
    var emailFild = document.getElementById("email")
    var passwordFild = document.getElementById("password")
    
    var email = emailFild.value;
    var password = passwordFild.value;

    axios.post("http://localhost:3000/auth",{
        email,
        password
    }).then(res =>{
        var token = res.data.token;
        localStorage.setItem("token",token)
        Auth.headers.Authorization = 'Bearer ' + localStorage.getItem("token");
        alert("Logado!")
        location.reload();
    }).catch(err =>{
        alert("Login Invalido!")
    })
}


axios.get("http://localhost:3000/game/",Auth).then(response =>{
    var games = response.data;
    var list = document.getElementById("list")
    games.forEach(game => {

        var item = document.createElement("li")
        item.setAttribute("data-id",game.id)
        item.setAttribute("data-name",game.name)
        item.setAttribute("data-price",game.price)
        item.setAttribute("data-year",game.year)
        
        item.innerText = "Titulo: " + game.name + ", Valor " + game.price + " Ano: " + game.year ;

        var deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = "Deletar";
        deleteBtn.addEventListener("click",function(){
            deleteGame(item)
        })

        var updateBtn = document.createElement("button")
        updateBtn.innerHTML = "Edit"
        updateBtn.addEventListener("click",function(){
            loadForm(item)
        })

        list.appendChild(item)
        item.appendChild(deleteBtn)
        item.appendChild(updateBtn)
    })
})

//Criar Game
function createGame(){
    var nameInput = document.getElementById("name");
    var priceInput = document.getElementById("price");
    var yearInput = document.getElementById("year")

    var game = {
        name: nameInput.value,
        price: priceInput.value,
        year: yearInput.value
    }

    axios.post("http://localhost:3000/game",game,Auth).then(response => {
        if(response.status == 200){
            alert("Game Cadastrado!")
            location.reload();
        }
    }).catch(err =>{
        console.log(err)
    })
}

//Deleta Game

function deleteGame(ListItem){
    var id = ListItem.getAttribute("data-id")
    console.log(id)
    axios.delete("http://localhost:3000/game/"+id,Auth).then(response =>{
            alert("Game deletado!")    
            location.reload(); 
    }).catch(err => {
        console.log(err)
    })
}

//Update Game

function loadForm(ListItem){
    var id = ListItem.getAttribute("data-id")
    var name = ListItem.getAttribute("data-name")
    var price = ListItem.getAttribute("data-price")
    var year = ListItem.getAttribute("data-year")
    console.log(price)
    console.log(ListItem)

    document.getElementById("idEdit").value = id;
    document.getElementById("nameEdit").value = name;
    document.getElementById("priceEdit").value = price;
    document.getElementById("yearEdit").value = year;

}

function updateGame(){

    var idInput = document.getElementById('idEdit')
    var nameInput = document.getElementById('nameEdit')
    var priceInput = document.getElementById('priceEdit')
    var yearInput = document.getElementById('yearEdit')

    var game = {
        id :  idInput.value,
        name: nameInput.value,
        price: priceInput.value,
        year: yearInput.value
    }

    var id = idInput.value;

    axios.put('http://localhost:3000/game/'+id,game,Auth).then(response =>{
      
        if(response.status == 200){
            alert('Game atualizado !')
            location.reload();
        }
    }).catch(error =>{
        console.log(error)
    })

}
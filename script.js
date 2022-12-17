var h1 = document.createElement("h1")
h1.innerHTML = "Olá pessoal, sejam bem vindos"

document.querySelector("header").appendChild(h1)
h1.classList.add("classh1")

var div1 = document.createElement("div")
div1.classList.add("div1")
var div2 = document.createElement("div")
div2.classList.add("div2")


document.querySelector("main").appendChild(div1)
document.querySelector("main").appendChild(div2)

var h2div1 = document.createElement("h2")
var pdiv1 = document.createElement("p")

h2div1.classList.add("h2div1")
pdiv1.classList.add("pdiv1")

h2div1.innerHTML = "Esse é o meu h2 da minha primeira div"
pdiv1.innerHTML = "Esse é o meu p da minha primeira div"

document.querySelector(".div1").appendChild(h2div1)
document.querySelector(".div1").appendChild(pdiv1)


var h2div2 = document.createElement("h2")
var pdiv2 = document.createElement("p")

h2div2.innerHTML = "Esse é o meu h2 da minha segunda div"
pdiv2.innerHTML = "Esse é o meu p da minha segunda div"

document.querySelector(".div2").appendChild(h2div2)
document.querySelector(".div2").appendChild(pdiv2)
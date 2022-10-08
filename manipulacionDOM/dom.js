// leer html desde javascript

const h1 = document.querySelector("h1"); //seleccionado etiqueta clase o ID 
const p = document.querySelector("p"); 
const parrafito = document.querySelector(".parrafito"); 
const id = document.querySelector("pid"); 
const input = document.querySelector("input");

console.log( {
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = "patito <br> feo"; //esto puede ser causal de codigo malisioso en html ideal usar innerText
//console.log(h1.getAttribute("pantalla"));
//h1.setAttribute("")

const img = document.createElement("img");
img.setAttribute("src", "https://static6.depositphotos.com/1030334/671/i/600/depositphotos_6716219-stock-photo-kitten.jpg");

console.log(img);

pid.append(img);
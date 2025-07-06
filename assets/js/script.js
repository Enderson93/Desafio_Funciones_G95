// Original:

// function pintar(){
// ele.style.backgroundColor = 'yellow'
// }
// const ele = document.getElementById("ele1")
// ele.style.backgroundColor = "green"


function pintar(nombreElemento , color = "green"){
    let elemento = document.querySelector('#' + nombreElemento)
    elemento.style.backgroundColor = color
}

document.addEventListener("click", function() {
    pintar('ele1' , 'yellow')})



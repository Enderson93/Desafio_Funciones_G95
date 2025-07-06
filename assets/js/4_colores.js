// Requerimiento 4_colores
const div1 = document.querySelector('#div1')
const div2 = document.querySelector('#div2')
const div3 = document.querySelector('#div3')
const div4 = document.querySelector('#div4')
const key = document.querySelector('#key')

function pintar(nombreElemento, color = "black") {
    let elemento = document.querySelector('#' + nombreElemento)
    elemento.style.backgroundColor = color
}

div1.addEventListener("click", function () {
    pintar('div1')
})

div2.addEventListener("click", function () {
    pintar('div2')
})

div3.addEventListener("click", function () {
    pintar('div3')
})

div4.addEventListener("click", function () {
    pintar('div4')
})


document.addEventListener('keydown', function (event) {
    if (event.key === 'a' || event.key === 'A') {
        pintar('key', 'pink')
    } else if (event.key === 's' || event.key === 'S') {
        pintar('key', 'orange')
    } else if (event.key === 'd' || event.key === 'D') {
        pintar('key', 'SkyBlue')
    }
})


document.addEventListener("keydown", function (event) {
    if (event.key === "q" || event.key === "Q") {
        agregarElemento('purple');
    } else if (event.key === "w" || event.key === "W") {
        agregarElemento('gray');
    }
    else if (event.key === "e" || event.key === "E") {
        agregarElemento('brown');
    }
});

function agregarElemento(color) {
    let contenedor = document.getElementById("contenedor");
    let nuevoElemento = document.createElement("div");
    nuevoElemento.style.backgroundColor = color
    nuevoElemento.style.width = '200px'
    nuevoElemento.style.height = '200px'
    contenedor.appendChild(nuevoElemento);
}

document.getElementById("div5").innerHTML = "Mostrar Imagenes de perros"


let divs = document.getElementsByClassName("col")


for (let i = 0; i < divs.length; i++) {
    console.log("Contenido del div en pos " + i + ": " +
        divs[i].innerText)
    divs[i].style.backgroundColor = 'blue'
    divs[i].style.color = 'white'
}


document.querySelectorAll(".col")

document.getElementById('div5').addEventListener("click", cambiarPerro)

function cambiarColorColumnas(color) {
    let columnas = document.getElementsByClassName("col")
    for (let i = 0; i < columnas.length; i++) {
        columnas[i].style.backgroundColor = color
    }
}

function onClickBtn8() {
    console.log("Hizo click en el DIV 8")
}
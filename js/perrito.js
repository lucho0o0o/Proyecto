document.getElementById("cambiarColor8").addEventListener("click", onClickBtn8)
let div7 = document.getElementById("cambiarColor7")
    //Agregar una función anónima de JS
div7.addEventListener("click", function() {
    console.log("Click en el DIV 7")
})

async function cambiarPerro() {
    let perro = await httpCall('https://dog.ceo/api/breeds/image/random')
    document.getElementById("miimagen").src = perro.message
}

async function httpCall(URL) {
    let peticion = await fetch(URL)
    let respuesta = await peticion.json()
    console.log(respuesta)
    return respuesta
}
fetch("https://digimon-api.herokuapp.com/api/digimon/")
    .then(function(response) {
        console.log("Estuvo bien la petición :D  ")
        console.log("Respuesta: ", response)
        response.json().then(function(data) {
            console.log(data)
            document.getElementById("informacion").innerHTML = "<h1>" + data.name + "</h1>"
        })
    })
    .catch(function() {
        console.log("Algo salió mal :(  ")
    })



async function obtenerPersonaje(id) {
    let response = await fetch(`https://digimon-api.herokuapp.com/api/digimon/${id}/`)
    let data = await response.json()
    return data
}

async function obtenerDatos(url) {
    let response = await fetch(url)
    let data = await response.json()
    return data
}


async function listarPersonajes(url) {
    let lista = `<ul class="collection with-header">
      <li class="collection-header indigo lighten-2"><h4>Nombre de digimones</h4></li>`
    let personajes = await obtenerDatos(url)

    let numeroPersonaje = 1;
    for (const personaje of personajes) {
        lista += `<li class="collection-item">
         <div><strong>${numeroPersonaje}. Nombre:</strong> ${personaje.name}. <strong> <br> Género: </strong> ${personaje.level}.<strong><br> Imagen en el siguiente link: ${personaje.img}</div></li>`
        numeroPersonaje++
    }

    return lista
}

async function main(url) {
    let lista = await listarPersonajes(url)
    document.getElementById("informacion").innerHTML = lista
}

main('https://digimon-api.herokuapp.com/api/digimon/')
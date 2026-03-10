let contador = 0

function solicitarServicio() {

    contador++

    alert("Servicios solicitados: " + contador)
    console.log("Servicios solicitados: " + contador)

}

function registrar() {

    let nombre = document.getElementById("nombre").value
    let correo = document.getElementById("correo").value

    let regex = /@/

    if (nombre == "") {
        alert("Nombre obligatorio")
    }

    if (regex.test = correo) {
        alert("Correo válido")
    }



}

document.getElementById("modoBtn").addEventListener("click", function() {

    document.body.classList.toggle("dark")

})

let color = true

function modoOscuro() {

    if(color){
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
        color = false
        document.getElementById("modoBtn").innerHTML = "Modo claro"
    }else{
        color = true
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        document.getElementById("modoBtn").innerHTML = "Modo oscuro"
    }

}
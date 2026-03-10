let contador = 0

function solicitarServicio() {

    contador++

    alert("Servicios solicitados: " + contador)
    console.log("Servicios solicitados: " + contador)

}

function registrar() {


    var nombre = document.getElementById("nombre").value
    let nombreRegex = /^[a-zA-Z\s]+$/;

    if (!nombreRegex.test(nombre)) {
        alert("Nombre no válido. Solo se permiten letras y espacios.");
        return; 
    }

    var apellidos = document.getElementById("apellidos").value
    let apellidosRegex = /^[a-zA-Z\s]+$/;

    if (!apellidosRegex.test(apellidos)) {
        alert("Apellidos no válidos. Solo se permiten letras y espacios.");
        return; 
    }

    var edad = document.getElementById("edad").value
    let edadRegex = /^\d+$/;

    if (!edadRegex.test(edad) || edad < 0 || edad > 120) {
        alert("Edad no válida. Debe ser un número entre 0 y 120.");
        return; 
    }



    var telefono = document.getElementById("telefono").value
    let telefonoRegex = /^\d{10}$/;

    if (!telefonoRegex.test(telefono)) {
        alert("Número de teléfono no válido. Debe contener 10 dígitos.");
        return;// Detener la ejecución si el número de teléfono no es válido
    }





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
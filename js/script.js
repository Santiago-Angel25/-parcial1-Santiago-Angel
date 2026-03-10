let contador = 0

function solicitarServicio() {

    contador++

    alert("Servicios solicitados: " + contador)

}

function registrar() {

    let nombre = document.getElementById("nombre").value
    let correo = document.getElementById("email").value
    let apellido = document.getElementById("apellido").value
    let ciudad = document.getElementById("ciudad").value
    let edad = document.getElementById("edad").value
    let tipoInteres = document.getElementById("Tipo").value

    let regex = /@/

    if (nombre == "" || correo == "" || apellido == "" || ciudad == "" || edad == "" || tipoInteres == "Eleguir...") {
        alert("Todos los campos son obligatorios")
        return
    }
    if(tipoInteres == "Eleguir..."){
        alert("Por favor, seleccione un tipo de servicio de interés")
        return
    }

    if (regex.test = correo) {
        alert("Correo válido")
    }

}
    let modoOscuro = false
document.getElementById("modoBtn").addEventListener("click", function() {
    if (!modoOscuro) {
        document.body.classList.add("dark")
        modoOscuro = true
        document.getElementById("modoBtn").textContent = "Modo claro"
    } else {
        document.body.classList.remove("dark")
        modoOscuro = false
        document.getElementById("modoBtn").textContent = "Modo oscuro"
    }
    


})


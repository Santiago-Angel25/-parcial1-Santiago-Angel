let contador = 0

function solicitarServicio() {

    contador++

    alert("Servicios solicitados: " + contador)

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
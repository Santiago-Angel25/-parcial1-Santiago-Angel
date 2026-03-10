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

    let regex = /^[a-zA-Z\s]+$/gi;
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let regexEdad = /^\d+$/;
     

    if (nombre == "" || correo == "" || apellido == "" || ciudad == "" || edad == "" || tipoInteres == "Eleguir...") {
        alert("Todos los campos son obligatorios")
        return
    }
     if(!nombre.match(regex) || !apellido.match(regex)){
        alert("El nombre y apellido no pueden contener números o caracteres especiales")
        return
    }
    if (!correo.match(regexEmail)) {
        alert("Por favor, ingrese un correo electrónico válido")
        return
    }
    if(tipoInteres == "Eleguir..."){
        alert("Por favor, seleccione un tipo de servicio de interés")
        return
    }
    if (!edad.match(regexEdad) || edad < 16 || edad > 120) {
        alert("Por favor, ingrese una edad válida (entre 16 y 120 años)")
        return
    }
   

    alert("Registro exitoso")
    alert("Nombre: " + nombre + "\nApellido: " + apellido + "\nCorreo: " + correo + "\nCiudad: " + ciudad + "\nEdad: " + edad + "\nTipo de servicio de interés: " + tipoInteres)

    document.getElementById("formRegistro").reset()

   
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
    


});


let form = document.getElementById("formulario");
const botonEnviar = document.getElementById("btn_enviar");
function capturandoInfo(e) {
   e.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("contacto__campo--textarea").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (nombre === "") {
        alert("debes llenar este campo con tu nombre")
        return false
    }
    if (mensaje === "") {
        alert("no escribiste tu mensaje")
        return false
    }
    if (correo === "") {
         alert("debes llenar este campo con tu correo");
         return false
    }
    if (!emailRegex.test(correo) ){
        alert("el correo no es valido")
        return false
    }
   document.getElementById("nombre").value = "";
   document.getElementById("correo").value = "";
     document.getElementById("contacto__campo--textarea").value = "";
};

botonEnviar.addEventListener('click',capturandoInfo)
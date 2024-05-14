const divNombre = document.getElementById("divNombre");
const divTelefono = document.getElementById("divTelefono");
const divSelectProvincia = document.getElementById("divSelectProvincia");
const divEmail = document.getElementById("divEmail");
const divAsunto = document.getElementById("divAsunto");
const divMensaje = document.getElementById("divMensaje");
const divCheckbox = document.getElementById("divCheckbox");

const nombreInput = document.getElementById("nombre");
const telefonoInput = document.getElementById("telefono");
const selectProvincia = document.getElementById("selectProvincia");
const mailInput = document.getElementById("mail");
const asuntoInput = document.getElementById("asunto");
const mensajeInput = document.getElementById("inputMensaje");
const checkboxInput = document.getElementById("politicaPrivacidad");

const nombreError = document.createElement("p");
const telefonoError = document.createElement("p");
const selectProvinciaError = document.createElement("p");
const mailError = document.createElement("p");
const asuntoError = document.createElement("p");
const mensajeError = document.createElement("p");
const checkboxError = document.createElement("p");

const palabraExpresion = /^[A-Za-z\s'-]+$/;
const emailExpresion = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const numerosExpresion = /^(0|[1-9]\d*)(\.\d+)?$/;

function validation(event) {

    event.preventDefault();

    let isValid = true;

    if(nombreInput.value === "") {
        isValid = false;
        nombreError.textContent = "Campo incompleto";
        nombreError.style.color = "red";
        divNombre.appendChild(nombreError);
    }else if(!palabraExpresion.test(nombreInput.value)){
        isValid = false;
        nombreError.textContent = "Nombre inválido";
        nombreError.style.color = "red";
        divNombre.appendChild(nombreError);
    }else {
        nombreError.remove();
    }

    if(telefonoInput.value === "") {
        isValid = false;
        telefonoError.textContent = "Campo incompleto";
        telefonoError.style.color = "red";
        divTelefono.appendChild(telefonoError);
    }else if(!numerosExpresion.test(telefonoInput.value)){
        isValid = false;
        telefonoError.textContent = "Teléfono inválido";
        telefonoError.style.color = "red";
        divTelefono.appendChild(telefonoError);
    }else {
        telefonoError.remove();
    }

    if(selectProvincia.value === "0") {
        isValid = false;
        selectProvinciaError.textContent = "Elige una opción";
        selectProvinciaError.style.color = "red";
        divSelectProvincia.appendChild(selectProvinciaError);
    }else {
        selectProvinciaError.remove();
    }

    if(mailInput.value === "") {
        isValid = false;
        mailError.textContent = "Campo incompleto";
        mailError.style.color = "red";
        divEmail.appendChild(mailError);
    }else if(!emailExpresion.test(mailInput.value)) {
        isValid = false;
        mailError.textContent = "Mail inválido";
        mailError.style.color = "red";
        divEmail.appendChild(mailError);
    }else {
        mailError.remove();
    }

    if(asuntoInput.value === "") {
        isValid = false;
        asuntoError.textContent = "Campo incompleto";
        asuntoError.style.color = "red";
        divAsunto.appendChild(asuntoError);
    }else {
        asuntoError.remove();
    }

    if(mensajeInput.value === "") {
        isValid = false;
        mensajeError.textContent = "Campo incompleto";
        mensajeError.style.color = "red";
        divMensaje.appendChild(mensajeError);
    }else {
        mensajeError.remove();
    }

    if(!checkboxInput.checked) {
        isValid =  false;
        checkboxError.textContent = "Debes aceptar las politicas de privacidad";
        checkboxError.style.color = "red";
        divCheckbox.insertAdjacentElement("afterend", checkboxError);;
    }else {
        checkboxError.remove();
    }

    if(isValid) {
        mensajeEnviado();
    }
}

const divForm = document.getElementById("formContacto");
const textoInputs = document.querySelector(".textoInputsContacto")

function mensajeEnviado() {
    textoInputs.innerHTML = "";
    divForm.innerHTML = "";
    divForm.innerHTML = `
        <h3>¡Genial, ${nombreInput.value}!</h3>
        <h4>Tu mensaje se ha enviado exitosamente</h4>
    `
}

const botonEnviar = document.querySelector(".buttonEnviar");

botonEnviar.addEventListener("click", validation);
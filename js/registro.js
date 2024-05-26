const divInputNombre = document.querySelector(".divInputNombre");
const divInputApellido = document.querySelector(".divInputApellido");
const divInputEmail = document.querySelector(".divInputEmail");
const divInputContraseña = document.querySelector(".divInputContraseña");

const inputNombre = document.getElementById("nombreRegistro");
const inputApellido = document.getElementById("apellidoRegistro");
const inputEmail = document.getElementById("emailRegistro");
const inputContraseña = document.getElementById("contraseñaRegistro")

const nombreError = document.createElement("p");
const apellidoError = document.createElement("p");
const emailError = document.createElement("p");
const contraseñaError = document.createElement("div");

const imagenVerContraseña = document.getElementById("imgVisualizarContraseña");

const palabraExpresion = /^[A-Za-z\s'-]+$/;
const emailExpresion = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const contraseñaExpresion = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-_+=])[0-9a-zA-Z!@#$%^&*()-_+=]{8,}$/;

function validation(event) {

    event.preventDefault();

    let isValid = true;

    if(inputNombre.value === "") {
        isValid = false;
        nombreError.textContent = "Campo incompleto";
        nombreError.style.color = "red";
        divInputNombre.appendChild(nombreError);
    }else if(!palabraExpresion.test(inputNombre.value)){
        isValid = false;
        nombreError.textContent = "Nombre inválido";
        nombreError.style.color = "red";
        divInputNombre.appendChild(nombreError);
    }else {
        nombreError.remove();
    }

    if(inputApellido.value === "") {
        isValid = false;
        apellidoError.textContent = "Campo incompleto";
        apellidoError.style.color = "red";
        divInputApellido.appendChild(apellidoError);
    }else if(!palabraExpresion.test(inputApellido.value)){
        isValid = false;
        apellidoError.textContent = "Apellido inválido";
        apellidoError.style.color = "red";
        divInputApellido.appendChild(apellidoError);
    }else {
        apellidoError.remove();
    }

    if(inputEmail.value === "") {
        isValid = false;
        emailError.textContent = "Campo incompleto";
        emailError.style.color = "red";
        divInputEmail.appendChild(emailError);
    }else if(!emailExpresion.test(inputEmail.value)) {
        isValid = false;
        emailError.textContent = "Email inválido";
        emailError.style.color = "red";
        divInputEmail.appendChild(emailError);
    }else {
        emailError.remove();
    }

    if(inputContraseña.value === "") {
        isValid = false;
        contraseñaError.textContent = "Campo incompleto";
        contraseñaError.style.color = "red";
        divInputContraseña.appendChild(contraseñaError);
    }else if(!contraseñaExpresion.test(inputContraseña.value)){
        isValid = false;
        contraseñaError.innerHTML = `
            <ul>
                <p>Debe contener al menos:</p>
                <li>Una letra minúscula</li>
                <li>Una letra mayúscula</li>
                <li>Un carácter especial</li>
                <li>Mínimo de 8 crácteres de longitud</li>
            </ul>
        `;
        contraseñaError.classList.add("errorContraseña");
        divInputContraseña.appendChild(contraseñaError);
    }else {
        contraseñaError.remove();
    }

    if(isValid) {
        registrado();
    }
}

const divForm = document.querySelector(".formRegistro");

function registrado() {
    divForm.innerHTML = "";
    divForm.innerHTML = `
        <h3>¡Tu registro se realizó exitosamente, ${inputNombre.value}!</h3>
        <h4 class="bienvenidaTextoRegistro">Bienvenidx a Libromaniacs</h4>
        <a href="../index.html" class="boton botonVolverInicio" >Ir a Inicio</a>
    `
}

const botonRegistro = document.getElementById("botonRegistro")

botonRegistro.addEventListener("click", validation);

imagenVerContraseña.addEventListener("click", verOcultarContraseña);

function verOcultarContraseña() {
    if(imagenVerContraseña.src.includes("ver.png")) {
        imagenVerContraseña.src = "../img/ocultar.png"
        inputContraseña.type = "text"
    }else{
        imagenVerContraseña.src = "../img/ver.png"
        inputContraseña.type = "password"
    }
}
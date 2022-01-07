let formulario = document.querySelector("form.input-register")
let inputs = document.querySelectorAll("form input")
let imagen =  document.getElementById("avatar")
let valor = imagen.files.length

const expresiones = {
    fullname: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
    userAddress: /^[a-zA-Z0-9\s\_\-]{2,40}$/, // Letras y espacios, pueden llevar acentos.
    city: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{8,40}$/, // 4 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

let campos = {
    fullname: false,
    userAddress: false,
    city: false,
    password: false,
    email: false,
}


const validarFormulario = (e) => {
    switch (e.target.name) {
        case "fullname":
            validarCampo(expresiones.fullname, e.target, "fullname")
        break;
        case "userAddress":
            validarCampo(expresiones.userAddress, e.target, "userAddress")
        break;
        case "city":
            validarCampo(expresiones.city, e.target, "city")
        break;
        case "password":
            validarCampo(expresiones.password, e.target, "password")
        break;
        case "email":
            validarCampo(expresiones.email, e.target, "email")
        break;
    }
}

const validarCampo = (expresiones, input, campo) => {
    if(expresiones.test(input.value)){
        document.getElementById(`${campo}`).style.color = "green"
        document.querySelector(`.grupo__${campo} #input-error-${campo}`).style.display = "none"
        document.querySelector(`.grupo__${campo} .grupo__inputs i`).style.display = "block"
        campos[campo] = true;
        valor = imagen.files.length
    }else{
        document.getElementById(`${campo}`).style.color = "red"
        document.querySelector(`.grupo__${campo} #input-error-${campo}`).classList.add("input-error-activo")
        document.querySelector(`.grupo__${campo} .grupo__inputs i`).style.display = "none"
        document.querySelector(`.grupo__${campo} #input-error-${campo}`).style.display = "block"
        campos[campo] = false;
        valor = imagen.files.length
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);

});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    let terminos = document.getElementById("accept")
    
    if(campos.fullname && campos.userAddress && campos.city && campos.password && campos.email && terminos.checked && valor){
        formulario.submit()
        formulario.reset();
        document.querySelector("#formulario__mensaje-exito").style.display = "block"
        document.querySelector(".formulario__mensaje-error p").style.display = "none"
        document.querySelector(".formulario__mensaje-error-terminos p").style.display = "none"
        setTimeout(() =>{
            document.querySelector("#formulario__mensaje-exito").style.display = "none"
        }, 4000)
    }else if(campos.fullname && campos.userAddress && campos.city && campos.password && campos.email && !valor){
        document.querySelector(".formulario__mensaje-error p").style.display = "none"
        document.querySelector(".formulario__mensaje-error-terminos p").style.display = "none"
        document.querySelector(".formulario__mensaje-error-imagenperfil p").style.display = "block"
    }
    else if(campos.fullname && campos.userAddress && campos.city && campos.password && campos.email && valor && !terminos.checked){
        document.querySelector(".formulario__mensaje-error p").style.display = "none"
        document.querySelector(".formulario__mensaje-error-imagenperfil p").style.display = "none"
        document.querySelector(".formulario__mensaje-error-terminos p").style.display = "block"
    }else{
        document.querySelector(".formulario__mensaje-error p").style.display = "block"
    }
})

// password strength //

const emojies = ['😑','😕','😊','😎','💪'];
const input = document.getElementById('password');
const emoji = document.getElementById('emoji');
const emojiCircle = document.getElementById('emoji-circle');

function onEmoji() {
    emoji.innerHTML = emojies[zxcvbn(input.value).score]
    
}

input.addEventListener('input', onEmoji);

 function eyePass(){
    input.type = input.type === 'password'?'text':'password';
    emoji.innerHTML = input.type === 'text'?'👀':emojies[zxcvbn(input.value).score]
}

emoji.addEventListener('click', eyePass, false)

let formulario = document.querySelector("form.input-login")
    let inputs = document.querySelectorAll("form input")
   
    const expresiones = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^.{1,40}$/, // 4 a 12 digitos.
    }

    const campos = {
        email: false
    }

    const validarFormulario = (e) => {
        switch (e.target.name) {
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
        }else{
            document.getElementById(`${campo}`).style.color = "red"
            document.querySelector(`.grupo__${campo} #input-error-${campo}`).classList.add("input-error-activo")
            document.querySelector(`.grupo__${campo} .grupo__inputs i`).style.display = "none"
            document.querySelector(`.grupo__${campo} #input-error-${campo}`).style.display = "block"
            campos[campo] = false;
        }
    }

    inputs.forEach((input) => {
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    });

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        let terminos = document.getElementById("accept")
        
        if(campos.password && campos.email){
            formulario.submit()
            formulario.reset();
            document.querySelector("#formulario__mensaje-exito").style.display = "block"
            document.querySelector(".formulario__mensaje-error p").style.display = "none"
            setTimeout(() =>{
                document.querySelector("#formulario__mensaje-exito").style.display = "none"
            }, 7000)
        }else{
            document.querySelector(".formulario__mensaje-error p").style.display = "block"
        }
    })

    let passwordInput = document.getElementById('txtPassword'),
    toggle = document.getElementById('btnToggle'),
    icon =  document.getElementById('eyeIcon');

function togglePassword() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    icon.classList.add("fa-eye-slash");
    //toggle.innerHTML = 'hide';
  } else {
    passwordInput.type = 'password';
    icon.classList.remove("fa-eye-slash");
    //toggle.innerHTML = 'show';
  }
}


toggle.addEventListener('click', togglePassword, false);
passwordInput.addEventListener('keyup', checkInput, false);

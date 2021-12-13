

    let formulario = document.querySelector("form.input-register")
    let inputs = document.querySelectorAll("form input")
    let inputFullname = document.getElementById("fullname")
    let inputUserAddress = document.getElementById("userAddress")
    let inputCity = document.getElementById("city")
    let inputEmail = document.getElementById("email")
    let inputPassword = document.getElementById("password")


    const expresiones = {
        fullname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        userAddress: /^[a-zA-Z0-9\s\_\-]{4,16}$/, // Letras y espacios, pueden llevar acentos.
        city: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,

    }
  
    const campos = {

        
    }

    const validarFormulario = (e) => {
        switch (e.target.name) {
            case "fullname":
                if(expresiones.fullname.test(e.target.value)){
                    inputFullname.style.color = "green"
                }else{
                    inputFullname.style.color = "red"
                }
            break;
            case "userAddress":
                if(expresiones.userAddress.test(e.target.value)){
                    inputUserAddress.style.color = "green"
                }else{
                    inputUserAddress.style.color = "red"
                }
            break;
            case "city":
                if(expresiones.city.test(e.target.value)){
                    inputCity.style.color = "green"
                }else{
                    inputCity.style.color = "red"
                }
            break;
            case "password":
                if(expresiones.password.test(e.target.value)){
                    inputFullname.style.color = "green"
                }else{
                    inputFullname.style.color = "red"
                }
            break;
            case "email":
                if(expresiones.email.test(e.target.value)){
                    inputEmail.style.color = "green"
                }else{
                    inputEmail.style.color = "red"
                }
            break;
        }
    }

    inputs.forEach((input) => {
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    });

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
    })

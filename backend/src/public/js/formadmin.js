let formulario = document.querySelector("form")
let inputs = document.querySelectorAll("form input")
let imagen =  document.getElementById("addimages")
let buttom = document.getElementById("button-submit-admin");


const expresiones = {
    productName: /^[a-zA-ZÀ-ÿ\s]{2,100}$/,
    description: /^.{2,255}$/,
    stock: /^([1-9]|[1-9][0-9]|[1-9][0-9][0-9])$/,
    addprice: /^([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9]|[1-9][0-9][0-9][0-9][0-9])$/,
    
}

const campos = {
    productName: false,
    description: false,
    stock: false,
    addprice: false,
    image: false,
}


const validarFormulario = (e) => {
    switch (e.target.name) {
        case "productName":
            validarCampo(expresiones.productName, e.target, "productName")
        break;
        case "description":
            validarCampo(expresiones.description, e.target, "description")
        break;
        case "stock":
            validarCampo(expresiones.stock, e.target, "stock")
        break;
        case "addprice":
            validarCampo(expresiones.addprice, e.target, "addprice")
        break;
        case "addimages":
            let valor = imagen.files.length
            console.log(valor)
            if(valor == 0){
                campos["image"] = false;
            }else{
                campos["image"] = true;
            }
        break;
    }
}

const validarCampo = (expresiones, input, campo) => {
    if(expresiones.test(input.value)){
        document.getElementById(`${campo}`).style.color = "green"
        document.querySelector(`.grupo__${campo} #input-error-${campo}`).style.display = "none"
        campos[campo] = true;
    }else{
        document.getElementById(`${campo}`).style.color = "red"
        document.querySelector(`.grupo__${campo} #input-error-${campo}`).classList.add("input-error-activo")
        document.querySelector(`.grupo__${campo} #input-error-${campo}`).style.display = "block"
        campos[campo] = false;
    }
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

buttom.addEventListener('click', (e) => {
    console.log(campos)
    e.preventDefault();
    if(campos.productName && campos.description && campos.stock && campos.addprice && campos.image){
        formulario.submit()
        formulario.reset();
        document.querySelector(".formulario__mensaje-exito").style.display = "block"
        document.querySelector(".formulario__mensaje-error p").style.display = "none"
        document.querySelector(".formulario__mensaje-error-imagen p").style.display = "none"
        setTimeout(() =>{
            document.querySelector(".formulario__mensaje-exito").style.display = "none"
        }, 7000)
    }else if(campos.productName && campos.description && campos.stock && campos.addprice && !campos.image){
        document.querySelector(".formulario__mensaje-error p").style.display = "none"
        document.querySelector(".formulario__mensaje-error-imagen p").style.display = "block"
    }else{
        document.querySelector(".formulario__mensaje-error p").style.display = "block"
    }
})

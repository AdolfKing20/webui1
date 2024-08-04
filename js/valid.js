
const form = document.getElementById("formaction");
const username = document.getElementById("username");
const password = document.getElementById("password");
const validPassword = document.getElementById("validpassword");

const errorUser = document.getElementById("error")
const errorPass = document.getElementById("errorpass")
const errorValid = document.getElementById("errorvalid")

form.addEventListener("submit", e=>{
    e.preventDefault()
    errorUser.innerHTML = ""
    errorPass.innerHTML = ""
    errorValid.innerHTML = ""

    if(username.value.length < 5){
        error.innerHTML = `El nombre de usuario debe tener al menos 5 caracteres`
    }
    if(password.value.length < 8){
        errorPass.innerHTML = `La contraseña debe tener al menos 8 caracteres`
    }
    if(validPassword.value === password.value){
        errorValid.innerHTML = `La contraseña coinciden`
    } else {
        errorValid.innerHTML = `La contraseña no coincide`
    }
})
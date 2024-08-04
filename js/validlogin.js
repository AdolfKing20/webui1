const username = document.getElementById("username");
const password = document.getElementById("password");
const form = document.getElementById("formaction");
const errorUser = document.getElementById("error")
const errorPass = document.getElementById("errorpass")
const userOk = "adolfking"
const passOk = "12345678"




form.addEventListener("submit", e=>{
    e.preventDefault()
    errorPass.innerHTML = ""
    if(username.value === userOk && password.value === passOk){
        alert("acceso exitoso");
        window.location.href = "../";
    } else {
        errorPass.innerHTML = "Verifica que el usuario o contraseña sea correcta"
    }
})

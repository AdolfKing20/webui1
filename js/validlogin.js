const form = document.getElementById("formaction");





form.addEventListener("submit", e=>{
    e.preventDefault()
const errorPass = document.getElementById("errorpass")
    const username = document.getElementById("username").value
const password = document.getElementById("password").value
const Users = JSON.parse(localStorage.getItem(`users`)) || []
const validUser = Users.find(user => user.username === username && user.password === password)
if(!validUser){
    return errorPass.innerHTML = `usuario o contraseña incorrecta`
}
alert(`Bienvenido ${validUser.username}`)
localStorage.setItem('login_success', JSON.stringify(validUser))
    window.location.href = '../'   



    errorPass.innerHTML = ""
    
})


const formRecuperation = document.getElementById("formrecuperation");

formRecuperation.addEventListener("submit", e => {
    e.preventDefault();
    const errorRec = document.getElementById("errorRec");
    const userRec = document.getElementById("userRec").value;
    const Users = JSON.parse(localStorage.getItem('users')) || [];

    errorRec.innerHTML = "";

    const searchValid = Users.find(user => user.username === userRec);

    if(!searchValid){
        return errorRec.innerHTML = `Usuario no encontrado`;
    }

    alert(`Bien! Tu contraseña es: ${searchValid.password}`);
});
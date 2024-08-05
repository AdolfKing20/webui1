const form = document.getElementById("formaction");





form.addEventListener("submit", e=>{
    e.preventDefault()
    const errorUser = document.getElementById("error")
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

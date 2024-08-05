// aca hago la llamada al localStorage de login
const user = JSON.parse(localStorage.getItem("login_success")) || false

// y verifico si el usuario se logeo o no, en caso de que no, lo redirige a login. de esta manera no le permite acceder a la web
if(!user){
    window.location.href = `./auth/login.html`
}


// funcion basica para eliminar el usuario de localStorage y redirigirlo a login devuelta
const logout = document.querySelector('#logout')

logout.addEventListener('click', ()=>{
    alert('Hasta pronto!')
    localStorage.removeItem('login_success')
    window.location.href = `./auth/login.html`

})
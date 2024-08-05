const form = document.getElementById("formaction");

form.addEventListener("submit", e => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const validPassword = document.getElementById("validpassword").value;

    const errorUser = document.getElementById("error");
    const errorPass = document.getElementById("errorpass");
    const errorValid = document.getElementById("errorvalid");

    errorUser.innerHTML = "";
    errorPass.innerHTML = "";
    errorValid.innerHTML = "";

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const isUserRegistered = Users.find(user => user.username === username);
    
    let isValid = true;

    if(username.length < 5){
        errorUser.innerHTML = `El nombre de usuario debe tener al menos 5 caracteres`;
        isValid = false;
    }
    if(password.length < 8){
        errorPass.innerHTML = `La contraseña debe tener al menos 8 caracteres`;
        isValid = false;
    }
    if(validPassword !== password){
        errorValid.innerHTML = `La contraseña no coincide`;
        isValid = false;
    } else {
        errorValid.innerHTML = `Perfecto`;
    }

    if (isUserRegistered) {
        alert('El usuario ya está registrado!');
        return;
    }

    if (isValid) {
        Users.push({username: username, password: password});
        localStorage.setItem('users', JSON.stringify(Users));
        alert('Registro Exitoso!');
        window.location.href = 'login.html';
    }
});

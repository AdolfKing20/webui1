const form = document.getElementById("formaction");


// creo un evento de tipo submit para el envio de formulario
form.addEventListener("submit", e => {
    // Detengo el reinicio de la pagina web
    e.preventDefault();

    //llamo a los inputs y obtengo su valor
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const validPassword = document.getElementById("validpassword").value;
    // Esto es para cuando tira un error.
    const errorUser = document.getElementById("error");
    const errorPass = document.getElementById("errorpass");
    const errorValid = document.getElementById("errorvalid");
    // cada que todo salga bien, el error desaparesca y vuelva a su estado inicial
    errorUser.innerHTML = "";
    errorPass.innerHTML = "";
    errorValid.innerHTML = "";
    //uso localStorage para guardar a el usuario que se esta registrando
    const Users = JSON.parse(localStorage.getItem('users')) || [];

    //aca se verifica si el usuario esta registrado o no.
    const isUserRegistered = Users.find(user => user.username === username);
    // valida los campos
    let isValid = true;
    //aca agrege un if para hacer un par de validaciones, en la cual verifica que todo este bien y si no lo esta que lance un error
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

    // un mensaje de error, en caso de que ese usuario ya exista en el localstorage

    if (isUserRegistered) {
        alert('El usuario ya está registrado!');
        return;
    }

    // y para finalizar verifica que todo este valido, en caso de que lo este tira registro exitoso, guarda los datos en el localStorage y lo redirecciona al login

    if (isValid) {
        Users.push({username: username, password: password});
        localStorage.setItem('users', JSON.stringify(Users));
        alert('Registro Exitoso!');
        window.location.href = 'login.html';
    }
});

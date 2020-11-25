window.addEventListener('load', function() {
    let form = document.querySelector('.form');
    let errores = [];
    form.addEventListener('submit', function(event) {
        let name = document.querySelector('#form__name');
        trimmedName = name.value.trim();
        surname = document.querySelector('#form__surname');
        trimmedSurname = surname.value.trim();
        password = document.querySelector('#form__password');
        trimmedPassword = password.value.trim();
        email = document.querySelector('#form__email');
        trimmedEmail = email.value.trim();
        if(trimmedPassword.length < 4) {
            errores.push('Contraseña muy corta!');
        }
        if(trimmedName == null || trimmedName == "") {
            errores.push('El nombre no puede estar vacío!');
        }
        if(trimmedSurname == null || trimmedSurname == "") {
            errores.push('El apellido no puede estar vacío!');
        }
        if(trimmedEmail  == null || trimmedSurname == "") {
            errores.push('El Email no puede estar vacío!');
        }
        if(errores.length > 0) {
            event.preventDefault();
            let ulErrores = document.querySelector('.errores')
            for(let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
            }
        }
    })
})
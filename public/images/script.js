window.addEventListener('load', function() {
    let form = document.querySelector('.form');
    let surname = document.querySelector('#form__surname');
    let password = document.querySelector('#form__password');
    let email = document.querySelector('#form__email');
    let errores = [];
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        checkInputs();
    })
    function checkInputs() {
        let usernameValue = surname.value.trim();
        let emailValue = email.value.trim();
        if(usernameValue == "") {
            errores.push('El campo no puede estar vacío!');
        }
        if(!isEmail(emailValue)) {
            errores.push('Ingrese un mail válido!');
        }
        alert(errores)
    }
    function isEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
})
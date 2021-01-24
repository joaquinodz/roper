window.addEventListener('load', function() {
    let add = document.getElementById('add');
    let carrito = document.getElementById('carrito');
    let precio = document.getElementById('precio');
    let eliminar = document.getElementById('elim');
    if(localStorage.getItem('carrito') === null) {
        eliminar.style.display = 'none';
    }
    eliminar.addEventListener('click', function(e) {
        if(localStorage.getItem('carrito') === null) {
            e.preventDefault();
        } else {
            localStorage.removeItem('carrito');
        }
    })
    function loadStorage() {
        let storage = localStorage.getItem('carrito');
        if(storage == null) {
            storage = [];
        } else {
            storage = JSON.parse(storage);
        }
        return storage;
    }
    let storage = loadStorage();
    let suma = [];
    let sumaFinal = [];
    storage.forEach(id => {
        suma.push(id[2]);
        add.innerHTML += `
        <a href="/productos/${id[3]}" id="eeee">
        <img src="${id[0]}" alt="imagen de producto">
        <div class="texto-carrito">
        <p>${id[1]}</p>
        <p>$ ${id[2]}</p>
        </div>
        </a>`
    });
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    suma.forEach(element => {
        let a = parseInt(element);
        sumaFinal.push(a);
    });
    sumaFinal = sumaFinal.reduce(reducer)
    if(sumaFinal) {
        precio.innerHTML = `Total: $${sumaFinal}`;
    } else {
        precio.innerHTML = 'Total: $0';
    }
    console.log('e');
})
window.addEventListener('load', function() {
    let add = document.getElementById('add');
    let carrito = document.getElementById('carrito');
    let precio = document.getElementById('precio');
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
    storage.forEach(id => {
        add.innerHTML += `
        <a href="/productos/${id[3]}">
        <img src="${id[0]}" alt="imagen de producto">
        <div class="texto-carrito">
            <p>${id[1]}</p>
            <p>$ ${id[2]}</p>
        </div>
        </a>`
        
    });
    console.log('e');
})
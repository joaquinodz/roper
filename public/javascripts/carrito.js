window.addEventListener('load', function() {
    let add = document.getElementById('add');
    let carrito = document.getElementById('carrito');
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
        <img src="${id}" alt="">
        <div class="texto-carrito">
            <p>a</p>
            <p>$200</p>
        </div>`
    });
    console.log('e');
})
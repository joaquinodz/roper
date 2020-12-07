window.addEventListener('load', function() {
    const params = window.location.pathname.split('/');
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
        function addCarrito(id,event) {
            let storage = loadStorage();
            if(!storage.includes(id)) {
                let newStorage = JSON.stringify([...storage, id]);
                localStorage.setItem('carrito',newStorage);
                event.target.innerHTML = 'Remover del Carrito';
                console.log('agregado!');
            } else {
                storage = storage.filter(idMovie => idMovie != id);
                localStorage.setItem('carrito',JSON.stringify(storage));
                event.target.innerHTML = 'Agregar al Carrito';
                console.log('removido!');
            }
        }
        let storage = loadStorage();
        let search = storage.filter(id => id == params[2]);
        if(search != "") {
            carrito.innerHTML = 'Remover del Carrito';
        } else {
            carrito.innerHTML = 'Agregar al Carrito';
        }
        carrito.addEventListener('click', function(e) {
            e.preventDefault();
            addCarrito(params[2],e);
        })
})
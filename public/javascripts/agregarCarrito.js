window.addEventListener('load', function() {
    const params = window.location.pathname.split('/');
    let carrito = document.getElementById('carrito');
    let a = [];
    let url = document.querySelector('.item-product').src;
    let name = document.querySelector('h2').innerHTML;
    let price = document.getElementById('price').innerHTML;
    console.log(name);
    console.log(price);
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
        if(!storage.includes(id[3])) {
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
    carrito.addEventListener('click', function(e) {
        e.preventDefault();
        a.push(url);
        a.push(name);
        a.push(price);
        a.push(params[2])
        addCarrito(a,e);
    })
})
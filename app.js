let express = require('express');
let app = express();

app.listen(3000, (req, res) => {
    console.log("funcando");
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/register.html');
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
})

app.get('/productos', (req, res) => {
    res.sendFile(__dirname + '/productos.html');
})

app.get('/carrito', (req, res) => {
    res.sendFile(__dirname + '/carrito.html');
})
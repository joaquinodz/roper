let express = require('express');
let app = express();

app.listen(3000, (req, res) => {
    console.log("funcando");
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/register.html', (req, res) => {
    res.sendFile(__dirname + '/register.html');
})

app.get('/login.html', (req, res) => {
    res.sendFile(__dirname + '/login.html');
})

app.get('/productos.html', (req, res) => {
    res.sendFile(__dirname + '/productos.html');
})

app.get('/carrito.html', (req, res) => {
    res.sendFile(__dirname + '/carrito.html');
})
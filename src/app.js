const express = require('express');
const app = express();
const path = require('path');

// set template engine.
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// set current port.
app.set('port', 3000);

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/register', (req, res) => {
    res.render('users/register');
});

app.get('/login', (req, res) => {
    res.render('users/login');
});

app.get('/productos', (req, res) => {
    res.render('products/listado');
});

app.get('/carrito', (req, res) => {
    res.render('products/carrito');
});

app.listen(app.get('port'), (req, res) => {
    console.log("Servidor iniciado en el puerto", app.get('port'));
});
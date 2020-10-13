const express = require('express');
const app = express();
const path = require('path');

// set template engine.
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// set current port.
app.set('port', 3000);

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/', require('./routes/index'));
app.use('/productos', require('./routes/products'));
app.use('/users', require('./routes/users'));

app.listen(app.get('port'), (req, res) => {
    console.log("Servidor iniciado en el puerto", app.get('port'));
});
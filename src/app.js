const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors')
const app = express();
const methodOverride = require('method-override');
const session = require('express-session');
const cookie = require('cookie-parser');
const midSession = require('./middlewares/session');
const log = require('./middlewares/log')
// Configuracion del motor de vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Configuracion de los middlewares a nivel de aplicacion.
app.use(session({
  secret: 'roper',
  resave: false,
  saveUninitialized: true
})); 
app.use(logger('dev'));
app.use(midSession);
app.use(log);
app.use(cors());
app.use(cookie());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(methodOverride('_method'));

// Declaracion de rutas.
app.use('/', require('./routes/index'));
app.use('/productos', require('./routes/products'));
app.use('/user', require('./routes/users'));
// Middleware (a nivel de aplicacion) que maneja los errores 404.
app.use((req, res, next) => next(createError(404)));

// Middleware (a nivel de aplicacion) que maneja TODOS los errores.
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

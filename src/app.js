const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const methodOverride = require('method-override');
const app = express();

// Configuracion del motor de vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Configuracion de los middlewares a nivel de aplicacion.
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
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

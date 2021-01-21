const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');
const path = require('path');

// Multer config.
const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname + '../../../public/images/productos'))
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })  
var upload = multer({storage: storage});

// Route declarations.
router.get('/', controller.listarProductos)

router.get('/create', controller.crearProducto);
router.post('/create', upload.single("image"), controller.generarProducto)

router.get('/:id', controller.obtenerProductos);
router.delete('/:id/eliminar', controller.eliminarProducto);
router.get('/:id/editar', controller.editarProducto);
router.put('/:id/modificar', controller.modificarProducto);

router.get('/categoria/:categoria', controller.listarProductosCategoria)

module.exports = router;
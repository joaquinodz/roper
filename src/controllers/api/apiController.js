<<<<<<< HEAD
let db = require("../../../database/models")
=======
let db = require("../../database/models")
>>>>>>> af572a5858aed64aa7095c3a3678fe5abf4c582e
const fs = require('fs');
const { body } = require('express-validator');
const path = require('path');
const { json } = require('express');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

exports.obtenerProductos = async (req, res) => {
<<<<<<< HEAD
    try {
        let products = await db.Productos.findAll({
            include: ['categoria', 'condicion', 'color', 'talle', 'users']
        })
        if(products.length > 0) {
            response = {
                metadata: {
                    status: 200,
                    length: products.length
                },
                products
            }
        } else {
            response = {
                metadata: {
                    status: 204,
                    length: products.length
                }
            }
        }
        res.json({response})
=======
    let response;
    try {
        const productos = await db.Productos.findAll({
            include: ['categoria', 'condicion', 'color', 'talle', 'users']
        })
        
        if (search.length > 0) {
            // Creamos la estructura de la respuesta
            response = {
                metadata: {
                    status: 200,
                    resultCount: search.length
                },
                productos
            }
        } else {
            // Creamos la estructura de la respuesta
            response = {
                metadata: {
                    status: 204,
                    resultCount: 0
                }
            }
        }

        // Mandamos la respuesta
        return res.status(response.metadata.status).json(response);

>>>>>>> af572a5858aed64aa7095c3a3678fe5abf4c582e
    } catch(error) {
        console.log(error);
    }
};
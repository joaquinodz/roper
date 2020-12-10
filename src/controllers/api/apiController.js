let db = require("../../database/models")
const fs = require('fs');
const { body } = require('express-validator');
const path = require('path');
const { json } = require('express');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

exports.obtenerProductos = async (req, res) => {
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

    } catch(error) {
        console.log(error);
    }
};
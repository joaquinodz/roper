let db = require("../../database/models")
const fs = require('fs');
const { body } = require('express-validator');
const path = require('path');
const { json } = require('express');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

exports.obtenerProductos = async (req, res) => {
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
    } catch(error) {
        console.log(error);
    }
};
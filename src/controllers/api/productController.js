let db = require("../../database/models")

exports.obtenerProductos = async (req, res) => {
    try {
        // Get ALL users from the database.
        let products = await db.Productos.findAll({
            include: ['categoria', 'condicion', 'color', 'talle', 'users']
        })

        // Craft the response structure.
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

        // Send the structured response object to the client.
        return res.json({response})
    } catch(error) {
        console.log(error);
    }
};

exports.obtenerProductoPorID = async (req, res) => {
    try {
        // Get requested user ID
        const id = req.params.id;

        // Get ALL users from the database.
        let product = await db.Productos.findByPk(id, { include: { all: true } });

        // Return an URL to where the profile picture is stored.
        product.image = `/images/productos/${product.image}`;

        // Send the database query result to the client.
        return res.json(product);
    } catch (error) {
        console.error(error);
    }
};
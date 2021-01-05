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
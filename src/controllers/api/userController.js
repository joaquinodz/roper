let db = require("../../database/models")

exports.obtenerUsuarios = async (req, res) => {
    try {
        // Get ALL users from the database.
        let users = await db.Users.findAll({ include: { all: true } });

        // Craft the response structure.
        if(users.length > 0) {
            response = {
                metadata: {
                    status: 200,
                    length: users.length
                },
                users
            }
        } else {
            response = {
                metadata: {
                    status: 204,
                    length: users.length
                }
            }
        }

        // Send the structured response object to the client.
        return res.json(response);
    } catch(error) {
        console.log(error);
    }
};
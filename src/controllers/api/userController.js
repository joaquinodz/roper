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

exports.obtenerUsuarioPorID = async (req, res) => {
    try {
        // Get requested user ID
        const id = req.params.id;

        // Get ALL users from the database.
        let users = await db.Users.findByPk(id, { include: { all: true } });
        
        // Delete property `pw_hash` from the result for security reasons.
        // Using the `delete` key doesn't work in this case apparently.
        users.pw_hash = undefined;

        // Return an URL to where the profile picture is stored.
        users.image = `/images/users/${users.image}`;

        // Send the database query result to the client.
        return res.json(users);
    } catch (error) {
        console.error(error);
    }
};
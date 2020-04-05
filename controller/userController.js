const models = require('../models');


module.exports = {
    v1: {
        getAllUsers: getAllUsers,
        getUserById: getUserById,
        createUser: createUser,
        updateUser: updateUser,
        deleteUser: deleteUser,

    }
};

/**
 * Retrieve all users
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function getAllUsers(req, res, next) {
    res.status(200).send("HOLA MUNDO");
    models.User.findAll({
        attributes: ['uid'],
        include: [{
            model: models.Profile,

            atrributes: ['pid', 'nombre'],
        }]
    }).then((users) => {
        res.status(200).send(users)
    }).catch(() => {
        console.log("Algo Fallo");
    });
}
/**
 * Retrieve all users
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function getUserById(req, res) {
    models.User.findByPk(req.params.id).then((user) => {
        res.send(user);
    }).catch((err) => {
        res.send(err);
    })
}
/**
 * Retrieve all users
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function createUser(req, res) {
    models.User.create({
        name: req.body.name,
        lastName: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        profileId: req.body.profileid,

    }).then(() => {
        res.status(200).send("USER CREATED"); //FIXME Revisar esto por que la respuesta no deberia ser un string
    }).catch((err) => {
        console.log(err);
    })
}

/**
 * Retrieve all users
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function updateUser(req, res) {
    models.User.update({
        name: req.body.name,
        lastName: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        profileId: req.body.profileid,
    }).then((data) => {
        res.status(200).send("USER UPDATE"); //FIXME MODIFICAR LA RESPUESTA
    }).catch((err) => {
        res.send(err);  //FIXME MODIFICAR LA RESPUESTA
    })
}
/**
 * Retrieve all users
 * @param {Object} req - http.ServerRequest
 * @param {Object} res - http.ServerResponse
 */
function deleteUser(req, res) {
    models.User.findByPk(req.params.id).then((user) => {
        if (user) {
            user.destroy().then(() => {
                res.status(200).send("user destroyed");
            })
        }else{
            res.status(404).send("user id does't exist");
        }
    }).catch((err) => {
        res.send(err);
    })
}


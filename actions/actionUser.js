const Joi = require('joi');
var empty = require('is-empty');
module.exports = {
    v1: {

        validateBodyPost: validateBodyPost,
        validateBodyPut: validateBodyPut,
        validateId: validateId,

    }
}

function validateBodyPost(req, res, next) {
        const schema = Joi.object().keys({
        name: Joi.string().required().min(4),
        password: Joi.string().required().min(6),
        lastname: Joi.string().required(),
        email: Joi.string().required().email(),
        ProfileId: Joi.number().positive().integer().required()
    });
    const data = req.body;
    Joi.validate(data, schema, (err, value) => {
        if (err) {
            res.status(422).json({
                status: "error",
                message: "Formato de parametros invalido",
                data: data
            });

        } else {
            next();
        }
    });
}
/**
* @param {Object} req
* @param {Object} res
* @param {*} next
* preguntar por modificaciones desde el cliente //FIXME 
*/
function validateBodyPut(req, res, next) {
    const schema = Joi.object.keys({
        name: Joi.string().required().min(4),
        password: Joi.string().required().min(6),
        lastname: Joi.string().required().min(4),
        email: Joi.string().required().email(),
        ProfileId: Joi.number().positive().integer().required()
    });
    const data = req.body;
    Joi.validate(data, schema, (err, value) => {
        if (err) {
            res.status(422).json({
                status: "error",
                message: "Formato de parametros invalido",
                data: data
            });

        } else {
            next();
        }
    });
}
/**
* Validates the id received from the params
* @param {Object} req 
* @param {Object} res 
* @param {*} next 
*/
function validateId(req, res, next) {
    const schema = Joi.object().keys({
        userId: Joi.number().positive().integer().required()
    });
    const data = req.body;
    Joi.validate(data, schema, (err) => {
        if (err) {
            res.status(422).json({
                status: 'error',
                message: 'Invalid ID',
                data: data
            })
        } else {
            next();
        }
    })

}
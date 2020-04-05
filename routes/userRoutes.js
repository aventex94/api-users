const express = require('express');
const userRoutes = express.Router();
const userController = require('../controller/userController')
const validateUser = require('../actions/actionUser')
const config = require('../core/config')
const securityController = require('../controller/securityController');
const basePath = config.basePath + '/users';

userRoutes.post(basePath + '/login',securityController.v1.authenticate);

userRoutes.get(basePath,securityController.v1.validate,userController.v1.getAllUsers); 

userRoutes.get(basePath + '/:id',securityController.v1.validate,userController.v1.getUserById);

userRoutes.post(basePath + '/create',validateUser.v1.validateBodyPost,securityController.v1.validate,userController.v1.createUser);

userRoutes.put(basePath + '/update/:id',validateUser.v1.validateBodyPut,securityController.v1.validate,userController.v1.updateUser);

userRoutes.delete(basePath + '/delete',validateUser.v1.validateId,securityController.v1.validate,userController.v1.deleteUser);






module.exports = userRoutes;
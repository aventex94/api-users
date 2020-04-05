const express = require('express');
const comentarioRoutes = express.Router();
const config = require('../core/config')
const basePath = config.basePath + '/comentarios';
const comentarioController = require('../controller/comentarioController');

comentarioRoutes.post(basePath,comentarioController.v1.createComentario);

module.exports = comentarioRoutes;
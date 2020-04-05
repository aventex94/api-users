const express = require('express');
const publicacionRouter = express.Router();
const publicacionController = require('../controller/publicacionController')
const config = require('../core/config')
const basePath = config.basePath + '/publicaciones';


publicacionRouter.get(basePath,publicacionController.v1.getAllPublicaciones);
publicacionRouter.post(basePath+'/create',publicacionController.v1.createPublicacion);



module.exports = publicacionRouter;
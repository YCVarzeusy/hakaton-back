var router = require('express').Router();

//exportasiones
var generalRoutes = require('./generals');


//Segmentacion de rutas
router.use('/', generalRoutes);


module.exports = router;
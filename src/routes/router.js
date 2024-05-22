var router = require('express').Router();

//exportasiones
var generalRoutes = require('./generals');
var userRoutes = require('./users');
var fighterRoutes = require('./figthers');


//Segmentacion de rutas
router.use('/', generalRoutes);
router.use('/user', userRoutes);
router.use('/fighter', fighterRoutes);


module.exports = router;
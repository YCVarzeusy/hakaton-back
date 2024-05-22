const router = require("express").Router();
const figthersController = require('../controllers/figthersController');
const techniqueController = require('../controllers/techniqueController');


router.get("/", (req, res)=> figthersController.listFighters(req, res));

router.get("/:id", (req, res)=> figthersController.ReadFighters(req, res));

router.get("/level/:id", (req, res)=> figthersController.listLevelFighter(req, res));

router.get("/technique", (req, res)=> techniqueController.listTechinique(req, res));

module.exports = router
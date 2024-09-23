const router = require("express").Router();
const figthersController = require('../controllers/figthersController');
const techniqueController = require('../controllers/techniqueController');
const levelController = require('../controllers/levelController');


router.get("/", (req, res)=> figthersController.listFighters(req, res));

router.get("/technique", (req, res)=> techniqueController.listTechinique(req, res));

router.get("/category", (req, res)=> levelController.categoryList(req, res));

router.get("/level/:id", (req, res)=> levelController.listLevelByIdFighter(req, res));

router.post("/newlevel/:id", (req, res)=> levelController.insertLevelToFighter(req, res));

router.post("/level/:id", (req, res)=> levelController.updateLevelToFighter(req, res));

router.get("/:id", (req, res)=> figthersController.ReadFighters(req, res));

module.exports = router
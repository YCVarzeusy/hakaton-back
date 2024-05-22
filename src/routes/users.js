const router = require("express").Router();
const userController = require('../controllers/userController');


router.post("/signin", (req, res)=> userController.signin(req, res));

module.exports = router
const router = require("express").Router();
const userController = require('../controllers/userController');


router.post("/signin", (req, res)=> userController.signin(req, res));

router.get("/getsession", (req, res)=> userController.readUserSession(req, res));

router.post("/logout", (req, res)=> userController.LogOutSession(req, res));


module.exports = router
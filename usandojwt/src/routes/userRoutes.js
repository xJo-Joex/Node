const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const verifiedToken = require('../middlewares/userVerified')

router.get("/admin",verifiedToken.verifiedToken, userController.getAdmin);
router.post("/login", userController.login);
router.post("/register", userController.register);

module.exports = router;

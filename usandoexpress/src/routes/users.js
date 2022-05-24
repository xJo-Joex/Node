const { Router } = require("express");
const userControler = require("../controler/usersControler");
const router = Router();

router.get("/all", userControler.getAllUsers);
router.get("/create", userControler.getCreateUser);
router.get("/delete/:id", userControler.getDeleleUser);
router.get("/update/:id", userControler.getUpdateUser);

router.post("/create", userControler.createUser);
router.post("/update/:id", userControler.updateUser);
router.post("/delete/:id", userControler.deleleUser);

module.exports = router;

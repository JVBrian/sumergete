const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");

router.post("/", userCtrl.register);

module.exports = router;

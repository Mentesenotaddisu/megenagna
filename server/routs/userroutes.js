const express = require("express");
const authcontroller = require("./../controllers/authcontroller");
const router = express.Router();

router.route("/signup").post(authcontroller.signup);

module.exports = router;

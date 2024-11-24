const express = require("express");
const router = express.Router();
const eventscontroller = require("./../controllers/eventscontroller");

router.route("/").get(eventscontroller.getallevents);
router.route("/").post(eventscontroller.Createevents);

module.exports = router;

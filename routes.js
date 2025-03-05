const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", controller.getLandingPage);
router.get("/note", controller.getNoteDetails);
router.get("/note-edit", controller.getNoteEdit);

module.exports = router;

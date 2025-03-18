const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", controller.getLandingPage);
router.get("/note-edit", controller.getNoteEdit);
router.get("/delete/:id", controller.getDelete);
router.post("/note-edit", controller.postForm);
module.exports = router;

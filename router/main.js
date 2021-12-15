const express = require("express");
const router = express.Router();
const { main, about } = require("../controllers/mainController");

router.get("/", main);
router.get("/about", about);


module.exports = router;
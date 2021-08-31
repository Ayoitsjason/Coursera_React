const express = require("express");
const ownersController = require("../controllers/ownersController.js");
const router = express.Router();

router.post("/register", ownersController.createOwner);
router.post("/login", ownersController.loginOwner);

module.exports = router;

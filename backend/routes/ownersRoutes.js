const express = require("express");
const ownersController = require("../controllers/ownersController.js");
const router = express.Router();

router.post("/register", ownersController.createOwner);
router.post("/login", ownersController.loginOwner);
router.post("/addguests", ownersController.addGuests);
router.delete("/deleteguests", ownersController.deleteGuests);
router.get("/waitlist", ownersController.getWaitlist);
router.post("/leavereview", ownersController.leaveReview);

module.exports = router;

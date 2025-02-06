
const express = require("express");
const authenticateUser = require("../middleware/authenticateUser");
const attemptController = require("../controllers/attemptController");

const router = express.Router();


router.post("/submit", authenticateUser, attemptController.createAttempt);


router.get("/", authenticateUser, attemptController.getAttemptsByUserId);

module.exports = router;

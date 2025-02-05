// routes/attemptRoutes.js
{/*const express = require("express");
const Attempt = require("../models/attempt");

const router = express.Router();

// ✅ Store a new quiz attempt
router.post("/submit", async (req, res) => {
  try {
    const { userId, quizId, result } = req.body;

    // Validate the incoming data
    if (!userId || !quizId || !result) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Create a new attempt and save to the database
    const attempt = new Attempt({ userId, quizId, result });
    await attempt.save();

    res.status(201).json({ message: "Attempt recorded", attempt });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// ✅ Get quiz attempts for a specific user
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    // Find attempts related to the userId
    const attempts = await Attempt.find({ userId });
    res.json(attempts);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;*/}
// routes/attemptRoutes.js
// routes/attemptRoutes.js
const express = require("express");
const authenticateUser = require("../middleware/authenticateUser"); // Import your existing middleware
const attemptController = require("../controllers/attemptController");

const router = express.Router();

// ✅ Store a new quiz attempt
router.post("/submit", authenticateUser, attemptController.createAttempt);

// ✅ Get quiz attempts for a specific user
router.get("/", authenticateUser, attemptController.getAttemptsByUserId);

module.exports = router;

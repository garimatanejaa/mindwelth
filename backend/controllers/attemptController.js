// controllers/attemptController.js
// controllers/attemptController.js
const Attempt = require("../models/attempt");

// Store a new quiz attempt
exports.createAttempt = async (req, res) => {
  try {
    const { quizId, result, date } = req.body;
    const userId = req.userId;  // The userId is now automatically attached to the request object

    if (!quizId || !result) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Create and save the attempt
    const attempt = new Attempt({ userId, quizId, result, date: date ? new Date(date) : new Date(), });
    await attempt.save();

    res.status(201).json({ message: "Attempt recorded", attempt });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

// Get quiz attempts for a specific user
exports.getAttemptsByUserId = async (req, res) => {
  try {
    const userId = req.userId;  // The userId is extracted from the middleware

    const attempts = await Attempt.find({ userId }).sort({ date: -1 }) // Sort by latest date
    .limit(5);

    if (!attempts.length) {
      return res.status(404).json({ message: "No attempts found" });
    }

    res.json(attempts);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

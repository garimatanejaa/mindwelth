
const Attempt = require("../models/attempt");


exports.createAttempt = async (req, res) => {
  try {
    const { quizId, result, date } = req.body;
    const userId = req.userId; 

    if (!quizId || !result) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const attempt = new Attempt({ userId, quizId, result, date: date ? new Date(date) : new Date(), });
    await attempt.save();

    res.status(201).json({ message: "Attempt recorded", attempt });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

exports.getAttemptsByUserId = async (req, res) => {
  try {
    const userId = req.userId;  

    const attempts = await Attempt.find({ userId }).sort({ date: -1 })
    .limit(5);

    if (!attempts.length) {
      return res.status(404).json({ message: "No attempts found" });
    }

    res.json(attempts);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

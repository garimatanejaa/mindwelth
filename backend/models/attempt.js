// models/attempt.js
const mongoose = require("mongoose");

// Define schema for storing quiz attempts
const attemptSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the User who made the attempt
  quizId: { type: mongoose.Schema.Types.ObjectId, required: true }, // Reference to the quiz being attempted
  result: { type: String, required: true }, // Result of the attempt (could be a score or pass/fail)
  date: { type: Date, default: Date.now } // Timestamp of when the attempt was made
});

// Create the Attempt model
const Attempt = mongoose.model("Attempt", attemptSchema);

module.exports = Attempt;


const mongoose = require("mongoose");
const attemptSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
  quizId: { type: String, required: true }, 
  result: { type: String, required: true }, 
  date: { type: Date, default: Date.now } 
});


const Attempt = mongoose.model("Attempt", attemptSchema);

module.exports = Attempt;

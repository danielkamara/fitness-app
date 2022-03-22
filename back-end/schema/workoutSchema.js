const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  pushUps: { type: String, required: true, unique: true },
  sitUps: { type: String, required: true, unique: true },
});

const workoutModel = mongoose.model("Workout", workoutSchema);

module.exports = workoutModel;

const { Schema, model } = require("mongoose");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedWorkouts` array in User.js
const workoutSchema = new Schema({
  bodyPart: {
    type: String,
  },

  equipment: {
    type: String,
    required: true,
  },
  gifUrl: {
    type: String,
  },
  // saved workout id from workouts
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  target: {
    type: String,
  },
});
const Workout = model("Workout", workoutSchema);

module.exports = Workout;

const mongoose = require("mongoose");
const { Schema } = require("mongoose");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedWorkouts` array in User.js
const workoutSchema = new Schema({
  bodyParts: {
    type: String,
  },

  equipment: {
    type: String,
    required: true,
  },
  // saved workout id from workouts
  workoutId: {
    type: String,
    required: true,
  },
  target: {
    type: String,
  },
  gifUrl: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = workoutSchema;

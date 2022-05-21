const mongoose = require("mongoose");
const Exercise = require("./Exercise");

const { Schema } = mongoose;

const workoutSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
      unique: false,
    },
    exercises: [Exercise.schema]
  });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

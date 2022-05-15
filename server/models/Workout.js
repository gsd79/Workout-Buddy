const mongoose = require("mongoose");
const Exercise = require("./Exercise");

const { Schema } = mongoose;

const workoutSchema = new Schema({
  workoutDate: {
    type: Date,
    default: Date.now,
  },
  exercises: {
    type: Schema.Types.ObjectId,
    ref: "Exercise",
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

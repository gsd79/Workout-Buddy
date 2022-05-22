const mongoose = require('mongoose');
const Exercise = require('./Exercise');

const { Schema } = mongoose;

const workoutSchema = new Schema(
  {
<<<<<<< HEAD
  name: {
    type: String,
    required: false,
    unique: false,
  },
  exercises: [Exercise.schema]
}
);
=======
    name: {
      type: String,
      required: false,
      unique: false,
    },
    exercises: [Exercise.schema]
  });
>>>>>>> d9c376c1afe6ae0e49ae5e60e79b2b4c379cadf6

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
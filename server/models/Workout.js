const mongoose = require('mongoose');

const { Schema } = mongoose;

const workoutSchema = new Schema(
  {
  name: {
    type: String,
    required: true,
    unique: true,
  },
  workouts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Exercise'
    }
  ]
}
);

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
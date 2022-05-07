const mongoose = require('mongoose');

const { Schema } = mongoose;

const workoutSchema = new Schema({
  workouts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Workout'
    }
  ]
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
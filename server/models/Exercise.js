const mongoose = require('mongoose');

const { Schema } = mongoose;

const exerciseSchema = new Schema({
  workouts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Workout'
    }
  ]
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
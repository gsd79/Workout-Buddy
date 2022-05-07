//WORKOUT PLAN?? COLLECTIONS OF WORKOUTS (EASY MEDIUM HARD)
//This houses the Exercises by category (filtered by equpiment, target etc)
const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
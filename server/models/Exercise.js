const mongoose = require('mongoose');
const { Schema } = require("mongoose");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedWorkouts` array in User.js
const exerciseSchema = new Schema({
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
  // could maybe use this as filter 
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
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  }
});
const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;

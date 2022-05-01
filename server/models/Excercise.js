const mongoose = require('mongoose');

const { Schema } = mongoose;

const workoutSchema = new Schema({})


const Excerise = mongoose.model('excerise', workoutSchema);
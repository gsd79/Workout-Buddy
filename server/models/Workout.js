const mongoose = require('mongoose');
//how to use this in front end?
//do we need to set up
const { Schema } = mongoose;

const workOutSchema = new Schema({
  workOutType: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Excercise'
    }
  ]
});

const workOut = mongoose.model('workOut', orderSchema);

module.exports = workOut;
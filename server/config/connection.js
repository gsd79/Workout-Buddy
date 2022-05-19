const mongoose = require("mongoose");

<<<<<<< HEAD
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workout-buddy",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
=======


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout-bud', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
>>>>>>> d9c376c1afe6ae0e49ae5e60e79b2b4c379cadf6

module.exports = mongoose.connection;

const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://E-cano2033:Rb4oM7JbaJq8e5Bq@cluster0.rh05c.mongodb.net/workout-buddy-db?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;

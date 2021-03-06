const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const Workout = require("./Workout");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,

      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    // set savedWorkouts to be an array of data that adheres to the workoutSchema
    savedWorkouts: [Workout.schema]
    //TODOhydration/nutrition goes here
  },

  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `workoutCount` with the number of saved workouts we have
userSchema.virtual("workoutCount").get(function () {
  return this.savedWorkouts.length;
});
const User = model("User", userSchema);

module.exports = User;

const { AuthenticationError } = require("apollo-server-express");
const { User, Exercise, Workout, Category } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },

    exerciseByName: async (parent, {name}) => {
      if (name) {
        const exerciseData = await Exercise.findOne({name})
    
        return exerciseData;
      }
    },

    exerciseByOther: async (parent, {equipment, bodyPart, target}) => {
      if (equipment) {
        const exerciseData = await Exercise.find({equipment})
    
        return exerciseData;
      }
      if (bodyPart) {
        const exerciseData = await Exercise.find({bodyPart})
    
        return exerciseData;
      }
      if (target) {
        const exerciseData = await Exercise.find({target})
    
        return exerciseData;
      }
    },

    exercises: async () => {
      return await Exercise.find();
    },

    user: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('savedWorkouts')
    
        return userData;
      }
    
      throw new AuthenticationError('No user with that ID');
    },

    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('savedWorkouts');
    },

    workouts: async (parent, {username}) => {
      const userData = await User.findOne({username})
          .select('-__v -password')
          .populate('savedWorkouts')
      return userData;
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    addWorkout: async (parent, args, context) => {
      if (context.user) {
        const workout = await Workout.create({ ...args });

        await User.findByIdAndUpdate(
          { _id: context.user._id }, 
          { $addToSet: { savedWorkouts: workout } },
          { new: true }
          ).populate('savedWorkouts');;

        return workout;
      }

      throw new AuthenticationError('Not logged in');
    },

    removeWorkout: async (parent, args, context) => {
      return this
    },

    addExerciseToWorkout: async (parent, args, context) => {
      console.log(context);
      if (context.user) {
        const workout = await Workout.findOne({ exercises });

        await User.findByIdAndUpdate(context.user._id, { $push: { workouts: workout } });

        return workout;
      }

      throw new AuthenticationError('Not logged in');
    },

    removeExercise: async (parent, args, context) => {
      return this
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;

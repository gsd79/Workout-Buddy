const { AuthenticationError } = require("apollo-server-express");
const { User, Exercise, Workout, Category } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    exercise: async () => {
      return await Exercise.findone({ name });
    },
    exercises: async () => {
      return await Exercise.find();
    },
    // user: async (parent, args, context) => {
    //   if (context.user) {
    //     const user = await User.findById(context.user._id).populate({
    //       path: 'workouts.exercise',
    //       populate: 'category'
    //     });
    //     return user;
    //   }

    //   throw new AuthenticationError('Not logged in');
    // },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('workouts');
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('workouts');
    },
    workouts: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Exercise.find(params).populate('category');
    },
    // workout: async (parent, { _id }) => {
    //   return await Exercise.findById(_id).populate('category');
    // },
    workouts: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'workouts.exercise',
          populate: 'category'
        });

        return user.exercise.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addWorkout: async (parent, { exercise }, context) => {
      console.log(context);
      if (context.user) {
        const workout = new Workout({ exercise });

        await User.findByIdAndUpdate(context.user._id, { $push: { workouts: workout } });

        return workout;
      }

      throw new AuthenticationError('Not logged in');
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

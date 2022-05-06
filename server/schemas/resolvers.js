const { AuthenticationError } = require("apollo-server-express");
const { User, Workout } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    workouts: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }
      return await Workout.find(params).populate('category');
    },
    // me: async (parent, args, context) => {
    //   if (context.user) {
    //     const userData = await User.findOne({ _id: context.user._id }).select(
    //       "-__v -password"
    //     );
    //     return userData;
    //   }
    //   throw new AuthenticationError("You need to be logged in!");
    // },
  }

//   Mutation: {
//     addUser: async (parent, args) => {
//       const user = await User.create(args);
//       const token = signToken(user);
//       return { token, user };
//     },
//     login: async (parent, { email, password }) => {
//       const user = await User.findOne({ email });

//       if (!user) {
//         throw new AuthenticationError("No user found");
//       }

//       const correctPw = await user.isCorrectPassword(password);

//       if (!correctPw) {
//         throw new AuthenticationError("Incorrect credentials");
//       }

//       const token = signToken(user);

//       return { token, user };
//     },
//     saveWorkout: async (parent, { workoutWorkout }, context) => {
//       if (context.user) {
//         const updatedUser = await User.findByIdAndUpdate(
//           { _id: context.user._id },
//           { $push: { savedWorkouts: workoutWorkout } },
//           { new: true }
//         );
//         return updatedUser;
//       }
//       throw new AuthenticationError("You need to be logged in!");
//     },
//     removeWorkout: async (parent, { workoutId }, context) => {
//       if (context.user) {
//         const updatedUser = await User.findByIdAndUpdate(
//           { _id: context.user._id },
//           { $pull: { savedWorkouts: { workoutId } } },
//           { new: true }
//         );
//         return updatedUser;
//       }
//       throw new AuthenticationError("You need to be logged in!");
//     },
//   },
};

module.exports = resolvers;

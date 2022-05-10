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
          .populate('workouts')
    
        return userData;
      }
    
      throw new AuthenticationError('No user with that ID');
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('workouts');
    },
    // workouts: async (parent, { category, name }) => {
    //   const params = {};

    //   if (category) {
    //     params.category = category;
    //   }

    //   if (name) {
    //     params.name = {
    //       $regex: name
    //     };
    //   }

    //   return await Exercise.find(params).populate('category');
    // },
    workouts: async (parent, {username}) => {
      const userData = await User.findOne({username})
          .select('-__v -password')
          .populate('savedWorkouts')
      return userData;
    },
    // workouts: async (parent, args, context) => {
    //   if (context.user) {
    //     const userData = await Workout.find({_id: context.user._id})
    //     .select('-__v -password')
    //     .populate('savedWorkouts')

    //     return userData;
    //   }

    //   throw new AuthenticationError('No saved workouts yet');
    // },
    user: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('savedWorkouts')
    
        return userData;
      }
    
      throw new AuthenticationError('No user with that ID');
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

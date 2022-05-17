const { AuthenticationError } = require("apollo-server-express");
const { User, Exercise, Workout, Category } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    exercises: async (parent, { name, equipment, bodyPart, target }) => {
      if (name) {
        const exerciseData = await Exercise.findOne({ name });

        return exerciseData;
      }
    },

    exerciseByOther: async (parent, {equipment, bodyPart, target}) => {
      if (equipment) {
        const exerciseData = await Exercise.findOne({ equipment });

        return exerciseData;
      }
      if (bodyPart) {
        const exerciseData = await Exercise.findOne({ bodyPart });

        return exerciseData;
      }
      if (target) {
        const exerciseData = await Exercise.findOne({ target });

        return exerciseData;
      }
    },
    // exerciseByEquipment: async (parent, {name}) => {
    //   if (name) {
    //     const exerciseData = await Exercise.findOne({name})

    //     return exerciseData;
    //   }
    // },
    // exerciseByBodyPart: async (parent, {name}) => {
    //   if (name) {
    //     const exerciseData = await Exercise.findOne({name})

    //     return exerciseData;
    //   }
    // },
    // exerciseByName: async (parent, {name}) => {
    //   if (name) {
    //     const exerciseData = await Exercise.findOne({name})

    //     return exerciseData;
    //   }
    // },
    exercises: async () => {
      return await Exercise.find();
    },

    user: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("workouts");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    user: async () => {
      return User.find().select("-__v -password").populate("workouts");
    },
    workout: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Exercise.find(params).populate("category");
    },
    // workout: async (parent, { _id }) => {
    //   return await Exercise.findById(_id).populate('category');
    // },
    workout: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "workouts.exercise",
          populate: "category",
        });

        return user.exercise.id(_id);
      }

      throw new AuthenticationError("Not logged in");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      // This is a hack. A dirty, dirty hack
      // args.savedWorkouts = [{
      //   name: args.username + " 's first workout" 
      // }];
      console.log(args);

      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    addWorkout: async (parent, args, context) => {
      if (context.user) {
        const workout = await Workout.create({ ...args });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { workouts: workout },
        });

        return workout;
      }

      throw new AuthenticationError("Not logged in");
    },

    removeWorkout: async (parent, args, context) => {
      return this
    },

    addExercise: async (parent, {exerciseid, _id}, context) => {
      if (context.user) {
        console.log(exerciseid + " " + _id)
        const addedExercise = await Exercise.findOne({exerciseid})
        console.log(addedExercise)
        const workout = await Workout.findOne({_id});
        console.log(workout)
        const updatedWorkout = await Workout.findOneAndUpdate(
          { _id: workout }, 
          { $push: { exercises: addedExercise } },
          { new: true }
          ).populate('exercises');;
          console.log(updatedWorkout)
        return updatedWorkout;
      }

      throw new AuthenticationError('No workout or exercise with that id!');
    },

    removeExercise: async (parent, args, context) => {
      return this
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;

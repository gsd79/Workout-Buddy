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

    exerciseByOther: async (parent, {equipment, bodyPart, target, _id}) => {
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
      if (_id) {
        const exerciseData = await Exercise.find({_id})
    
        return exerciseData;
      }
    },

    exercises: async () => {
      return await Exercise.find();
    },

    user: async (parent, {_id}, context) => {
      if (context.user) {
        const userData = await User.findOne({_id})
          .select('-__v -password')
    
        return userData;
      }
    
      throw new AuthenticationError('No user with that ID');
    },

    users: async () => {
      return User.find()
        .select('-__v -password')
    },

    workouts: async (parent, {username}) => {
      const userData = await User.findOne({username})
          .select('-__v -password')
      return userData;
    },

    workout: async (parent, {_id})=> {
      const userData = await Workout.findOne({_id})
          .select('-__v -password')
      return userData;
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      // args.savedWorkouts = [{
      //   name: args.username + "'s First Workout"
      // }]
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
          )

        return workout;
      }

      throw new AuthenticationError('Not logged in');
    },

    removeWorkout: async (parent, args, context) => {
      if (context.user) {

        const removedWorkout = await Workout.findById(args.workout_id)

        console.log(removedWorkout + " this is the workout to be removed");
        
        await Workout.findByIdAndDelete(args.workout_id);

        const updatedUser = await User.updateOne(
          { _id: args.user_id }, 
          { $pull: { savedWorkouts: removedWorkout } },
          { new: true }
        )

        return console.log(context.user.username + "'s workout " + removedWorkout.name + " has been deleted");
      }

      throw new AuthenticationError('No Workout with that ID');
    },

    addExercise: async (parent, args, context) => {
      if (context.user) {

        console.log(args)

        const addedExercise = await Exercise.findById(args.exerciseid)

        console.log(addedExercise)

        const workout = await Workout.findById(args._id);
        
        const updatedWorkout = await Workout.findOneAndUpdate(
          { _id: workout }, 
          { $addToSet: { exercises: addedExercise } },
          { new: true }
          );
          console.log(updatedWorkout + "this is updated workout")
          //$push: {savedWorkouts: workout}

        // await User.findByIdAndUpdate(
        //     { _id: context.user._id }, 
        //     { $pull: { savedWorkouts: workout },
        //        }, // TODO does this duplicate the workout? how to update exercises to the user?
        //     { new: true }
        //     )
      
        return updatedWorkout;
      }

      throw new AuthenticationError('No workout or exercise with that id!');
    },

    removeExercise: async (parent, {exerciseid, _id}, context) => {
        if (context.user) {
          const exercise = await Exercise.findOne({ exerciseid });
  
          await Workout.findByIdAndUpdate(
            { _id: _id }, 
            { $pull: { exercises: exercise } },
            { new: true }
            )
  
          return workout;
        }
  
        throw new AuthenticationError('No Exercise or Workout with that ID');
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

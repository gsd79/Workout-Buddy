const db = require("./connection");
const { Workout } = require("../models");

db.once("open", async () => {
  const workouts = await Workout.insertMany([
    {
      bodyPart: "waist",
      equipment: "body weight",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
      workoutId: "0001",
      name: "3/4 sit-up",
      target: "abs",
    },
    {
      bodyPart: "waist",
      equipment: "body weight",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0002.gif",
      workoutId: "0002",
      name: "45° side bend",
      target: "abs",
    },
    {
      bodyPart: "waist",
      equipment: "body weight",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0003.gif",
      workoutId: "0003",
      name: "air bike",
      target: "abs",
    },
  ]);

  console.log("workouts seeded");

  process.exit();
});

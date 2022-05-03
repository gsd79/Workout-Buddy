const router = require("express").Router();
const {
  createUser,
  getSingleUser,
  saveWorkout,
  deleteBook,
  login,
} = require("../../controllers/user-controller");

// import middleware
const { authMiddleware } = require("../../utils/auth");

// put authMiddleware anywhere we need to send a token for verification of user
router.route("/").post(createUser).put(authMiddleware, saveWorkout);

router.route("/login").post(login);

router.route("/me").get(authMiddleware, getSingleUser);

router.route("/workouts/:workoutId").delete(authMiddleware, deleteWorkout);

module.exports = router;

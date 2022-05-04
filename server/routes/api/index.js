const router = require("express").Router();
const userRoutes = require("./user-routes");
const exerciseRoutes = require('./exercise-routes')


const apiRoutes = require('./api')

router.use("/users", userRoutes);
router.use('/workout', exerciseRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
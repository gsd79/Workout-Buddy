const router = require('express').Router();

router.get('/', async (req, res) => {
  res.json({ msg: 'server is running' });
});

module.exports = router;
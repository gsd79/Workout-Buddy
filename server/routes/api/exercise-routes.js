const request = require('request');
const router = require('./user-routes');

const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    useQueryString: true
  }
};

router.get('/', (request, response) => {
  console.log(options);
});


module.exports = router;
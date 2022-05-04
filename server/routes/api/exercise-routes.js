const request = require('request');
const router = require('./user-routes');

const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': 'ff10634a33msh63cdd6d3c1de158p10082fjsnb42916df5257',
    useQueryString: true
  }
};

router.get('/', (request, response) => {
  console.log(options);
});


module.exports = router;
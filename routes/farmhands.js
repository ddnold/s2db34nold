var express = require('express');
var router = express.Router();

/* GET Farmhands page */
router.get('/', function(req, res, next) {
  res.render('farmhands', { title: 'Search Results ~ Developing Web Apps and Services' });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET my full name page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Manichandra Kuntala' });
});

module.exports = router;
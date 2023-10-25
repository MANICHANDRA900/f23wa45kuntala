var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  
  var studentId = 'S565945'; 
  var lastDigit = studentId.charAt(studentId.length - 1);

  var x = req.query.x || Math.floor(Math.random() * 100); 

  var result = Math.cos(x);

  var response = `Math.cos() applied to ${req.query.x ? req.query.x : 'a random number'} is ${result}`;

  res.send(response);
});

module.exports = router;

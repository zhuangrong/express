var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 // res.send('respond with a resource');
  res.render('layout', { title: 'layoutjade' });
});

module.exports = router;

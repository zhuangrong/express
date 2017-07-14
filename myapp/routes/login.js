var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/login.html')
});

/* post login page. */
router.post('/', function(req, res, next) {
  var account = req.body.account
  res.render('index', { title: account });
});

module.exports = router;

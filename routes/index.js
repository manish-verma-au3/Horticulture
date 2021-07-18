var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'This is master branch' });
});

router.get('/test', function(req, res, next) {
  res.render('index', { title: 'Hello manish' });
});


module.exports = router;

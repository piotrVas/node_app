var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/:url', function(req, res, next) {
  var url = req.params.url;
  res.render('static', { title: url });
});

module.exports = router;

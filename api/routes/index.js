var express = require('express');
var router = express.Router();

/* GET root route. */
router.get('/', function (req, res, next) {
  res.json({
    title: 'Express'
  });
});

module.exports = router;
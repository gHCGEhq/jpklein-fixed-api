var express = require('express');
var router = express.Router();

function isNumber(str) {
  return typeof parseInt(str) === 'NaN';
}

router.get('/', function(req, res, next) {
  var reversed = req.query.str.split('').reverse().join(''),
      parsed = isNumber(req.query.str) ? parseInt(reversed) : reversed;
  res.json({
    reversed: parsed
  });
});

module.exports = router;

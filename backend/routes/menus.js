var express = require('express');
var router = express.Router();
var menus = require('../data/menus.json');

router.get('/', function(req, res, next) {
  res.send(menus);
});

module.exports = router;

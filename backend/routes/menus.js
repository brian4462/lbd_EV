var express = require('express');
var router = express.Router();
var menus = require('../data/menus.json');
var db = require('../lib/db.js');

router.get('/', function(req, res, next) {
  res.send(menus);
});

module.exports = router;

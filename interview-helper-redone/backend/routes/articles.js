var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var articles = require('../models/Articles');

/* GET ALL TOPICS */
router.get('/', function (req, res, next) {
  articles.find(function (err, article) {
    if (err) return next(err);
    res.json(article);
  });
});

module.exports = router;
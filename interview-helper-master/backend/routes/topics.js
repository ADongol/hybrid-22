var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Topics = require('../models/Topics.js');

/* GET ALL TOPICS */
router.get('/', function (req, res, next) {
  Topics.find(function (err, topics) {
    if (err) return next(err);
    res.json(topics);
  });
});

/* GET SINGLE BOOK BY ID */
router.get('/:id', function (req, res, next) {
  Topics.findById(req.params.id, function (err, topic) {
    if (err) return next(err);
    res.json(topic);
  });
});

/* SAVE BOOK */
router.post('/', function (req, res, next) {
  Topics.create(req.body, function (err, topic) {
    if (err) return next(err);
    res.json(topic);
  });
});

/* UPDATE BOOK */
router.put('/:id', function (req, res, next) {
  Topics.findByIdAndUpdate(req.params.id, req.body, function (err, topic) {
    if (err) return next(err);
    res.json(topic);
  });
});

module.exports = router;
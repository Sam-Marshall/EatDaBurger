var express = require('express');
var burgers = require('../models/burger.js');

var router = express.Router();

router.get('/', function(req, res) {
    burgers.all(function(data) {
        res.render('index', { burger: data });
    });
});

router.post('/', function(req, res) {
    burgers.create([req.body.burger], function(data) {
        res.redirect('/');
    });
});

module.exports = router;

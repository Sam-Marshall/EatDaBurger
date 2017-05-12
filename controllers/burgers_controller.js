var express = require('express');
var burgers = require('../models/burger.js');

var router = express.Router();

router.get('/', function(req, res) {
    burgers.all(function(data) {
    	console.log()
        res.render('index', { burger: data });
    });
});

router.post('/', function(req, res) {
    burgers.create([req.body.burger], function(data) {
        res.redirect('/');
    });
});

router.put('/:id', function(req, res) {
    burgers.update([req.params.id], function() {
        res.redirect('/');
    });
});

module.exports = router;

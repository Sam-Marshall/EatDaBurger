var orm = require('../config/orm.js');

var burger = {
    all: function(cb) {
        orm.selectAll('*', 'burgers', function(res) {
            cb(res);
        });
    },
    create: function(colVal, cb) {
        orm.insertOne('burgers', 'burger_name', colVal, function(res) {
            cb(res);
        })
    }
};

module.exports = burger;

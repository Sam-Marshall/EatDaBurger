var connection = require('./connection.js');

var orm = {
    selectAll: function(selWhat, table, cb) {
        var queryString = 'SELECT ?? FROM ??';
        connection.query(queryString, [selWhat, table], function(err, data) {
            if (err) throw err;
            cb(data);
        });
    },
    insertOne: function(table, col, colVal, cb) {
        var queryString = 'INSERT INTO ' + table + ' (' + col.toString() + ') VALUES (\'' + colVal.toString() + '\')';
        connection.query(queryString, function(err, data) {
            if (err) throw err;
            cb(data);
        });
    },
    updateOne: function(table, col, newVal, id, idNum, cb) {
        var queryString = 'UPDATE ' + table;
        queryString += ' SET ' + col.toString() + ' = ' + newVal;
        queryString += ' WHERE ' + id + ' = ' + idNum;
        connection.query(queryString, function(err, data) {
            if (err) throw err;
            cb(data);
        });
    }
}

module.exports = orm;

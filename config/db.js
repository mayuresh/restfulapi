/**
 * Created by mayureshp on 1/30/2015.
 */
var env = process.env.ENV || 'dev';
var config = require('./config-' + env),
    mongoose = require('mongoose');

module.exports = function() {
    var db = mongoose.connect(config.db, function(err) {
       if (err) {
           console.error('Could not connnect to MongoDB');
           console.log(err);
       }
    });

    require('../models/todo.model.js');
    return db;
}
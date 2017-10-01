// Import orm.js
var orm = require("../config/orm.js");

// Object for burger functions to interact with the database
var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(result) {
            cb(result);
        });
    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(result) {
            cb(result);
        });
    },

    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(result) {
            cb(result);
        });
    }
};

// Export burger object for the controller
module.exports = burger;
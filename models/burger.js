//IMPORT ORM TO CREATE FUNCTIONS THAT INTERACT WITH THE DATABASE
var orm = require('../config/orm.js');

var burger = {
    selectAll: function(callBack) {
        orm.selectAll('burger_table', function(res) {
            callBack(res);
        });
    },
    insertOne: function(value, callBack) {
        orm.insertOne('burger_table', 'burger_name', value, function(res) {
            callBack(res);
        });
    },
    updateOne: function(objects_columns_values, condition, callBack) {
        orm.updateOne('burger_table', objects_columns_values, condition, function(res) {
            callBack(res);
        });
    }
    
};

module.exports = burger;
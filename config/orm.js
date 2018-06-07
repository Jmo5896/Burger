//HERE ARE THE METHODS THAT WILL BE CALLED IN OTHER PLACES
var connection = require('../config/connection.js');

//function for getting question marks
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push('?');
    }
    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objectToSql(object) {
    var arr = [];

    //loop through the keys and push the key/value as a string into arr
    for (var key in object) {
        var value = object[key];
        //check to skip hidden properties
        if (Object.hasOwnProperty.call(object, key)) {
            // if string has spaces, add quotations
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = `'${value}'`;
            }
            arr.push(key + '=' + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}

var orm = {
    selectAll: function(table, callBack) {
        var queryString = `SELECT burger_name FROM ${table};`;
        connection.query(queryString, function(error, result) {
            if (error) throw error;
            callBack(result);
        });
    },
    insertOne: function(table, column, value, callBack) {
        var queryString = `INSERT into ${table} ('${columns.toString()}') VALUES ('${printQuestionMarks(values.length)}') `;

        console.log(queryString);

        connection.query(queryString, values, function(error, result) {
            if (error) throw error;
            callBack(result);
        });
        
    },
    updateOne: function(table, objects_columns_values, condition, callBack) {
        var queryString = `UPDATE ${tables} SET ${objectToSql(objects_columns_values)} WHERE ${condition}`;
        connection.query(queryString,function(error, result) {
            if (error) throw error;
            callBack(result);
        });
    }
};

//used in model
module.exports = orm;
//CONNECTION TO MYSQL DATABASE
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'burgers_db'
});
 
connection.connect();

module.exports = connection;
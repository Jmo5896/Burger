//CONNECTION TO MYSQL DATABASE
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'q57yawiwmnaw13d2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  port: 3306,
  user: 'x5hywi69elo80e3g',
  password: 'ktrm2pqpbe000alz',
  database: 'r4wwra4a2vlfdktk'
});
 
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;
//CONNECTION TO MYSQL DATABASE
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'g3v9lgqa8h5nq05o.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  port: 3306,
  user: 'z2tbhwpy28fn2i7u',
  password: 'ocg6t9i1urvwpq1s',
  database: 'otfmo60c6d6d1s08'
});
 
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;
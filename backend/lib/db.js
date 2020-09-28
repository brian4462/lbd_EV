var mysql = require('mysql2');
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'lbd@0321!@',
  database : 'lbd'
});
db.connect();
module.exports = db;

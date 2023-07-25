const mysql      = require('mysql');
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'todolist'
});
 
db.connect(error => {
    if(error) throw error;
    console.log("Db connected");
});

module.exports =db;
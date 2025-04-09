const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'IwWeb@123',
  database: 'categories_db',
  port: 3306
});

db.connect(err => {
  if (err) {
    console.error('MySQL connection error: ' + err.message);
  } else {
    console.log('Connected to MySQL database');
  }
});

module.exports = db;

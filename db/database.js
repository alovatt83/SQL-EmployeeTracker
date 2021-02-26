const mysql = require('mysql2');

// Connect to database 
const db = new mysql.Database('./db/employees.db', err => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the employee database.');
});

module.exports = db;

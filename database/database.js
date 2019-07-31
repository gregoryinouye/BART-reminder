const mysql = require('mysql');
const { dbUser, dbPassword } = require('./databasePassword.js');

const connection = mysql.createConnection({
  host: 'localhost',
  user: dbUser,
  password: dbPassword,
  database: 'bart',
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
  } else {
    console.log('MySQL connected as id ' + connection.threadId);
  }
});

module.exports = connection;

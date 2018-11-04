require('dotenv').config();

// Pull in required dependencies
const Table = require('cli-table'),
      keys = require('./keys.js'),
      inquirer = require('inquirer');

let mysql = require('mysql');

// Define the MySQL connection parameters
let connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: keys.user,
  password: keys.password,
  database: 'bamazon'
});

connection.connect(function (err) {
  if(err) throw err;
  greeting();
  getProductID();
});

function greeting() {
  console.log('\n********************************** Welcome to BAM-azon! **********************************\n');
}



// Pull in required dependencies
require('dotenv').config()
const keys = require('./keys.js'),
  inquirer = require('inquirer'),
  Table = require('cli-table');

let mysql = require('mysql');

// Define the MySQL connection parameters
let connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: keys.user,
  password: keys.password,
  database: 'bamazon'
})

// check for connection to database
connection.connect((err) => {
  if (err) throw err;
  greeting();
  displayProducts();
});

// Set functions for greeting, exit and invoice for BAM-azon!
function greeting() {
  console.log('\n==================== You\'ve entered BAM-azon! ====================\n');
}

function exitTag() {
  console.log('\n');
  console.log('========== Sorry to see you go but thanks for using BAM-azon! ==========\n');
}

function showInvoice() {
  console.log('\n========== Invoice of Purchase ==========\n');
}

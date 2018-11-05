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

// display items in table for sale
function displayProducts() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    let table = new Table({
      head: ['ID', 'Name', 'Department', 'Price', 'Stock']
    })
    for (let i = 0; i < res.length; i++) {
      table.push([res[i].item_id, res[i].product_name, res[i].department_name, `$${res[i].price}`, res[i].stock_quantity]);
    };
    console.log('\n')
    console.log(table.toString());
  });
  // invoke placeOrder function
  placeOrder();
};

// items purchased stock is updated and invoice displayed
function placeOrder() {
  inquirer.prompt([{
    type: 'input',
    name: 'id',
    message: 'Please enter the ID number of an item to purchase, press ' + `'${'x'}'` + ' to leave BAM-azon.',
    validate: input => {
      if (input.toLowerCase() == 'x') process.exit(exitTag())

      if (isNaN(input)) {
        return 'Please enter a valid ID number from the table above.'
      }
      return true
    }
  },
  {
    type: 'input',
    name: 'quantity',
    message: 'Please enter a quantity of purchase, press ' + `'${'x'}'` + ' to leave BAM-azon.',
    validate: input => {
      if (input.toLowerCase() == 'x') process.exit(exitTag())

      if (isNaN(input)) {
        return 'Enter a valid number to continue.'
      }
      return true
    }
  }
  ]).then(function (order) {
    
    connection.query(
      "SELECT * FROM products WHERE ?", {
        item_id: order.id
      },
      function (err, res) {
        if (err) throw err;
        showInvoice();
        let table = new Table({
          head: ['Item Name', 'Quantity Purchased', 'Total Cost']
        })
        for (let i = 0; i < res.length; i++) {
          if (res[i].stock_quantity > order.quantity) {
            let total = order.quantity * res[i].price;
            table.push([res[i].product_name, order.quantity, `$${total}`]);
            console.log(table.toString());
            connection.query(
              'UPDATE products SET ? WHERE ?',
              [{
                stock_quantity: res[i].stock_quantity - order.quantity,
                product_sales: total
              },
              {
                item_id: order.id
              }
              ],
              function (err, res) {
                if (err) throw err;

                console.log('Purchase successful!\n');
                greeting();
                displayProducts();
              }
            )
          } else {

            console.log('Insufficient quantity please try again');
            console.log('Available stock: ' + res[i].stock_quantity + '\n');
            greeting();
            displayProducts();
          };
        };
      }
    )
  })
};

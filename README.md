# BAM-azon!

## Description
The Bam-azon! app takes in orders from customers and deplete stock from the store's inventory. This application uses a simple command line Amazon.com emulator like storefront. It uses the npm inquirer and cli.table package along with Node.Js and MySQL database backend together with the npm mysql package. The application presents a customer interface.

### MySQL Database Setup
To run BAM-azon!, you should have the MySQL database already set up on your machine. If you don't, visit the MySQL installation page to install the version you need for your operating system. Once you have MySQL installed, you can create the Bamazon database and the products table with the SQL code found in Bamazon.sql. Run this code inside your MySQL client to populate the database, then you will be ready to proceed with running the BAM-azon! customer interface.

### Customer Interface
The customer interface allows the user to view the current inventory of store items: item IDs, descriptions, department in which the item is located and price. The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is not available, the user is prompted to modify their order.

To run the customer interface please follow the steps below:

* git clone git@github.com:Manuel-Padilla/Bamazon.git
* cd Bamazon
* npm install
* node bamazonCustomer.js

Languages used:
NodeJs and MySQL. NPM packages included are mysql, inquirer, and cli.table. When cloning the repo, add a local keys.js file with your own MySQL credentials.

### BAM-azon! Demo
Click below to watch a demo of the BAM-azon! customer interface.

Video Demonstration: 

-- Creat a database called 'Bamazon' and switch into it for this activity --
CREATE DATABASE bamazon;
USE bamazon;

-- Create a table called 'products' which will contain the store inventory --
CREATE TABLE products (
	item_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(10, 2),
    stock_quantity INT(10),
    product_sales DECIMAL(10,2) NOT NULL DEFAULT '0.00'
);

-- Insert data into the 'products' table --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Electric Car Blanket", "Automotive", 24.37, 10),
       ("Nightblade's Honor", "Books", 7.48, 6),
       ("Whisper Me This", "Books", 10.97, 10),
       ("Hard Road", "Books", 7.99, 10),
       ("Moto X (4th Gen.)", "Electronics", 199.99, 15),
       ("Jabra Move Headphones", "Electronics", 50.27, 8),
       ("SqueakAir Ball", "Pet Supplies", 5.99, 6),
       ("Pup-Peroni Snacks", "Pet Supplies", 8.97, 13),
       ("Wicker Waste Basket", "Home", 15.12, 5),
       ("Large Hand Mirror", "Home", 5.30, 9);

SELECT * FROM products;

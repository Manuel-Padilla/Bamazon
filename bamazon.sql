USE bamazon;

CREATE TABLE products (
	item_id INT NOT NULL auto_increment,
    product_name VARCHAR(100) NULL,
    department_name VARCHAR(50) NULL,
    price FLOAT(10, 2) NULL,
    stock_quantity INTEGER(12) NULL,
    PRIMARY KEY (item_id)
);
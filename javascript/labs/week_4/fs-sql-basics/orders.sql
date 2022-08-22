-- Step 3: orders table
-- In the orders.sql file, write out the code for the following problems:
-- COMPLETED: Create a table called orders that records: order_id, person_id, product_name, product_price, quantity.
CREATE TABLE orders (order_id SERIAL PRIMARY KEY, person_id INTEGER REFERENCES person(id), product_name VARCHAR(200), product_price FLOAT, quantity INTEGER);

-- COMPLETED: Add 5 orders to the orders table.
-- Make orders for at least two different people.
INSERT INTO orders (person_id, product_name, product_price, quantity)
    VALUES(1, 'ice', 3.96, 3);
INSERT INTO orders (person_id, product_name, product_price, quantity)
    VALUES(1, 'ice', 3.96, 6);
INSERT INTO orders (person_id, product_name, product_price, quantity)
    VALUES(3, 'icecream', 5.50, 2);
INSERT INTO orders (person_id, product_name, product_price, quantity)
    VALUES(3, 'lemons', 4.50, 10);
-- COMPLETED: person_id should be different for different people.
INSERT INTO orders (person_id, product_name, product_price, quantity)
    VALUES(2, 'kbbq', 11.99, 5);
-- COMPLETED: Select all the records from the orders table.
SELECT * FROM orders
-- COMPLETED: Calculate the total number of products ordered.
SELECT COUNT(quantity) FROM orders; 
-- COMPLETED: Calculate the total order price.
SELECT SUM(product_price) FROM orders;
-- COMPLETED: Calculate the total order price by a single person_id.
-- NOT DOING ARITHMETIC
SELECT (SUM(product_price) * COUNT(quantity) FROM orders WHERE person_id = 1
-- Step 6: invoice table
-- In the invoice.sql file, write out the code for the following problems:
-- Count how many orders were made from the USA.
SELECT COUNT(invoice_id) from invoice WHERE billing_country = "USA";
-- Find the largest order total amount.
SELECT * from invoice ORDER BY total DESC LIMIT 1
-- Find the smallest order total amount.
SELECT * from invoice ORDER BY total ASC LIMIT 1
-- Find all orders bigger than $5.
SELECT * from invoice WHERE total > 5;
-- Count how many orders were smaller than $5.
SELECT COUNT(invoice_id) from invoice WHERE total < 5
-- Count how many orders were in CA, TX, or AZ (use IN).
SELECT COUNT(invoice_id) from invoice billing_state IN ('CA', 'TX', 'AZ')
-- Get the average total of the orders.
SELECT AVG(total) from invoice;
-- Get the total sum of the orders.
SELECT SUM(total) from invoice;
-- Update the invoice with an invoice_id of 5 to have a total order amount of 24.
UPDATE invoice
SET total = 24
WHERE invoice_id = 5
-- Delete the invoice with an invoice_id of 1.
DELETE invoice
WHERE invoice_id = 1;
-- Step 5: employee table
-- In the employee.sql file, write out the code for the following problems:

-- List all employee first and last names only that live in Calgary.
SELECT firstNAme, lastName FROM employee WHERE city = "Calgary";
-- Find the birthdate for the youngest employee.
SELECT birthdate FROM employee ORDER BY birthdate ASC LIMIT 1
-- Find the birthdate for the oldest employee.
SELECT birthdate FROM employee ORDER BY birthdate DESC LIMIT 1
-- Find everyone that reports to Nancy Edwards (use the ReportsTo column). * You will need to query the employee table to find the id for Nancy Edwards
SELECT * FROM employee WHERE ReportsTo = 2
-- Count how many people live in Lethbridge.
SELECT COUNT(city) from employee WHERE city = "Lethbridge";
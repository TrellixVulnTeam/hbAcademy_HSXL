-- Step 2: person table
-- In the person.sql file, write out the code for the following problems:

-- Create a table called person that records a person’s id, name, age, height (in cm , city, favorite_color. id should be an auto-incrementing id/primary key (use type: SERIAL)
CREATE TABLE person (id SERIAL PRIMARY KEY, name VARCHAR(200), age INTEGER, height INTEGER, city VARCHAR(200), favorite_color VARCHAR(200));
-- COMPELTED: running this snippet would create a table with ID that AI (auto incr) and specificying the data types.
-- ex of NOT NULL: for example - "name VARCHAR(200) NOT NULL"
-- COMPLETED: Add 5 different people into the person database. Remember to not include the person_id because it should auto-increment.
INSERT INTO person (name, age, height, city, favorite_color)
    VALUES('Daniel', 28, 175, 'Huntington', 'midnight blue');
--
INSERT INTO person (name, age, height, city, favorite_color)
    VALUES('Joe', 27, 169, 'Pier', 'red');
--
INSERT INTO person (name, age, height, city, favorite_color)
    VALUES('Pierre', 30, 191, 'Yacht', 'green');
--
INSERT INTO person (name, age, height, city, favorite_color)
    VALUES('Davie', 21, 151, 'Smallville', 'yellow');
--
INSERT INTO person (name, age, height, city, favorite_color)
    VALUES('Brand', 28, 186, 'Stony Brook', 'purple');
-- COMPLETED: Select all the people in the person table by height from tallest to shortest.
    -- MY normal syntax I will be doing for sql
    SELECT
        *
    FROM
        person
    ORDER BY 
        height DESC;
-- COMPLETED: Select all the people in the person table by height from shortest to tallest.
SELECT * FROM person ORDER BY height ASC;
-- COMPLETED: Select all the people in the person table by age from oldest to youngest.
SELECT * FROM person ORDER BY age DESC;
-- COMPLETED: Select all the people in the person table older than age 20.
SELECT * FROM person WHERE age > 20;
-- COMPLETED: Select all the people in the person table that are exactly 18.
SELECT * FROM person WHERE age = 18;
-- COMPLETED: Select all the people in the person table that are less than 20 and older than 30.
SELECT * FROM person WHERE age < 20 AND age > 30;
-- COMPLETED: Select all the people in the person table that are not 27 (use not equals).
SELECT * FROM person WHERE age != 27;
-- COMPLETED: Select all the people in the person table where their favorite color is not red.
SELECT * FROM person WHERE favorite_color NOT IN ('red');
-- COMPLETED: Select all the people in the person table where their favorite color is not red and is not blue.
SELECT * FROM person WHERE favorite_color NOT IN ('red', 'blue');
-- COMPLETED: Select all the people in the person table where their favorite color is orange or green.
SELECT * FROM person WHERE favorite_color = "orange" OR favorite_color = "green";
-- COMPLETED: Select all the people in the person table where their favorite color is orange, green or blue (use IN).
SELECT * FROM person WHERE favorite_color in ('orange', 'green', 'blue');
-- COMPLETED: Select all the people in the person table where their favorite color is yellow or purple (use IN).
SELECT * FROM person WHERE favorite_color in ('yellow', 'purple');
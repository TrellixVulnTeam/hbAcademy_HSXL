-- Step 4: artist table
-- In the artist.sql file, write out the code for the following problems:
        -- artist
            -- name
                -- VARCHAR (120)
            -- artist_id
                -- INTEGER
-- Add 3 new artists to the artist table. (It already exists.)
INSERT INTO artist (name)
    VALUES('STEVE');
INSERT INTO artist (name)
    VALUES('bob');
INSERT INTO artist (name)
    VALUES('guy');
-- Select 10 artists in reverse alphabetical order.
SELECT * FROM artist ORDER BY name DESC LIMIT 10
-- Select 5 artists in alphabetical order.
SELECT * FROM artist ORDER BY name ASC LIMIT 5
-- Select all artists that start with the word ‘Black’.
SELECT  * FROM artist WHERE name LIKE 'Black%';
-- Select all artists that contain the word ‘Black’.
SELECT  * FROM artist WHERE name LIKE '%Black%';

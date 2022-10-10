-- - Data Type for User  + Explanation
-- ====================
-- id : pk - identify each unique user
-- firstName : varchar(200) - user's first name - validate by at least 2 characters 
-- lastName : varchar(200) - user's last name - validate by at least 2 characters 
-- age : integer - user's age - may add a minimum requirement (18 to adopt)
-- email : varchar - user's email (validate to have an @ and .com)
-- password : varchar (long to store hashed + salted passwords)
-- city: varchar (could be an integer or char (using abv) when address is broken down)
-- state: varchar (could be an integer or char (using abv) when address is broken down)
--     === added tables after brainstorm ===
-- =====================

CREATE TABLE users (
    id int NOT NULL,
    firstName varchar(200) NOT NULL,
    lastName varchar(200) NOT NULL,
    age integer NOT NULL,
    email varchar(200),
    password varchar(200) NOT NULL,
    city varchar(200),
    state varchar(200),
    PRIMARY KEY (id)
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstName varchar(200) NOT NULL,
    lastName varchar(200) NOT NULL,
    age integer NOT NULL,
    email varchar(200),
    password varchar(200) NOT NULL,
    city varchar(200),
    state varchar(200)
);

-- FK as null because  user can adopt and have that transaction associated to them
-- and we would want a user to register fully before adopting a pet in real world applications
INSERT INTO users (firstName, lastName, age, email, password, city, state)
    VALUES ('daniel', 'mmm', 28, 'test@test.com', '1234567', 'new york', 'new york')
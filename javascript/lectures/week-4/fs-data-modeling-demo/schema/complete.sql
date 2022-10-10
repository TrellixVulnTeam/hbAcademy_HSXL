-- ========== TABLE 1 ==========
-- each pet will be able to be a dog, cat, bird, the species_id (FK) helps identify that
CREATE TABLE species (
    id SERIAL PRIMARY KEY,
    type varchar(42) NOT NULL,
)

-- === SPECIES ID SET UP === 
-- 1
INSERT INTO species (type)
    VALUES('cat')
-- 2
INSERT INTO species (type)
    VALUES('dog')
-- 3
INSERT INTO species (type)
    VALUES('bird')


-- ========== TABLE 2 ==========
-- can use ANIMALS table for adoption table by species now via foreign key species_id
-- mostly nullable besides what is able to be done immediately at processing of an animal, weight and description.
CREATE TABLE animals (
    id SERIAL PRIMARY KEY,
    name varchar(200),
    age integer,
    location varchar(200),
    breed varchar(60),
    weight integer NOT NULL,
    desc varchar(200) NOT NULL,
    FOREIGN KEY (species_id) REFERENCES species(id),
    FOREIGN KEY (available_to_adopt) REFERENCES available(adopted)
)

-- so when we create an animal, we will also auto-generate a date and time, to see when they've first arrived
-- and also another for if any updates have taken place
-- we could also break-down each of breeds based on species.

-- entering a cat
INSERT INTO animals (name, age, location, weight, desc, species_id)
    VALUES ('doug', 3, 'somewhere here', 'calico', 5, 'white coat with spots', 1)

-- inserting, with the knowledge that a dog is 2 in the species table.
INSERT INTO animals (name, age, location, breed, weight, desc, species_id)
    VALUES ('puppo', 3, 'somewhere over there', 'siberian husky', 55, 'black coat', 2)


-- ========== TABLE 3 ==========
CREATE TABLE shelters (
    id SERIAL PRIMARY KEY,
    name varchar(200) NOT NULL,
    city varchar(200) NOT NULL,
    state varchar(200) NOT NULL,
    phone varchar(200) NOT NULL    
)

INSERT INTO shelters (
    'rich pets', 'new york city', 'new york', '516-123-4321'
)

-- could be defaulted to 1 on arrival of animal
-- boolean: 1 - here, 0 - adopted
-- ========== TABLE 4  ==========
CREATE TABLE available (
    id SERIAL PRIMARY KEY,
    adoption BOOLEAN
)
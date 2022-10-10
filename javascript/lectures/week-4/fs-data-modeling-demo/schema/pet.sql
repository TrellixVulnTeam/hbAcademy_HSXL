-- Consideration: for cat table or dog table, pet_id is FK for them
-- Cat (cat_id, name, weight, age, pet_id (fk), shelter_id (fk), adopted_id (fk) )
    -- this can be used to confirm correct type within type tables (dog, cat tables)
    -- ex: pet_id would read like: 1 = cat, 2 = dog, 3 = bird
    -- as well as belonging to a shelter
    -- and belonging to a user via adopted_id association

-- Table for types of animal
-- ================
-- pet_id (pk) - can serve as the type of pet
-- type - varchar(200) - cat, dog, bird classification or type description for pet
-- ================
CREATE TABLE pets (
    id SERIAL PRIMARY KEY,
    name varchar(200) NOT NULL,
    age integer NOT NULL,
    weight integer NOT NULL,
)
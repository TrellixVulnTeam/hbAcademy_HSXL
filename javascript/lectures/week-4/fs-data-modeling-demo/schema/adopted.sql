-- === Adopted === table between user, shelters, pets

-- (one to many) in one user adopts many pets
-- (many to many) in many shelters can have many users
-- (many to many) in many user adopts from many shelters

-- ======================
-- === adopted table ===
-- adopted_id : integer (pk)
-- shelter_id : integer (fk)
-- user_id : integer (fk)
-- pet_id : integer (fk)
-- createdAt : DateTime
-- updatedAt : DateTime 
-- ======================

CREATE TABLE adopted (
    id SERIAL PRIMARY KEY,
    createdAt Date,
    updatedAt Date,
    shelter_id int,
    user_id int,
    pet_id int,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (shelter_id) REFERENCES shelters(id)
    FOREIGN KEY (pet_id) REFERENCES pets(id)
)

-- MANY TO MANY CREATION
-- DATE - format YYYY-MM-DD
-- this could be adoption part of adoption transactions
-- createAt, updatedAt, shelter_id, user_id
INSERT INTO adopted (2022-08-23, 2022-08-23, 2, 1, 1)

-- must update to include a pet that was adopted from the shelter, but will then be able to grab the information of the user and pet
SELECT
	*
FROM
	users
JOIN
	shelters
ON
	id = user_id;
-- so we are using the users.id = adopted.user_id
-- this would show * data of user from shelter where the adoption occured

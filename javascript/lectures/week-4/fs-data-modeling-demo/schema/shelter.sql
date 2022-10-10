-- ======================
-- === shelter table ===
-- shelter_id : integer (pk)
-- shelter_name : varchar(200)
-- shelter_address : varchar(200) - or abv if broken down into shelter address table
-- ======================
CREATE TABLE shelters (
    id SERIAL PRIMARY KEY,
    name varchar(200) NOT NULL,
    city varchar(200) NOT NULL,
    state varchar(200) NOT NULL,
    phone varchar(200) NOT NULL    
)

INSERT INTO shelters (
    'rich pets', 'new york', 'new york', '516-123-4321'
)
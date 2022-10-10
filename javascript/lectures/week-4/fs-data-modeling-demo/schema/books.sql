CREATE TABLE books (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(50)
);

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(50)
);

CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    book_id INTEGER NOT NULL REFERENCES books(book_id),
    user_id INTEGER NOT NULL REFERENCES users(user_id),
    body TEXT
);
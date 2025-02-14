CREATE TABLE IF NOT EXISTS todo (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    status int DEFAULT 0
);

INSERT INTO todo (title, status) VALUES
     ('Learn Spring Boot', 0),
     ('Build a Todo App', 1),
     ('Test Docker Integration', 2);

-- create DATABASE
CREATE DATABASE recipe_app;
-- create tables subscriptions
CREATE TABLE recipe (
    id INTEGER PRIMARY KEY,
    title TEXT,
    img TEXT,
    readyInMinutes INTEGER,
    extendedIngredients TEXT,
    instructions TEXT
);
-- create tables subscriptions and users
CREATE TABLE users (
     id SERIAL PRIMARY KEY,
     user_name TEXT,
     email TEXT,
     password_digest TEXT
);

CREATE TABLE liked_by (
   id SERIAL PRIMARY KEY,
   recipe_id INTEGER,
   user_id INTEGER  
);
-- INSERT INTO subscriptions (title, price,recurring, start_date, cancel_date, site_url,user_id) VALUES ('Netflix2',14.50,1,'2019/12/20','2021/12/20','https://www.netflix.com/au/login',1);

INSERT INTO users (user_name, email, password_digest) VALUES ('Shailesh Karki','karkishailesh@hotmail.com','p');

-- ALTER TABLE subscriptions ADD COLUMN user_id INTEGER;
-- UPDATE subscriptions SET user_id = 1 WHERE id = ;


ALTER TABLE recipe 
RENAME COLUMN readyinminutes TO readyInMinutes;

alter table recipe rename column readyinminutes to readyInMinutes;

CREATE TABLE users (
  uid SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  email_verified BOOLEAN,
  hashedPassword VARCHAR(255),
  date_created DATE,
  last_login DATE
);


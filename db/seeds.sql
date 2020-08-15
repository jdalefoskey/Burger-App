-- Ensures data is added to the correct database
USE burgers_db;

-- add data to database
INSERT INTO
    `burgers` (
burger_name)
VALUES
    ("single hamburger"),
    ("double hamburger"),
    ("impossible hamburger");

-- see result
SELECT
    *
FROM
    `burgers
`;
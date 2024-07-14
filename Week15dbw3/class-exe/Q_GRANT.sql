CREATE USER 'readonly_user' @'%' IDENTIFIED BY 'pass';

GRANT SELECT, INSERT , UPDATE ON DB_GRANT.* TO 'readonly_user' @'%';

-- Will Denied
CREATE TABLE `use` (
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(255)
);
-- Will Denied
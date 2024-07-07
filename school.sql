-- Active: 1719748709143@@127.0.0.1@3306@school
CREATE DATABASE school;

CREATE Table student (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE course (
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(100) NOT NULL,
    teacher VARCHAR(100) NOT NULL,
    description VARCHAR(100) NOT NULL
);


CREATE TABLE student_course (
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES student(student_id),
    FOREIGN KEY (course_id) REFERENCES course(course_id)
);

CREATE TABLE score (
    score_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    score DECIMAL(5,2),
    FOREIGN KEY (student_id) REFERENCES student(student_id),
    FOREIGN KEY (course_id) REFERENCES course(course_id)
);

-- Add column phone (varchar15, can be null) in student table
ALTER Table student ADD COLUMN phone VARCHAR(15);
-- remove column year in course table
ALTER TABLE course DROP COLUMN description;

-- Insert some data
INSERT INTO student (name, email, phone) VALUES ('Alice', 'alice@example.com', '123-456-7890');
INSERT INTO student (name, email, phone) VALUES ('Bob', 'bob@example.com', '987-654-3210');
INSERT INTO course (course_name, teacher) VALUES ('Mathematics', 'Dr. Smith');
INSERT INTO course (course_name, teacher) VALUES ('History', 'Prof. Johnson');
INSERT INTO student_course (student_id, course_id) VALUES (1, 1); -- Alice in Mathematics
INSERT INTO student_course (student_id, course_id) VALUES (1, 2); -- Alice in History
INSERT INTO student_course (student_id, course_id) VALUES (2, 1); -- Bob in Mathematics
INSERT INTO score (student_id, course_id, score) VALUES (1, 1, 95.5); -- Alice's score in Mathematics
INSERT INTO score (student_id, course_id, score) VALUES (1, 2, 88.0); -- Alice's score in History
INSERT INTO score (student_id, course_id, score) VALUES (2, 1, 76.5); -- Bob's score in Mathematics

CREATE INDEX idx_student_name ON student(name);
ALTER TABLE course RENAME TO class;
TRUNCATE TABLE score;
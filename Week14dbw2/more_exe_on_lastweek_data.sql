
-- databases IDE: DataGrip

--Many-to-Many (Junction Table)
CREATE TABLE `user_task` (
  `user_id` int(10) unsigned NOT NULL,
  `task_id` int(10) unsigned NOT NULL,
  FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`task_id`) REFERENCES `task`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


INSERT INTO `user_task` (`user_id`, `task_id`) VALUES 
(1,1),
(1,2),
(1,3),
(2,3),
(3,3),
(4,3);

SELECT user.name, task.title 
FROM user 
JOIN user_task ON user.id = user_id 
JOIN task ON task.id=task_id

--  Data Normalization: https://github.com/HackYourFuture-CPH/databases/blob/main/lesson2/Database_normalization.pdf



-- initial table
CREATE TABLE student_courses (
    student_id INT,
    student_name VARCHAR(255),
    student_address VARCHAR(255),
    course_id INT,
    course_name VARCHAR(255),
    instructor_name VARCHAR(255),
    grade CHAR(1)
);
-- 1NF
-- Rule: Eliminate repeating groups by ensuring that each field contains only atomic (indivisible) values and that each record is unique.

-- 2NF
--Rule: Remove partial dependencies. Ensure that all non-key attributes are fully functional dependent on the primary key.

-- 3NF
-- Rule: Remove transitive dependencies. Ensure that non-key attributes are not dependent on other non-key attributes. 

CREATE TABLE student (
    student_id INT unsigned PRIMARY KEY,
    student_name VARCHAR(255) NOT NULL,
    student_address VARCHAR(255) NOT NULL,
);
CREATE TABLE courses (
    course_id INT unsigned PRIMARY KEY,
    course_name VARCHAR(255) UNIQUE NOT NULL,
    instructor_id NOT NULL,
    FOREIGN KEY (instructor_id) REFERENCES instructor(instructor_id),
);
CREATE TABLE student_courses (
    student_id INT unsigned,
    course_id INT unsigned,
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
    grade CHAR(1)
);

CREATE Table instructor (
    instructor_id INT  PRIMARY KEY
    instructor_name VARCHAR(255) NOT NULL
)



-- https://gist.github.com/jpganz

 CREATE TABLE product_float (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10, 5) NOT NULL
);

INSERT INTO product_float (name, price) VALUES ('Product A', 19.99);
INSERT INTO product_float (name, price) VALUES ('Product B', 19.999999);
INSERT INTO product_float (name, price) VALUES ('Product A', 0.01);


CREATE Table student (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);
ALTER Table student ADD COLUMN phone VARCHAR(100);

CREATE TABLE course (
    course_id INT unsigned PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL,
    teacher VARCHAR(100) NOT NULL,
    FOREIGN KEY (instructor_id) REFERENCES instructor(instructor_id),
    description VARCHAR(100) NOT NULL,
    FOREIGN KEY (instructor_id) REFERENCES instructor(instructor_id),
);

CREATE TABLE student_course (
    student_id INT unsigned NOT NULL,
    course_id INT unsigned NOT NULL,
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES student(student_id),
    FOREIGN KEY (course_id) REFERENCES course(course_id)
);

CREATE TABLE score (
    score_id INT unsigned AUTO_INCREMENT PRIMARY KEY,
    student_id INT unsigned NOT NULL,
    course_id INT unsigned NOT NULL,
    score DECIMAL(5,2),
    FOREIGN KEY (student_id) REFERENCES student(student_id),
    FOREIGN KEY (course_id) REFERENCES course(course_id)
);









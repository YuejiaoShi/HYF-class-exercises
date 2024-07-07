
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
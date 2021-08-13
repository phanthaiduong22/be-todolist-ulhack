DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) UNIQUE NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`)
);


DROP TABLE IF EXISTS `tasks`;
CREATE TABLE `tasks` (
  `task_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `task_name` varchar(50)  NOT NULL,
  `is_importance` BOOLEAN,
  `is_done` BOOLEAN DEFAULT FALSE,
  `due_date` varchar(50) NOT NULL,
  FOREIGN KEY (`username`) REFERENCES users(`username`),
  PRIMARY KEY (`task_id`)
);
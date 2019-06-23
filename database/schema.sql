DROP TABLE IF EXISTS `users`;
		
CREATE TABLE `users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` TEXT NOT NULL,
  `phoneNumber` TEXT NULL DEFAULT NULL,
  `minToStation` INT NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `reminders`;

CREATE TABLE `reminders` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `userid` INTEGER NOT NULL,
  `station` TEXT NOT NULL,
  `etd` TEXT NOT NULL,
  PRIMARY KEY (`id`)
);

insert into users (`username`, `phoneNumber`, `minToStation`) VALUES ('test', '+18058764734', '0');
DROP DATABASE IF EXISTS imentor_db;
CREATE DATABASE imentor_db;
USE imentor_db;

DROP TABLE IF EXISTS `imentor_db`.`mentors`;
CREATE TABLE `imentor_db`.`mentors` (
  `mentor_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `mentor_email` VARCHAR(150) NOT NULL,
  `mentor_password` VARCHAR(45) NOT NULL,
  `mentor_first_name` VARCHAR(60) NOT NULL,
  `mentor_last_name` VARCHAR(60) NOT NULL,
  `mentor_user_name` VARCHAR(60) NOT NULL,
  `mentor_genre` VARCHAR(30) NOT NULL,
  `mentor_birthday` DATE NOT NULL,
  `mentor_age` TINYINT(11) NOT NULL,
  `mentor_country` VARCHAR(45) NOT NULL,
  `mentor_avatar` VARCHAR(128) NOT NULL,
  `hour_price` DECIMAL(20) NOT NULL,
  `specialization` VARCHAR(60) NOT NULL,
  `description` TEXT(200) NOT NULL,
  `mentor_CBU` BIGINT(30) NOT NULL,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
  `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`mentor_id`),
  UNIQUE INDEX `mentor_id_UNIQUE` (`mentor_id` ASC) VISIBLE,
  UNIQUE INDEX `mentor_user_name_UNIQUE` (`mentor_user_name` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;

DROP TABLE IF EXISTS `imentor_db`.`roles`;
CREATE TABLE `imentor_db`.`roles` (
  `role_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `role_name` VARCHAR(60) NOT NULL,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
  `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`role_id`),
  UNIQUE INDEX `role_name_UNIQUE` (`role_name` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


DROP TABLE IF EXISTS `users`;
CREATE TABLE `imentor_db`.`users` (
  `user_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_email` VARCHAR(45) NOT NULL,
  `user_password` VARCHAR(45) NOT NULL,
  `user_first_name` VARCHAR(60) NOT NULL,
  `user_last_name` VARCHAR(60) NOT NULL,
  `user_name` VARCHAR(60) NOT NULL,
  `user_genre` VARCHAR(30) NOT NULL,
  `user_birthday` DATE NOT NULL,
  `user_age` TINYINT NOT NULL,
  `user_country` VARCHAR(45) NOT NULL,
  `role_id` int(11) unsigned NOT NULL,
  `user_title` TEXT NOT NULL,
  `user_avatar` VARCHAR(128) NOT NULL,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
  `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `user_email_UNIQUE` (`user_email` ASC) VISIBLE,
  UNIQUE INDEX `user_name_UNIQUE` (`user_name` ASC) VISIBLE,
  INDEX `role_id_idx` (`role_id` ASC) VISIBLE,
  CONSTRAINT `role_id`
    FOREIGN KEY (`role_id`)
    REFERENCES `imentor_db`.`roles` (`role_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;

DROP TABLE IF EXISTS `imentor_db`.`user_mentor`;
CREATE TABLE `imentor_db`.`user_mentor` (
  `user_mentor_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `mentor_id` int(11) unsigned NOT NULL,
  `user_id` int(11) unsigned NOT NULL,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
  `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_mentor_id`),
  UNIQUE INDEX `user_id_UNIQUE` (`user_id` ASC) VISIBLE,
  UNIQUE INDEX `mentor_id_UNIQUE` (`mentor_id` ASC) VISIBLE,
  UNIQUE INDEX `user_mentor_id_UNIQUE` (`user_mentor_id` ASC) VISIBLE,
  INDEX `user_id_idx` (`user_id` ASC, `mentor_id` ASC) VISIBLE,
  CONSTRAINT `mentor_id`
    FOREIGN KEY (`mentor_id`)
    REFERENCES `imentor_db`.`mentors` (`mentor_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `imentor_db`.`users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


DROP TABLE IF EXISTS `imentor_db`.`product_categories`;
CREATE TABLE `imentor_db`.`product_categories` (
  `productCat_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `category_name` VARCHAR(200) NOT NULL,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
  `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`productCat_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


DROP TABLE IF EXISTS `imentor_db`.`products`;
CREATE TABLE `imentor_db`.`products` (
  `product_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `product_name` VARCHAR(200) NOT NULL,
  `productCat_id` int(11) unsigned NOT NULL,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
  `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`product_id`),
  INDEX `productCat_id_idx` (`productCat_id` ASC) VISIBLE,
  CONSTRAINT `productCat_id`
    FOREIGN KEY (`productCat_id`)
    REFERENCES `imentor_db`.`product_categories` (`productCat_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


DROP TABLE IF EXISTS `imentor_db`.`product_mentor`;
CREATE TABLE `imentor_db`.`product_mentor` (
  `product_mentor_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `mentor_id` int(11) unsigned NOT NULL,
  `product_id` int(11) unsigned NOT NULL,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
  `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`product_mentor_id`),
  UNIQUE INDEX `product_id_UNIQUE` (`product_id` ASC) VISIBLE,
  UNIQUE INDEX `mentor_id_UNIQUE` (`mentor_id` ASC) VISIBLE,
  UNIQUE INDEX `product_mentor_id_UNIQUE` (`product_mentor_id` ASC) VISIBLE,
  INDEX `product_id_idx` (`product_id` ASC, `mentor_id` ASC) VISIBLE,
  CONSTRAINT `product_id`
    FOREIGN KEY (`product_id`)
    REFERENCES `imentor_db`.`products` (`product_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `mentorProduct_id`
    FOREIGN KEY (`mentor_id`)
    REFERENCES `imentor_db`.`mentors` (`mentor_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


DROP TABLE IF EXISTS `imentor_db`.`bookings`;
CREATE TABLE `imentor_db`.`bookings` (
  `booking_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) unsigned NOT NULL,
  `product_id` int(11) unsigned NOT NULL,
  `duration_time` TIMESTAMP NOT NULL,
  `price` DECIMAL NULL,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
  `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`booking_id`),
  UNIQUE INDEX `booking_id_UNIQUE` (`booking_id` ASC) VISIBLE,
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  INDEX `product_id_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `userBooking_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `imentor_db`.`users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Bookingproduct_id`
    FOREIGN KEY (`product_id`)
    REFERENCES `imentor_db`.`products` (`product_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


DROP TABLE IF EXISTS `imentor_db`.`invoices`;
CREATE TABLE `imentor_db`.`invoices` (
  `invoice_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `booking_id` int(11) unsigned NOT NULL,
  `invoice_date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`invoice_id`),
  INDEX `booking_id_idx` (`booking_id` ASC) VISIBLE,
  CONSTRAINT `bookingInvoice_id`
    FOREIGN KEY (`booking_id`)
    REFERENCES `imentor_db`.`bookings` (`booking_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;

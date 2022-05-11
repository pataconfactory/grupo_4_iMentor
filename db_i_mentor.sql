/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Creación de la Base de Datos

DROP DATABASE IF EXISTS imentor_db;
CREATE DATABASE imentor_db;
USE imentor_db;

--
-- Table structure for table `mentors`
--

DROP TABLE IF EXISTS `imentor_db`.`mentors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `imentor_db`.`mentors` (
  `mentor_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `description` TEXT NOT NULL,
  `hour_price` DECIMAL(20) NOT NULL,
  `punctuation` INT(10) NULL DEFAULT NULL,
  `CBU` VARCHAR(50) NULL,
  `bank` VARCHAR(50) NULL DEFAULT NULL,
  `created_at` TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` DATETIME ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`mentor_id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8 COLLATE = utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentors`
--

LOCK TABLES `imentor_db`.`mentors` WRITE;
/*!40000 ALTER TABLE `mentors` DISABLE KEYS */;
INSERT INTO `imentor_db`.`mentors` 
VALUES (1,'Hola soy Lucas Sequeira, soy Argentino y trabajo como desarrollador hace 5 años. Me apasiona la tecnologia y entender como funcionan las cosas. Soy un entusiasta del mundo crypto como proyecto y me gusta andar en bici!',1500,5,'7854236900145876500321','HSBC',NULL,NULL),
(2,'Soy Patricia de Ciudad de Mexico y trabajo como Product Owner desde hace varios años. Me apasiona el mundo de las IT, soy autodidacta y me gusta conocer nuevas gastronomías!',1000,4,'8569745210365000258752','BBVA',NULL,NULL),
(3,'Hi! mi nombre es Pedro Gonzalez soy de Colombia, trabajo como Ingeniero en Sistemas en una empresa importante desde hace algunos años, siempre estoy aprendiendo cosas nuevas en el mundo de las ITs y me apasiona enseñarles a mis estudiantes!',1300,5,'5873695210045600014589','BBVA',NULL,NULL),
(4,'Hola mi nombre es Juan soy Colombiano, trabajo como Digital Technology Teacher desde hace 5 años. La programación cambió mi vida. Enseño haciendo!!.',1300,4,'56986321540000047800025','Galicia',NULL,NULL),
(5,'Hola mi nombre es Victoria, soy de Argentina, trabajo como Diseñadora Gráfica desde hace 4 años, me apasiona el diseño y poder brindar capacitación útil es mi manera significativa de ser parte de la comunidad creativa.',1000,4,'7854636985000654789100','HSBC',NULL,NULL),
(6,'Hi Dev! mi nombre es Raiza Colmenares soy de Venezuela, trabajo como Scrum Master y Team Leader en una empresa de desarrollo de software. Soy una de esas personas a las que les gusta aprender de todo y, también, me gusta enseñar lo que he aprendido. ',1500,4,'7854236900045800698532','Santander Río',NULL,NULL),
(7,'Mi nombre es Susana,soy de Argentina,tengo más de 7 años de experiencia en el mundo del Marketing Digital. Actualmente me dedico a la Dirección de Proyectos y tengo negocios en el rubro de Educación Digital y Marketing de Afiliados',1000,4,'5698630000789001456808','Galicia',NULL,NULL);
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `imentor_db`.`roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `imentor_db`.`roles` (
  `role_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `role_name` VARCHAR(50) NOT NULL UNIQUE,
  `created_at` TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` DATETIME ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`role_id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8 COLLATE = utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `imentor_db`.`roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `imentor_db`.`roles` 
VALUES (1,'Usuario',NULL,NULL),
(2,'Administrador',NULL,NULL),
(3,'Mentor', NULL,NULL);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `imentor_db`.`users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `imentor_db`.`users` (
  `user_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(50) NOT NULL,
  `last_name` VARCHAR(50) NOT NULL,
  `user_name` VARCHAR(50) NOT NULL UNIQUE,
  `email` VARCHAR(100) NOT NULL UNIQUE,
  `birthday` DATE NOT NULL,
  `age` INT(10) NOT NULL,
  `genre` VARCHAR(50) NOT NULL,
  `country` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  `title` VARCHAR(100) NOT NULL,
  `avatar` VARCHAR(100) NOT NULL,
  `role_id` int(10) UNSIGNED NOT NULL,
  `mentor_id` int(10) UNSIGNED NULL,
  `created_at` TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` DATETIME ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  KEY `users__role_id_foreign` (`role_id`),
  KEY `users__mentor_id_foreign` (`mentor_id`),
  CONSTRAINT `users__role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `imentor_db`.`roles` (`role_id`),
  CONSTRAINT `users__mentor_id_foreign` FOREIGN KEY (`mentor_id`) REFERENCES `imentor_db`.`mentors` (`mentor_id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8 COLLATE = utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `imentor_db`.`users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `imentor_db`.`users` 
VALUES (1,'Quizaira','Rodriguez','Quiz_92','kiss02andre@gmail.com','1992-08-06',29,'Femenino','Venezuela','$2a$10$7VKydN2X/gUayOv3kBxPpOQMoo8M.lNFfL5sQI7Tno4Gdfc5IGHfW','Desarrollador Full Stack Trainee','user-1649510591616.png',2,NULL,NULL,NULL),
(2,'Patricia','Williams','PatriWill','pattywilliams20@gmail.com','1992-03-20',30,'Femenino','Venezuela','$2a$10$FaWw9UGapO6GZEQXfhA77uKO66VwsFca9c/nb8rHPA4QGtCEPRmVm','Profesor','user-1650214401676.jpg',2,NULL,NULL,NULL),
(3,'Lucas','Sequeira','lucas_sequeira','lucassequeira@gmail.com','1978-04-19',43,'Masculino','Argentina','$2a$10$mydM.Qj01C5qnDwpshIvduySTA.YntlD9x/HMrESFXCqjWcx98V5y','Desarrollador Web Full Stack','mentor-1650563693435.png',3,1,NULL,NULL),
(4,'Patricia','Garza','patricia_garza','patriciagarza@gmail.com','1987-09-24',34,'Femenino','Mexico','$2a$10$I/2YlDg9dyjtQlwGq3aaS.l9opnyEhTIoYtpN/OIHFTUh8TowrY1i','Analista Funcional de Sistemas','mentor-1650563807291.jpg',3,2,NULL,NULL),
(5,'Pedro','Gonzalez','pedro_gonzalez','pedrogonzalez@gmail.com','1967-01-15',55,'Masculino','Colombia','$2a$10$ngI.beg8/dB.79HOjeAoQ.Ey6xZ6Mv6n.mUe62uzSL2MwG75.Ub0C','Ingeniero en Sistemas','mentor-1650564026782.jpg',3,3,NULL,NULL),
(6,'Juan','Juanes','juan_juanes','juanjuanes@gmail.com','1974-12-03',47,'Masculino','Colombia','$2a$10$.lIDoY30lhS.caWYuLoJre0QjcMMaSnbP85ny1YzQnI0AS.GFB/xS','Digital Technology Teacher','mentor-1650564299509.jpg',3,4,NULL,NULL),
(7,'Victoria','Defagot','victoria_defagot','victoriadefagot@gmail.com','1996-03-03',26,'Femenino','Argentina','$2a$10$oFYPaNhrJwWiCZsyFPlXIOUIL.xJwYiTTo06e/BaEQrYOVItinnge','Diseñadora Gráfica','mentor-1650564116740.jpg',3,5,NULL,NULL),
(8,'Raiza','Colmenares','rapico72','rapico72@gmail.com','1972-12-10',49,'Femenino','Venezuela','$2a$10$UqPL6kK.vACzEfNk.fZiiOb2W4sg071ygt2GQNEjtvdT/Xx.BNi4C','Desarrolladora Full Stack','mentor-1650568878221.jpg',3,6,NULL,NULL),
(9,'Susana','Roca','susana_roca','roca_susana@gmail.com','1990-04-21',31,'Femenino','Argentina','$2a$10$DKxjcyWHarHGlTqv32UP9OIQwTSQniLFn.jkGOqUpoA/aBDaFriCK','Community Manager','mentor-Patricia-Williams.jpg',3,7,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_categories`
--

DROP TABLE IF EXISTS `imentor_db`.`product_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `imentor_db`.`product_categories` (
  `product_category_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `category_name` VARCHAR(100) NOT NULL,
  `created_at` TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` DATETIME ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`product_category_id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8 COLLATE = utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_categories`
--

LOCK TABLES `imentor_db`.`product_categories` WRITE;
/*!40000 ALTER TABLE `product_categories` DISABLE KEYS */;
INSERT INTO `imentor_db`.`product_categories` 
VALUES (1,'Front-End',NULL,NULL),
(2,'Back-End',NULL,NULL),
(3,'UI/UX',NULL,NULL),
(4,'Base de Datos',NULL,NULL),
(5,'Marketing Digital',NULL,NULL),
(6,'Análisis de Datos',NULL,NULL);
/*!40000 ALTER TABLE `product_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `imentor_db`.`products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `imentor_db`.`products` (
  `product_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `product_name` VARCHAR(300) NOT NULL,
  `product_category_id` INT(10) UNSIGNED NOT NULL,
  `mentor_id` INT(10) UNSIGNED NOT NULL,
  `user_id` INT(10) UNSIGNED NOT NULL,
  `product_description` TEXT NOT NULL,
  `day` VARCHAR(50) NOT NULL,
  `time` TIME NOT NULL,
  `price` DECIMAL(20) NOT NULL,
  `duration` INT(10) UNSIGNED NOT NULL DEFAULT 1,
  `product_image` VARCHAR(100) NOT NULL,
  `created_at` TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` DATETIME ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`product_id`),
  KEY `products_product_category_id_foreign` (`product_category_id`),
  KEY `products_mentor_id_foreign` (`mentor_id`),
  KEY `products_user_id_foreign` (`user_id`),
  CONSTRAINT `products_product_category_id_foreign` FOREIGN KEY (`product_category_id`) REFERENCES `imentor_db`.`product_categories` (`product_category_id`),
  CONSTRAINT `products_mentor_id_foreign` FOREIGN KEY (`mentor_id`) REFERENCES `imentor_db`.`mentors` (`mentor_id`),
  CONSTRAINT `products_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `imentor_db`.`users` (`user_id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8 COLLATE = utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `imentor_db`.`products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `imentor_db`.`products` 
VALUES (1,'CSS: Diseño Web desde cero a avanzado',1,1,3,'Asesorate sobre CSS desde los fundamentos hasta temas intermedios y avanzados para crear sitios y aplicaciones Web increíbles!. Crea aplicaciones Web utilizando CSS (Cascading Style Sheets) con las últimas versiones al día de hoy.','Lunes','18:00:00',1950,1,'product-aprender-css.jpg',NULL,NULL),
(2,'CSS: Diseño Web desde cero a avanzado',1,1,3,'Asesorate sobre CSS desde los fundamentos hasta temas intermedios y avanzados para crear sitios y aplicaciones Web increíbles!. Crea aplicaciones Web utilizando CSS (Cascading Style Sheets) con las últimas versiones al día de hoy.','Miércoles','18:00:00',1950,1,'product-aprender-css.jpg',NULL,NULL),
(3,'CSS: Diseño Web desde cero a avanzado',1,1,3,'Asesorate sobre CSS desde los fundamentos hasta temas intermedios y avanzados para crear sitios y aplicaciones Web increíbles!. Crea aplicaciones Web utilizando CSS (Cascading Style Sheets) con las últimas versiones al día de hoy.','Viernes','18:00:00',1950,1,'product-aprender-css.jpg',NULL,NULL),
(4,'CSS: HTML5: Diseño Web desde cero a avanzado',1,2,4,'Asesorate sobre HTML5 desde los fundamentos hasta temas intermedios y avanzados para crear sitios y aplicaciones Web increíbles!. Crea páginas basadas en las mejores prácticas con HTML','Martes','10:00:00',1300,1,'product-html5.jpg',NULL,NULL),
(5,'CSS: HTML5: Diseño Web desde cero a avanzado',1,2,4,'Asesorate sobre HTML5 desde los fundamentos hasta temas intermedios y avanzados para crear sitios y aplicaciones Web increíbles!. Crea páginas basadas en las mejores prácticas con HTML','Jueves','10:00:00',1300,1,'product-html5.jpg',NULL,NULL),
(6,'CSS: HTML5: Diseño Web desde cero a avanzado',1,2,4,'Asesorate sobre HTML5 desde los fundamentos hasta temas intermedios y avanzados para crear sitios y aplicaciones Web increíbles!. Crea páginas basadas en las mejores prácticas con HTML','Sábado','10:00:00',1300,1,'product-html5.jpg',NULL,NULL),
(7,'Node.js: De cero a experto',2,6,8,'Aprende a crear aplicaciones Back-End con Node.js y Express desde cero con ejemplos prácticos, buenas practicas de programación y tips que te ayudarán a convertirte en un experto en el desarrollo Back-End','Lunes','20:00:00',1950,1,'product-nodejs.jpg',NULL,NULL),
(8,'Node.js: De cero a experto',2,6,8,'Aprende a crear aplicaciones Back-End con Node.js y Express desde cero con ejemplos prácticos, buenas practicas de programación y tips que te ayudarán a convertirte en un experto en el desarrollo Back-End','Miércoles','20:00:00',1950,1,'product-nodejs.jpg',NULL,NULL),
(9,'Node.js: De cero a experto',2,6,8,'Aprende a crear aplicaciones Back-End con Node.js y Express desde cero con ejemplos prácticos, buenas practicas de programación y tips que te ayudarán a convertirte en un experto en el desarrollo Back-End','Viernes','20:00:00',1950,1,'product-nodejs.jpg',NULL,NULL),
(10,'Base de datos de MySQL y SQL Server desde cero a full stack',4,3,5,'Asesoría sobre como gestionar base de datos en los servidores de MySQL y SQL Server. Creación, intercalación y seguridad de base de datos.','Lunes','19:00:00',1690,1,'product-sql-and-mysql.jpg',NULL,NULL),
(11,'Base de datos de MySQL y SQL Server desde cero a full stack',4,3,5,'Asesoría sobre como gestionar base de datos en los servidores de MySQL y SQL Server. Creación, intercalación y seguridad de base de datos.','Miercoles','19:00:00',1690,1,'product-sql-and-mysql.jpg',NULL,NULL),
(12,'Base de datos de MySQL y SQL Server desde cero a full stack',4,3,5,'Asesoría sobre como gestionar base de datos en los servidores de MySQL y SQL Server. Creación, intercalación y seguridad de base de datos.','Viernes','19:00:00',1690,1,'product-sql-and-mysql.jpg',NULL,NULL),
(13,'Diseño Web desde cero a avanzado',3,5,7,'Asesoría sobre como utilizar herramientas de edición de código de un modo más ágil. Definir el diseño y usabilidad de una página web. Hacer diseño Responsive Design y Mobile First.','Martes','12:00:00',1300,1,'product-ux-ui.png',NULL,NULL),
(14,'Diseño Web desde cero a avanzado',3,5,7,'Asesoría sobre como utilizar herramientas de edición de código de un modo más ágil. Definir el diseño y usabilidad de una página web. Hacer diseño Responsive Design y Mobile First.','Jueves','12:00:00',1300,1,'product-ux-ui.png',NULL,NULL),
(15,'Diseño Web desde cero a avanzado',3,5,7,'Asesoría sobre como utilizar herramientas de edición de código de un modo más ágil. Definir el diseño y usabilidad de una página web. Hacer diseño Responsive Design y Mobile First.','Sábado','12:00:00',1300,1,'product-ux-ui.png',NULL,NULL),
(16,'Marketing Digital en el 2022',5,7,9,'Asesoría sobre cada uno de los elementos claves del marketing digital desde cero hasta un nivel experto con lo cual, podrás abrirte paso a través de los negocios por Internet y ver las enormes ventajas que tiene respecto a un negocio tradicional.','Martes','21:00:00',1300,1,'product-marketing-digital.jpg',NULL,NULL),
(17,'Marketing Digital en el 2022',5,7,9,'Asesoría sobre cada uno de los elementos claves del marketing digital desde cero hasta un nivel experto con lo cual, podrás abrirte paso a través de los negocios por Internet y ver las enormes ventajas que tiene respecto a un negocio tradicional.','Jueves','21:00:00',1300,1,'product-marketing-digital.jpg',NULL,NULL),
(18,'Marketing Digital en el 2022',5,7,9,'Asesoría sobre cada uno de los elementos claves del marketing digital desde cero hasta un nivel experto con lo cual, podrás abrirte paso a través de los negocios por Internet y ver las enormes ventajas que tiene respecto a un negocio tradicional.','Sábado','21:00:00',1300,1,'product-marketing-digital.jpg',NULL,NULL),
(19,'Análisis de Datos y Gráficos con Python: Panda y Matplotlib',6,4,6,'Análisis de datos con la librería Pandas y la librería Matplotlib de Python. La primera herramienta permite moldear los datos en base a lo que se quiere analizar y así visualizarlos de una mejor manera. Y la segunda herramienta, permite graficar a nuestro gusto y de diferentes maneras, los datos que se quieren analizar y representar.','Lunes','17:00:00',1690,1,'product-codpython.jpg',NULL,NULL),
(20,'Análisis de Datos y Gráficos con Python: Panda y Matplotlib',6,4,6,'Análisis de datos con la librería Pandas y la librería Matplotlib de Python. La primera herramienta permite moldear los datos en base a lo que se quiere analizar y así visualizarlos de una mejor manera. Y la segunda herramienta, permite graficar a nuestro gusto y de diferentes maneras, los datos que se quieren analizar y representar.','Miércoles','17:00:00',1690,1,'product-codpython.jpg',NULL,NULL),
(21,'Análisis de Datos y Gráficos con Python: Panda y Matplotlib',6,4,6,'Análisis de datos con la librería Pandas y la librería Matplotlib de Python. La primera herramienta permite moldear los datos en base a lo que se quiere analizar y así visualizarlos de una mejor manera. Y la segunda herramienta, permite graficar a nuestro gusto y de diferentes maneras, los datos que se quieren analizar y representar.','Viernes','17:00:00',1690,1,'product-codpython.jpg',NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bookings`
--

DROP TABLE IF EXISTS `imentor_db`.`bookings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `imentor_db`.`bookings` (
  `booking_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` INT(10) UNSIGNED NOT NULL,
  `product_id` INT(10) UNSIGNED NOT NULL,
  `quantity` INT(50) UNSIGNED NOT NULL DEFAULT 1,
  `price_to_pay` DECIMAL(20) NOT NULL,
  `created_at` TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` DATETIME ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`booking_id`),
  CONSTRAINT `bookings_userBooking_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `imentor_db`.`users` (`user_id`),
  CONSTRAINT `bookings_Bookingproduct_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `imentor_db`.`products` (`product_id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8 COLLATE = utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table bookings`
--

LOCK TABLES `imentor_db`.`bookings` WRITE;
/*!40000 ALTER TABLE `bookings` DISABLE KEYS */;
/*!40000 ALTER TABLE `bookings` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `imentor_db`.`invoices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `imentor_db`.`invoices` (
  `invoice_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `booking_id` INT(10) UNSIGNED NOT NULL,
  `invoice_date` DATETIME ON UPDATE CURRENT_TIMESTAMP,
  `total` DECIMAL(20) NOT NULL,
  `created_at` TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` DATETIME ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`invoice_id`),
  CONSTRAINT `invoices_bookingInvoice_id_foreign` FOREIGN KEY (`booking_id`) REFERENCES `imentor_db`.`bookings` (`booking_id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8 COLLATE = utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table bookings`
--

LOCK TABLES `imentor_db`.`invoices` WRITE;
/*!40000 ALTER TABLE `invoices` DISABLE KEYS */;
/*!40000 ALTER TABLE `invoices` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

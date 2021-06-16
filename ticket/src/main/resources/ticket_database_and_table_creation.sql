CREATE DATABASE  IF NOT EXISTS `ticket_registry`;
USE `ticket_registry`;
--
-- Table structure for table `ticket`
--
DROP TABLE IF EXISTS `ticket`;


CREATE TABLE `ticket` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `movie_title` varchar(45) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  `time` varchar(45) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

INSERT INTO `ticket` VALUES 
(1,'headlight', 10, 7, 50),
(2,'taillight', 8, 6, 30),
(3,'windshield', 20, 1, 20),
(4,'bulb', 4, 1, 15),
(5,'air filter', 25, 25, 40)



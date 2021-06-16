CREATE DATABASE  IF NOT EXISTS `parts_registry`;
USE `parts_registry`;
--
-- Table structure for table `parts`
--
DROP TABLE IF EXISTS `parts`;


CREATE TABLE `parts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `parts_name` varchar(45) DEFAULT NULL, 
  `length` int(11) DEFAULT NULL,
  `width` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

INSERT INTO `parts` VALUES 
(1,'headlight', 10, 7, 50),
(2,'taillight', 8, 6, 30),
(3,'windshield', 20, 1, 20),
(4,'bulb', 4, 1, 15),
(5,'air filter', 25, 25, 40)



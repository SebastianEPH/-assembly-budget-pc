-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               8.0.17 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table proforma.brand
CREATE TABLE IF NOT EXISTS `brand` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  `brand_ram` bit(1) DEFAULT NULL,
  `brand_processor` bit(1) DEFAULT NULL,
  `brand_case` bit(1) DEFAULT NULL,
  `brand_powersupply` bit(1) DEFAULT NULL,
  `brand_refrigeration` bit(1) DEFAULT NULL,
  `brand_graphiccard` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- Dumping data for table proforma.brand: ~23 rows (approximately)
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
INSERT INTO `brand` (`id`, `name`, `brand_ram`, `brand_processor`, `brand_case`, `brand_powersupply`, `brand_refrigeration`, `brand_graphiccard`) VALUES
	(1, 'MSI', NULL, NULL, NULL, NULL, NULL, NULL),
	(2, 'Gigabyte', NULL, NULL, NULL, NULL, NULL, NULL),
	(3, 'Gigabyte Aorus', NULL, NULL, NULL, NULL, NULL, NULL),
	(4, 'Asus', NULL, NULL, NULL, NULL, NULL, NULL),
	(5, 'Asus Rog Strig', NULL, NULL, NULL, NULL, NULL, NULL),
	(6, 'T-forte', NULL, NULL, NULL, NULL, NULL, NULL),
	(7, 'Kinstong', NULL, NULL, NULL, NULL, NULL, NULL),
	(8, 'WesterDigital', NULL, NULL, NULL, NULL, NULL, NULL),
	(9, 'Cougar', NULL, NULL, NULL, NULL, NULL, NULL),
	(10, 'BenQ', NULL, NULL, NULL, NULL, NULL, NULL),
	(11, 'Biostar', NULL, NULL, NULL, NULL, NULL, NULL),
	(12, 'ColerMaster', NULL, NULL, NULL, NULL, NULL, NULL),
	(13, 'Corsair', NULL, NULL, NULL, NULL, NULL, NULL),
	(14, 'Creative', NULL, NULL, NULL, NULL, NULL, NULL),
	(15, 'EVGA', NULL, NULL, NULL, NULL, NULL, NULL),
	(16, 'Logitech', NULL, NULL, NULL, NULL, NULL, NULL),
	(19, 'Patriot', NULL, NULL, NULL, NULL, NULL, NULL),
	(20, 'Razer', NULL, NULL, NULL, NULL, NULL, NULL),
	(21, 'Samsung', NULL, NULL, NULL, NULL, NULL, NULL),
	(22, 'Seagate', NULL, NULL, NULL, NULL, NULL, NULL),
	(23, 'Seasonic', NULL, NULL, NULL, NULL, NULL, NULL),
	(24, 'TeamGroup', NULL, NULL, NULL, NULL, NULL, NULL),
	(25, 'Termaltake', NULL, NULL, NULL, NULL, NULL, NULL);
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;

-- Dumping structure for table proforma.cabinet
CREATE TABLE IF NOT EXISTS `cabinet` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) DEFAULT NULL,
  `link` varchar(512) DEFAULT NULL,
  `brand` int(11) DEFAULT NULL,
  `store` int(11) DEFAULT NULL,
  `proforma_id` int(11) DEFAULT NULL,
  `sol` decimal(20,2) DEFAULT NULL,
  `dol` decimal(20,2) DEFAULT NULL,
  `item_active` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_case_brand` (`brand`),
  KEY `FK_case_store` (`store`),
  KEY `FK_case_proforma` (`proforma_id`),
  CONSTRAINT `FK_case_brand` FOREIGN KEY (`brand`) REFERENCES `brand` (`id`),
  CONSTRAINT `FK_case_proforma` FOREIGN KEY (`proforma_id`) REFERENCES `proforma` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_case_store` FOREIGN KEY (`store`) REFERENCES `store` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table proforma.cabinet: ~0 rows (approximately)
/*!40000 ALTER TABLE `cabinet` DISABLE KEYS */;
/*!40000 ALTER TABLE `cabinet` ENABLE KEYS */;

-- Dumping structure for table proforma.disk
CREATE TABLE IF NOT EXISTS `disk` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `link` varchar(50) DEFAULT NULL,
  `dol` varchar(50) DEFAULT NULL,
  `sol` varchar(50) DEFAULT NULL,
  `brand` int(11) DEFAULT NULL,
  `store` int(11) DEFAULT NULL,
  `item_active` tinyint(1) DEFAULT NULL,
  `proforma_id` int(11) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_disk_brand` (`brand`),
  KEY `FK_disk_store` (`store`),
  KEY `FK_disk_disk_type` (`type`),
  KEY `FK_disk_disk_size` (`size`),
  KEY `FK_disk_proforma` (`proforma_id`),
  CONSTRAINT `FK_disk_brand` FOREIGN KEY (`brand`) REFERENCES `brand` (`id`),
  CONSTRAINT `FK_disk_disk_size` FOREIGN KEY (`size`) REFERENCES `disk_size` (`id`),
  CONSTRAINT `FK_disk_disk_type` FOREIGN KEY (`type`) REFERENCES `disk_type` (`id`),
  CONSTRAINT `FK_disk_proforma` FOREIGN KEY (`proforma_id`) REFERENCES `proforma` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_disk_store` FOREIGN KEY (`store`) REFERENCES `store` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table proforma.disk: ~0 rows (approximately)
/*!40000 ALTER TABLE `disk` DISABLE KEYS */;
/*!40000 ALTER TABLE `disk` ENABLE KEYS */;

-- Dumping structure for table proforma.disk_size
CREATE TABLE IF NOT EXISTS `disk_size` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `size` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table proforma.disk_size: ~8 rows (approximately)
/*!40000 ALTER TABLE `disk_size` DISABLE KEYS */;
INSERT INTO `disk_size` (`id`, `size`) VALUES
	(1, '250GB'),
	(2, '500GB'),
	(3, '750GB'),
	(4, '1TB'),
	(5, '2TB'),
	(6, '4TB'),
	(7, '8TB'),
	(8, '16TB');
/*!40000 ALTER TABLE `disk_size` ENABLE KEYS */;

-- Dumping structure for table proforma.disk_type
CREATE TABLE IF NOT EXISTS `disk_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table proforma.disk_type: ~3 rows (approximately)
/*!40000 ALTER TABLE `disk_type` DISABLE KEYS */;
INSERT INTO `disk_type` (`id`, `type`) VALUES
	(1, 'SSD'),
	(2, 'HDD'),
	(3, 'SSD NVME');
/*!40000 ALTER TABLE `disk_type` ENABLE KEYS */;

-- Dumping structure for table proforma.display
CREATE TABLE IF NOT EXISTS `display` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `link` varchar(512) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `dol` decimal(20,2) DEFAULT NULL,
  `sol` decimal(20,2) DEFAULT NULL,
  `store` int(11) DEFAULT NULL,
  `brand` int(11) DEFAULT NULL,
  `proforma_id` int(11) DEFAULT NULL,
  `item_active` tinyint(1) DEFAULT NULL,
  `panel` int(11) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_display_store` (`store`),
  KEY `FK_display_brand` (`brand`),
  KEY `FK_display_display_panel` (`panel`),
  KEY `FK_display_display_size` (`size`),
  KEY `FK_display_proforma` (`proforma_id`),
  CONSTRAINT `FK_display_brand` FOREIGN KEY (`brand`) REFERENCES `brand` (`id`),
  CONSTRAINT `FK_display_display_panel` FOREIGN KEY (`panel`) REFERENCES `display_panel` (`id`),
  CONSTRAINT `FK_display_display_size` FOREIGN KEY (`size`) REFERENCES `display_size` (`id`),
  CONSTRAINT `FK_display_proforma` FOREIGN KEY (`proforma_id`) REFERENCES `proforma` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_display_store` FOREIGN KEY (`store`) REFERENCES `store` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table proforma.display: ~0 rows (approximately)
/*!40000 ALTER TABLE `display` DISABLE KEYS */;
/*!40000 ALTER TABLE `display` ENABLE KEYS */;

-- Dumping structure for table proforma.display_panel
CREATE TABLE IF NOT EXISTS `display_panel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `panel` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table proforma.display_panel: ~4 rows (approximately)
/*!40000 ALTER TABLE `display_panel` DISABLE KEYS */;
INSERT INTO `display_panel` (`id`, `panel`) VALUES
	(1, 'IPS'),
	(2, 'VA'),
	(3, 'TN'),
	(4, 'Other');
/*!40000 ALTER TABLE `display_panel` ENABLE KEYS */;

-- Dumping structure for table proforma.display_size
CREATE TABLE IF NOT EXISTS `display_size` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `size` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table proforma.display_size: ~9 rows (approximately)
/*!40000 ALTER TABLE `display_size` DISABLE KEYS */;
INSERT INTO `display_size` (`id`, `size`) VALUES
	(1, '18.5"'),
	(2, '19"'),
	(3, '20"'),
	(4, '21"'),
	(5, '23"'),
	(6, '24"'),
	(7, '27"'),
	(8, '32"'),
	(9, '42"');
/*!40000 ALTER TABLE `display_size` ENABLE KEYS */;

-- Dumping structure for table proforma.graphicscard
CREATE TABLE IF NOT EXISTS `graphicscard` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `memory` int(11) DEFAULT NULL,
  `sol` decimal(20,2) DEFAULT NULL,
  `dol` decimal(20,2) DEFAULT NULL,
  `link` varchar(256) DEFAULT NULL,
  `store` int(11) DEFAULT NULL,
  `brand` int(11) DEFAULT NULL,
  `proforma_id` int(11) DEFAULT NULL,
  `item_active` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_grapichscard_store` (`store`),
  KEY `FK_grapichscard_brand` (`brand`),
  KEY `FK_grapichscard_memory_ram_size` (`memory`),
  KEY `FK_grapichscard_proforma` (`proforma_id`),
  CONSTRAINT `FK_grapichscard_brand` FOREIGN KEY (`brand`) REFERENCES `brand` (`id`),
  CONSTRAINT `FK_grapichscard_memory_ram_size` FOREIGN KEY (`memory`) REFERENCES `memory_ram_size` (`id`),
  CONSTRAINT `FK_grapichscard_proforma` FOREIGN KEY (`proforma_id`) REFERENCES `proforma` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_grapichscard_store` FOREIGN KEY (`store`) REFERENCES `store` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table proforma.graphicscard: ~0 rows (approximately)
/*!40000 ALTER TABLE `graphicscard` DISABLE KEYS */;
/*!40000 ALTER TABLE `graphicscard` ENABLE KEYS */;

-- Dumping structure for table proforma.keyboard
CREATE TABLE IF NOT EXISTS `keyboard` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) DEFAULT NULL,
  `brand` int(11) DEFAULT NULL,
  `store` int(11) DEFAULT NULL,
  `link` varchar(512) DEFAULT NULL,
  `dol` decimal(20,2) DEFAULT NULL,
  `sol` decimal(20,2) DEFAULT NULL,
  `item_active` tinyint(1) DEFAULT NULL,
  `proforma_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_keyboard_brand` (`brand`),
  KEY `FK_keyboard_store` (`store`),
  KEY `FK_keyboard_proforma` (`proforma_id`),
  CONSTRAINT `FK_keyboard_brand` FOREIGN KEY (`brand`) REFERENCES `brand` (`id`),
  CONSTRAINT `FK_keyboard_proforma` FOREIGN KEY (`proforma_id`) REFERENCES `proforma` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_keyboard_store` FOREIGN KEY (`store`) REFERENCES `store` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table proforma.keyboard: ~0 rows (approximately)
/*!40000 ALTER TABLE `keyboard` DISABLE KEYS */;
/*!40000 ALTER TABLE `keyboard` ENABLE KEYS */;

-- Dumping structure for table proforma.memory_ram
CREATE TABLE IF NOT EXISTS `memory_ram` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) DEFAULT NULL,
  `item_active` tinyint(1) DEFAULT NULL,
  `proforma_id` int(11) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `freq` int(11) DEFAULT NULL,
  `brand` int(11) DEFAULT NULL,
  `dol` decimal(20,2) DEFAULT '0.00',
  `sol` decimal(20,2) DEFAULT '0.00',
  `store` int(11) DEFAULT NULL,
  `link` varchar(800) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_memory_ram_memory_ram_type` (`type`),
  KEY `FK_memory_ram_memory-ram_size` (`size`),
  KEY `FK_memory_ram_memory_ram_frequency` (`freq`),
  KEY `FK_memory_ram_brand` (`brand`),
  KEY `FK_memory_ram_store` (`store`),
  KEY `FK_memory_ram_proforma` (`proforma_id`),
  CONSTRAINT `FK_memory_ram_brand` FOREIGN KEY (`brand`) REFERENCES `brand` (`id`),
  CONSTRAINT `FK_memory_ram_memory-ram_size` FOREIGN KEY (`size`) REFERENCES `memory_ram_size` (`id`),
  CONSTRAINT `FK_memory_ram_memory_ram_frequency` FOREIGN KEY (`freq`) REFERENCES `memory_ram_frequency` (`id`),
  CONSTRAINT `FK_memory_ram_memory_ram_type` FOREIGN KEY (`type`) REFERENCES `memory_ram_type` (`id`),
  CONSTRAINT `FK_memory_ram_proforma` FOREIGN KEY (`proforma_id`) REFERENCES `proforma` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_memory_ram_store` FOREIGN KEY (`store`) REFERENCES `store` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1240 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table proforma.memory_ram: ~0 rows (approximately)
/*!40000 ALTER TABLE `memory_ram` DISABLE KEYS */;
/*!40000 ALTER TABLE `memory_ram` ENABLE KEYS */;

-- Dumping structure for table proforma.memory_ram_frequency
CREATE TABLE IF NOT EXISTS `memory_ram_frequency` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `condition` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_memory_ram_frequency_memory_ram_type` (`condition`),
  CONSTRAINT `FK_memory_ram_frequency_memory_ram_type` FOREIGN KEY (`condition`) REFERENCES `memory_ram_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table proforma.memory_ram_frequency: ~22 rows (approximately)
/*!40000 ALTER TABLE `memory_ram_frequency` DISABLE KEYS */;
INSERT INTO `memory_ram_frequency` (`id`, `name`, `condition`) VALUES
	(1, '800Mhz', 1),
	(2, '800Mhz', 2),
	(3, '1066Mhz', 2),
	(4, '1333Mhz', 2),
	(5, '1600Mhz', 2),
	(6, '1866Mhz', 2),
	(7, '2133Mhz', 2),
	(8, '2400Mhz', 2),
	(9, '1600Mhz', 3),
	(10, '1866Mhz', 3),
	(11, '2133Mhz', 3),
	(12, '2400Mhz', 3),
	(13, '2666Mhz', 3),
	(14, '3000Mhz', 3),
	(15, '3200Mhz', 3),
	(16, '3600Mhz', 3),
	(17, '4000Mhz', 3),
	(18, '4000Mhz', 5),
	(19, '4800Mhz', 5),
	(20, '5200Mhz', 5),
	(21, '5600Mhz', 5),
	(22, '6400Mhz', 5);
/*!40000 ALTER TABLE `memory_ram_frequency` ENABLE KEYS */;

-- Dumping structure for table proforma.memory_ram_size
CREATE TABLE IF NOT EXISTS `memory_ram_size` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table proforma.memory_ram_size: ~7 rows (approximately)
/*!40000 ALTER TABLE `memory_ram_size` DISABLE KEYS */;
INSERT INTO `memory_ram_size` (`id`, `name`) VALUES
	(1, '2GB'),
	(2, '4GB'),
	(3, '8GB'),
	(4, '16GB'),
	(5, '32GB'),
	(6, '62GB'),
	(7, '1GB');
/*!40000 ALTER TABLE `memory_ram_size` ENABLE KEYS */;

-- Dumping structure for table proforma.memory_ram_type
CREATE TABLE IF NOT EXISTS `memory_ram_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `version` (`name`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table proforma.memory_ram_type: ~4 rows (approximately)
/*!40000 ALTER TABLE `memory_ram_type` DISABLE KEYS */;
INSERT INTO `memory_ram_type` (`id`, `name`) VALUES
	(1, 'DDR2'),
	(2, 'DDR3'),
	(3, 'DDR4'),
	(5, 'DDR5');
/*!40000 ALTER TABLE `memory_ram_type` ENABLE KEYS */;

-- Dumping structure for table proforma.motherboard
CREATE TABLE IF NOT EXISTS `motherboard` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(256) DEFAULT NULL,
  `type` int(11) DEFAULT NULL COMMENT 'AMD or intel',
  `proforma_id` int(11) DEFAULT NULL,
  `item_active` tinyint(1) DEFAULT NULL,
  `link` varchar(256) DEFAULT NULL,
  `store` int(11) DEFAULT NULL,
  `sol` decimal(20,2) DEFAULT NULL,
  `dol` decimal(20,2) DEFAULT NULL,
  `brand` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_motherboard_proforma` (`proforma_id`),
  KEY `FK_motherboard_processor_brand` (`type`) USING BTREE,
  KEY `FK_motherboard_store` (`store`),
  KEY `FK_motherboard_brand` (`brand`),
  CONSTRAINT `FK_motherboard_brand` FOREIGN KEY (`brand`) REFERENCES `brand` (`id`),
  CONSTRAINT `FK_motherboard_processor_type` FOREIGN KEY (`type`) REFERENCES `processor_type` (`id`),
  CONSTRAINT `FK_motherboard_proforma` FOREIGN KEY (`proforma_id`) REFERENCES `proforma` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_motherboard_store` FOREIGN KEY (`store`) REFERENCES `store` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- Dumping data for table proforma.motherboard: ~0 rows (approximately)
/*!40000 ALTER TABLE `motherboard` DISABLE KEYS */;
/*!40000 ALTER TABLE `motherboard` ENABLE KEYS */;

-- Dumping structure for table proforma.mouse
CREATE TABLE IF NOT EXISTS `mouse` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `link` varchar(512) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `dol` decimal(20,2) DEFAULT NULL,
  `sol` decimal(20,2) DEFAULT NULL,
  `item_active` tinyint(1) DEFAULT NULL,
  `brand` int(11) DEFAULT NULL,
  `store` int(11) DEFAULT NULL,
  `proforma_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_mouse_brand` (`brand`),
  KEY `FK_mouse_store` (`store`),
  KEY `FK_mouse_proforma` (`proforma_id`),
  CONSTRAINT `FK_mouse_brand` FOREIGN KEY (`brand`) REFERENCES `brand` (`id`),
  CONSTRAINT `FK_mouse_proforma` FOREIGN KEY (`proforma_id`) REFERENCES `proforma` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_mouse_store` FOREIGN KEY (`store`) REFERENCES `store` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table proforma.mouse: ~0 rows (approximately)
/*!40000 ALTER TABLE `mouse` DISABLE KEYS */;
/*!40000 ALTER TABLE `mouse` ENABLE KEYS */;

-- Dumping structure for table proforma.powersupply
CREATE TABLE IF NOT EXISTS `powersupply` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `proforma_id` int(11) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `store` int(11) DEFAULT NULL,
  `watts` int(11) DEFAULT NULL,
  `certificate` int(11) DEFAULT NULL,
  `brand` int(11) DEFAULT NULL,
  `dol` decimal(20,2) DEFAULT NULL,
  `link` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `sol` decimal(20,2) DEFAULT NULL,
  `item_active` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_powersupply_store` (`store`),
  KEY `FK_powersupply_powersupply_certificate` (`certificate`),
  KEY `FK_powersupply_powersupply_watts` (`watts`),
  KEY `FK_powersupply_brand` (`brand`),
  KEY `FK_powersupply_proforma` (`proforma_id`),
  CONSTRAINT `FK_powersuply_store` FOREIGN KEY (`store`) REFERENCES `store` (`id`),
  CONSTRAINT `FK_powersupply_brand` FOREIGN KEY (`brand`) REFERENCES `brand` (`id`),
  CONSTRAINT `FK_powersupply_powersupply_certificate` FOREIGN KEY (`certificate`) REFERENCES `powersupply_certificate` (`id`),
  CONSTRAINT `FK_powersupply_powersupply_watts` FOREIGN KEY (`watts`) REFERENCES `powersupply_watts` (`id`),
  CONSTRAINT `FK_powersupply_proforma` FOREIGN KEY (`proforma_id`) REFERENCES `proforma` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table proforma.powersupply: ~0 rows (approximately)
/*!40000 ALTER TABLE `powersupply` DISABLE KEYS */;
/*!40000 ALTER TABLE `powersupply` ENABLE KEYS */;

-- Dumping structure for table proforma.powersupply_certificate
CREATE TABLE IF NOT EXISTS `powersupply_certificate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table proforma.powersupply_certificate: ~8 rows (approximately)
/*!40000 ALTER TABLE `powersupply_certificate` DISABLE KEYS */;
INSERT INTO `powersupply_certificate` (`id`, `name`) VALUES
	(2, '80 Plus WHITE'),
	(3, '80 Plus BRONZE'),
	(4, '80 Plus SILVER'),
	(5, '80 Plus GOLD'),
	(6, '80 Plus PLATINIUM'),
	(7, '80 Plus TITANIUM'),
	(8, 'Real'),
	(9, 'Generic');
/*!40000 ALTER TABLE `powersupply_certificate` ENABLE KEYS */;

-- Dumping structure for table proforma.powersupply_watts
CREATE TABLE IF NOT EXISTS `powersupply_watts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table proforma.powersupply_watts: ~12 rows (approximately)
/*!40000 ALTER TABLE `powersupply_watts` DISABLE KEYS */;
INSERT INTO `powersupply_watts` (`id`, `name`) VALUES
	(1, '400W'),
	(2, '450W'),
	(3, '500W'),
	(4, '550W'),
	(5, '600W'),
	(6, '650W'),
	(7, '700W'),
	(8, '750W'),
	(9, '800W'),
	(10, '850W'),
	(11, '1000W'),
	(12, '1200W');
/*!40000 ALTER TABLE `powersupply_watts` ENABLE KEYS */;

-- Dumping structure for table proforma.processor
CREATE TABLE IF NOT EXISTS `processor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `proforma_id` int(11) DEFAULT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `store` int(11) DEFAULT NULL,
  `link` varchar(200) DEFAULT NULL,
  `dol` decimal(20,6) DEFAULT NULL,
  `sol` decimal(20,6) DEFAULT NULL,
  `brand` int(11) DEFAULT NULL,
  `item_active` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_processor_proforma` (`proforma_id`),
  KEY `FK_processor_store` (`store`) USING BTREE,
  KEY `FK_processor_processor_type` (`brand`),
  CONSTRAINT `FK_processor_processor_type` FOREIGN KEY (`brand`) REFERENCES `processor_type` (`id`),
  CONSTRAINT `FK_processor_proforma` FOREIGN KEY (`proforma_id`) REFERENCES `proforma` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_processor_store` FOREIGN KEY (`store`) REFERENCES `store` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;

-- Dumping data for table proforma.processor: ~0 rows (approximately)
/*!40000 ALTER TABLE `processor` DISABLE KEYS */;
/*!40000 ALTER TABLE `processor` ENABLE KEYS */;

-- Dumping structure for table proforma.processor_type
CREATE TABLE IF NOT EXISTS `processor_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table proforma.processor_type: ~2 rows (approximately)
/*!40000 ALTER TABLE `processor_type` DISABLE KEYS */;
INSERT INTO `processor_type` (`id`, `name`) VALUES
	(1, 'AMD'),
	(2, 'Intel');
/*!40000 ALTER TABLE `processor_type` ENABLE KEYS */;

-- Dumping structure for table proforma.proforma
CREATE TABLE IF NOT EXISTS `proforma` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `date_created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `date_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

-- Dumping data for table proforma.proforma: ~0 rows (approximately)
/*!40000 ALTER TABLE `proforma` DISABLE KEYS */;
/*!40000 ALTER TABLE `proforma` ENABLE KEYS */;

-- Dumping structure for table proforma.store
CREATE TABLE IF NOT EXISTS `store` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `link` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- Dumping data for table proforma.store: ~9 rows (approximately)
/*!40000 ALTER TABLE `store` DISABLE KEYS */;
INSERT INTO `store` (`id`, `name`, `link`) VALUES
	(1, 'CercoPlus', 'https://www.sercoplus.com/'),
	(2, 'Compuvision', 'https://compuvisionperu.pe/CYM/'),
	(3, 'C&C Computer', 'https://cyccomputer.pe/'),
	(4, 'GoldPerú', 'https://gpperu.com/'),
	(5, 'Yamoshi GamerStore', 'https://yamoshi.com.pe/'),
	(6, 'Infotec', 'https://www.infotec.com.pe/'),
	(7, 'PC Byte', 'https://pcbyte.com.pe/'),
	(8, 'Deltron', 'https://www.deltron.com.pe/'),
	(9, 'Impacto', 'https://www.impacto.com.pe/');
/*!40000 ALTER TABLE `store` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

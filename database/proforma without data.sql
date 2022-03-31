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

-- Data exporting was unselected.

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

-- Data exporting was unselected.

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

-- Data exporting was unselected.

-- Dumping structure for table proforma.disk_size
CREATE TABLE IF NOT EXISTS `disk_size` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `size` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table proforma.disk_type
CREATE TABLE IF NOT EXISTS `disk_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

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

-- Data exporting was unselected.

-- Dumping structure for table proforma.display_panel
CREATE TABLE IF NOT EXISTS `display_panel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `panel` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table proforma.display_size
CREATE TABLE IF NOT EXISTS `display_size` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `size` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

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

-- Data exporting was unselected.

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

-- Data exporting was unselected.

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

-- Data exporting was unselected.

-- Dumping structure for table proforma.memory_ram_frequency
CREATE TABLE IF NOT EXISTS `memory_ram_frequency` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `condition` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_memory_ram_frequency_memory_ram_type` (`condition`),
  CONSTRAINT `FK_memory_ram_frequency_memory_ram_type` FOREIGN KEY (`condition`) REFERENCES `memory_ram_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table proforma.memory_ram_size
CREATE TABLE IF NOT EXISTS `memory_ram_size` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table proforma.memory_ram_type
CREATE TABLE IF NOT EXISTS `memory_ram_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `version` (`name`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

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

-- Data exporting was unselected.

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

-- Data exporting was unselected.

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

-- Data exporting was unselected.

-- Dumping structure for table proforma.powersupply_certificate
CREATE TABLE IF NOT EXISTS `powersupply_certificate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table proforma.powersupply_watts
CREATE TABLE IF NOT EXISTS `powersupply_watts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

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

-- Data exporting was unselected.

-- Dumping structure for table proforma.processor_type
CREATE TABLE IF NOT EXISTS `processor_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table proforma.proforma
CREATE TABLE IF NOT EXISTS `proforma` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `date_created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `date_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

-- Data exporting was unselected.

-- Dumping structure for table proforma.store
CREATE TABLE IF NOT EXISTS `store` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `link` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- Data exporting was unselected.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

-- MariaDB dump 10.17  Distrib 10.4.14-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: roper_db
-- ------------------------------------------------------
-- Server version	10.4.14-MariaDB

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

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categorias` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    `genero` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`id`)
)  ENGINE=INNODB AUTO_INCREMENT=4 DEFAULT CHARSET=UTF8MB4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Unisex'),(2,'Hombre'),(3,'Mujer');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colores`
--

DROP TABLE IF EXISTS `colores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `colores` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`id`)
)  ENGINE=INNODB AUTO_INCREMENT=6 DEFAULT CHARSET=UTF8MB4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colores`
--

LOCK TABLES `colores` WRITE;
/*!40000 ALTER TABLE `colores` DISABLE KEYS */;
INSERT INTO `colores` VALUES (1,'Negro'),(2,'Blanco'),(3,'Verde'),(4,'Rosa'),(5,'Violeta'),(6,'Gris');
/*!40000 ALTER TABLE `colores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `condiciones`
--

DROP TABLE IF EXISTS `condiciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `condiciones` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    `estado` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`id`)
)  ENGINE=INNODB AUTO_INCREMENT=3 DEFAULT CHARSET=UTF8MB4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `condiciones`
--

LOCK TABLES `condiciones` WRITE;
/*!40000 ALTER TABLE `condiciones` DISABLE KEYS */;
INSERT INTO `condiciones` VALUES (1,'Nuevo'),(2,'Usado');
/*!40000 ALTER TABLE `condiciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto_user`
--

DROP TABLE IF EXISTS `producto_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `producto_user` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    `producto_id` INT(10) UNSIGNED NOT NULL,
    `user_id` INT(10) UNSIGNED NOT NULL,
    PRIMARY KEY (`id`)
)  ENGINE=INNODB AUTO_INCREMENT=2 DEFAULT CHARSET=UTF8MB4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto_user`
--

LOCK TABLES `producto_user` WRITE;
/*!40000 ALTER TABLE `producto_user` DISABLE KEYS */;
INSERT INTO `producto_user` VALUES (1,1,1);
/*!40000 ALTER TABLE `producto_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `precio` VARCHAR(100) NOT NULL,
    `cantidad` VARCHAR(100) NOT NULL,
    `categoria_id` INT(10) UNSIGNED DEFAULT NULL,
    `condicion_id` INT(10) UNSIGNED DEFAULT NULL,
    `color_id` INT(10) UNSIGNED DEFAULT NULL,
    `talle_id` INT(10) UNSIGNED DEFAULT NULL,
    `image` VARCHAR(100) NOT NULL,
    PRIMARY KEY (`id`)
)  ENGINE=INNODB AUTO_INCREMENT=65 DEFAULT CHARSET=UTF8MB4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (50,'Botas','3500','1',3,2,1,6,'image-1606521135719.jpg'),(51,'Remera','500','1',2,1,1,5,'image-1606521578051.jpg');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `talles`
--

DROP TABLE IF EXISTS `talles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `talles` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    `numero` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`id`)
)  ENGINE=INNODB AUTO_INCREMENT=13 DEFAULT CHARSET=UTF8MB4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `talles`
--

LOCK TABLES `talles` WRITE;
/*!40000 ALTER TABLE `talles` DISABLE KEYS */;
INSERT INTO `talles` VALUES (2,'34'),(3,'35'),(4,'36'),(5,'37'),(6,'38'),(7,'39'),(8,'40'),(9,'41'),(10,'42'),(11,'43'),(12,'44');
/*!40000 ALTER TABLE `talles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) COLLATE UTF8_BIN NOT NULL,
    `surname` VARCHAR(255) COLLATE UTF8_BIN NOT NULL,
    `email` VARCHAR(255) COLLATE UTF8_BIN NOT NULL,
    `pw_hash` VARCHAR(100) COLLATE UTF8_BIN NOT NULL,
    `image` VARCHAR(100) COLLATE UTF8_BIN NOT NULL,
    PRIMARY KEY (`id`)
)  ENGINE=INNODB AUTO_INCREMENT=17 DEFAULT CHARSET=UTF8 COLLATE = UTF8_BIN;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (16,'Lisandro','Brasolin','brasolinlisandro0@gmail.com','$2a$08$32Rnk4e1ZGTM/lE2CIWt2./MH7/hyOfEyqD23qEWaHKKZrDXsdKuO','image-1607025772835.gif');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-03 17:09:28

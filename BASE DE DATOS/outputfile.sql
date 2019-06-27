-- MySQL dump 10.16  Distrib 10.1.39-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: sen
-- ------------------------------------------------------
-- Server version	10.1.39-MariaDB

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
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2019_03_05_054619_create_catalogos',1),(2,'2019_03_07_055637_create_catalogos_con_foraneas',1),(3,'2019_03_07_060019_create_tablas_transaccionales',1),(4,'2019_03_07_060243_create_idioma',1),(5,'2019_04_07_023042_alter_table',1),(6,'2019_04_07_023254_modify_table_name',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tc_departamento`
--

DROP TABLE IF EXISTS `tc_departamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tc_departamento` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `departamento` varchar(88) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tc_departamento`
--

LOCK TABLES `tc_departamento` WRITE;
/*!40000 ALTER TABLE `tc_departamento` DISABLE KEYS */;
INSERT INTO `tc_departamento` VALUES (1,'GUATEMALA',NULL,NULL),(2,'TOTONICAPAN',NULL,NULL);
/*!40000 ALTER TABLE `tc_departamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tc_estado_crecimiento`
--

DROP TABLE IF EXISTS `tc_estado_crecimiento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tc_estado_crecimiento` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `estado_crecimiento` varchar(8) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tc_estado_crecimiento`
--

LOCK TABLES `tc_estado_crecimiento` WRITE;
/*!40000 ALTER TABLE `tc_estado_crecimiento` DISABLE KEYS */;
/*!40000 ALTER TABLE `tc_estado_crecimiento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tc_estado_nutricional`
--

DROP TABLE IF EXISTS `tc_estado_nutricional`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tc_estado_nutricional` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `estado_nutricional` varchar(88) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tc_estado_nutricional`
--

LOCK TABLES `tc_estado_nutricional` WRITE;
/*!40000 ALTER TABLE `tc_estado_nutricional` DISABLE KEYS */;
/*!40000 ALTER TABLE `tc_estado_nutricional` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tc_estado_persona`
--

DROP TABLE IF EXISTS `tc_estado_persona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tc_estado_persona` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `estado_persona` varchar(88) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tc_estado_persona`
--

LOCK TABLES `tc_estado_persona` WRITE;
/*!40000 ALTER TABLE `tc_estado_persona` DISABLE KEYS */;
/*!40000 ALTER TABLE `tc_estado_persona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tc_estado_usuario`
--

DROP TABLE IF EXISTS `tc_estado_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tc_estado_usuario` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `estado_usuario` varchar(88) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tc_estado_usuario`
--

LOCK TABLES `tc_estado_usuario` WRITE;
/*!40000 ALTER TABLE `tc_estado_usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `tc_estado_usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tc_genero`
--

DROP TABLE IF EXISTS `tc_genero`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tc_genero` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `genero` varchar(8) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tc_genero`
--

LOCK TABLES `tc_genero` WRITE;
/*!40000 ALTER TABLE `tc_genero` DISABLE KEYS */;
/*!40000 ALTER TABLE `tc_genero` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tc_idioma`
--

DROP TABLE IF EXISTS `tc_idioma`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tc_idioma` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idioma` varchar(88) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tc_idioma`
--

LOCK TABLES `tc_idioma` WRITE;
/*!40000 ALTER TABLE `tc_idioma` DISABLE KEYS */;
INSERT INTO `tc_idioma` VALUES (1,'KICHE',NULL,NULL);
/*!40000 ALTER TABLE `tc_idioma` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tc_municipio`
--

DROP TABLE IF EXISTS `tc_municipio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tc_municipio` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `municipio` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_departamento` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tc_municipio_id_departamento_foreign` (`id_departamento`),
  CONSTRAINT `tc_municipio_id_departamento_foreign` FOREIGN KEY (`id_departamento`) REFERENCES `tc_departamento` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tc_municipio`
--

LOCK TABLES `tc_municipio` WRITE;
/*!40000 ALTER TABLE `tc_municipio` DISABLE KEYS */;
INSERT INTO `tc_municipio` VALUES (1,'TOTONICAPAN',2,NULL,NULL),(2,'MOMOSTENANGO',2,NULL,NULL);
/*!40000 ALTER TABLE `tc_municipio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tc_nivel_academico`
--

DROP TABLE IF EXISTS `tc_nivel_academico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tc_nivel_academico` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nivel_academico` varchar(888) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tc_nivel_academico`
--

LOCK TABLES `tc_nivel_academico` WRITE;
/*!40000 ALTER TABLE `tc_nivel_academico` DISABLE KEYS */;
INSERT INTO `tc_nivel_academico` VALUES (1,'PRIMARIO',NULL,NULL);
/*!40000 ALTER TABLE `tc_nivel_academico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tc_parroquia`
--

DROP TABLE IF EXISTS `tc_parroquia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tc_parroquia` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `parroquia` varchar(88) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tc_parroquia`
--

LOCK TABLES `tc_parroquia` WRITE;
/*!40000 ALTER TABLE `tc_parroquia` DISABLE KEYS */;
INSERT INTO `tc_parroquia` VALUES (1,'SAN GOLOTEO EL CHIQUITO',NULL,NULL);
/*!40000 ALTER TABLE `tc_parroquia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tc_perfil`
--

DROP TABLE IF EXISTS `tc_perfil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tc_perfil` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `perfil` varchar(88) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tc_perfil`
--

LOCK TABLES `tc_perfil` WRITE;
/*!40000 ALTER TABLE `tc_perfil` DISABLE KEYS */;
/*!40000 ALTER TABLE `tc_perfil` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tc_tipo_peso`
--

DROP TABLE IF EXISTS `tc_tipo_peso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tc_tipo_peso` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tipo_peso` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tc_tipo_peso`
--

LOCK TABLES `tc_tipo_peso` WRITE;
/*!40000 ALTER TABLE `tc_tipo_peso` DISABLE KEYS */;
/*!40000 ALTER TABLE `tc_tipo_peso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tc_usuario`
--

DROP TABLE IF EXISTS `tc_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tc_usuario` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `usuario` varchar(88) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(88) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_perfil` int(10) unsigned NOT NULL,
  `id_estado_usuario` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tc_usuario_id_perfil_foreign` (`id_perfil`),
  KEY `tc_usuario_id_estado_usuario_foreign` (`id_estado_usuario`),
  CONSTRAINT `tc_usuario_id_estado_usuario_foreign` FOREIGN KEY (`id_estado_usuario`) REFERENCES `tc_estado_usuario` (`id`),
  CONSTRAINT `tc_usuario_id_perfil_foreign` FOREIGN KEY (`id_perfil`) REFERENCES `tc_perfil` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tc_usuario`
--

LOCK TABLES `tc_usuario` WRITE;
/*!40000 ALTER TABLE `tc_usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `tc_usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tt_detalle_evaluacion`
--

DROP TABLE IF EXISTS `tt_detalle_evaluacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tt_detalle_evaluacion` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `detalle_evaluacion` varchar(888) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_estado_persona` int(10) unsigned NOT NULL,
  `tt_evaluacion_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tt_detalle_evaluacion_id_estado_persona_foreign` (`id_estado_persona`),
  KEY `tt_detalle_evaluacion_id_evaluacion_foreign` (`tt_evaluacion_id`),
  CONSTRAINT `tt_detalle_evaluacion_id_estado_persona_foreign` FOREIGN KEY (`id_estado_persona`) REFERENCES `tc_estado_persona` (`id`),
  CONSTRAINT `tt_detalle_evaluacion_id_evaluacion_foreign` FOREIGN KEY (`tt_evaluacion_id`) REFERENCES `tt_evaluacion` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tt_detalle_evaluacion`
--

LOCK TABLES `tt_detalle_evaluacion` WRITE;
/*!40000 ALTER TABLE `tt_detalle_evaluacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `tt_detalle_evaluacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tt_evaluacion`
--

DROP TABLE IF EXISTS `tt_evaluacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tt_evaluacion` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `evaluacion` varchar(88) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `peso` double(8,2) NOT NULL,
  `talla` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `id_ninio` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tt_evaluacion_id_ninio_foreign` (`id_ninio`),
  CONSTRAINT `tt_evaluacion_id_ninio_foreign` FOREIGN KEY (`id_ninio`) REFERENCES `tt_ninio` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tt_evaluacion`
--

LOCK TABLES `tt_evaluacion` WRITE;
/*!40000 ALTER TABLE `tt_evaluacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `tt_evaluacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tt_madre`
--

DROP TABLE IF EXISTS `tt_madre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tt_madre` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `madre` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `direccion` varchar(188) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono` varchar(18) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cui` varchar(28) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_municipio` int(10) unsigned NOT NULL,
  `id_parroquia` int(10) unsigned NOT NULL,
  `id_nivel_academico` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tt_madre_id_municipio_foreign` (`id_municipio`),
  KEY `tt_madre_id_parroquia_foreign` (`id_parroquia`),
  KEY `tt_madre_id_nivel_academico_foreign` (`id_nivel_academico`),
  CONSTRAINT `tt_madre_id_municipio_foreign` FOREIGN KEY (`id_municipio`) REFERENCES `tc_municipio` (`id`),
  CONSTRAINT `tt_madre_id_nivel_academico_foreign` FOREIGN KEY (`id_nivel_academico`) REFERENCES `tc_nivel_academico` (`id`),
  CONSTRAINT `tt_madre_id_parroquia_foreign` FOREIGN KEY (`id_parroquia`) REFERENCES `tc_parroquia` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tt_madre`
--

LOCK TABLES `tt_madre` WRITE;
/*!40000 ALTER TABLE `tt_madre` DISABLE KEYS */;
INSERT INTO `tt_madre` VALUES (3,'Sandra Patricia Lopez','Xantun','77663236','23335874857',1,1,1,'2019-06-27 05:05:00','2019-06-27 05:05:00'),(4,'Maria victoria ','toto','12345678','123456789',2,1,1,'2019-06-27 05:38:58','2019-06-27 05:38:58');
/*!40000 ALTER TABLE `tt_madre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tt_ninio`
--

DROP TABLE IF EXISTS `tt_ninio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tt_ninio` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ninio` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `peso_nacimiento` double(8,2) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `id_tipo_peso` int(10) unsigned NOT NULL,
  `id_genero` int(10) unsigned NOT NULL,
  `id_madre` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tt_ninio_id_tipo_peso_foreign` (`id_tipo_peso`),
  KEY `tt_ninio_id_genero_foreign` (`id_genero`),
  KEY `tt_ninio_id_madre_foreign` (`id_madre`),
  CONSTRAINT `tt_ninio_id_genero_foreign` FOREIGN KEY (`id_genero`) REFERENCES `tc_genero` (`id`),
  CONSTRAINT `tt_ninio_id_madre_foreign` FOREIGN KEY (`id_madre`) REFERENCES `tt_madre` (`id`),
  CONSTRAINT `tt_ninio_id_tipo_peso_foreign` FOREIGN KEY (`id_tipo_peso`) REFERENCES `tc_tipo_peso` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tt_ninio`
--

LOCK TABLES `tt_ninio` WRITE;
/*!40000 ALTER TABLE `tt_ninio` DISABLE KEYS */;
/*!40000 ALTER TABLE `tt_ninio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'sen'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-06-27  7:00:32

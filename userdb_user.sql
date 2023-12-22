-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: userdb
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `userNO` int NOT NULL AUTO_INCREMENT,
  `userID` varchar(40) NOT NULL,
  `userPW` varchar(20) NOT NULL,
  `userName` varchar(10) NOT NULL,
  `userRole` int NOT NULL,
  `userStat` int NOT NULL,
  `userPhone` varchar(20) NOT NULL,
  `userAdd` varchar(40) NOT NULL,
  `userSubAdd` varchar(20) NOT NULL,
  PRIMARY KEY (`userNO`),
  UNIQUE KEY `userID_UNIQUE` (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'asd123@naver.com','asas1212','한훈성',1,1,'010-1234-5678','서울특별시 광진구 능동로 195-16','401호'),(2,'qwe456@naver.com','qwqw4545','진형준',1,1,'010-4322-2234','경기도 안양시 동안구 동안로 101','201호'),(3,'zxc654@naver.com','zxzx6565','마진석',1,1,'010-3214-2322','서울특별시 강남구 테헤란로 203','202호'),(4,'admin@drawer.com','admin1','관리자',0,1,'01000001111','경기 성남시 분당구 정자일로 95','1818호'),(5,'asas12@naver.com','asas12','한훈성',1,1,'01012122323','경기 군포시 경수대로 443','401호'),(6,'asas121@naver.com','asas12','기니디',1,1,'01044445555','서울 용산구 만리재로 134','202호'),(7,'qwqw12@naver.com','asas123','마음아',1,1,'01066667777','제주특별자치도 서귀포시 대정읍 대한로 632','202호'),(8,'popo12@naver.com','popo12','하남수',1,1,'01099998888','서울 강북구 노해로 1','801호'),(9,'koko12@naver.com','koko12','만수르',1,1,'01056568787','부산 사하구 천해로80번길 36','701호'),(10,'asas123@naver.com','asas123','진수김',1,1,'01033322221','서울 강남구 자곡로 16','402호');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-21 18:22:52

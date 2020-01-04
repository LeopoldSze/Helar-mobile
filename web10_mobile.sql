/*
Navicat MySQL Data Transfer

Source Server         : leopold
Source Server Version : 50550
Source Host           : localhost:3306
Source Database       : web10_mobile

Target Server Type    : MYSQL
Target Server Version : 50550
File Encoding         : 65001

Date: 2019-06-28 11:25:36
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for tab_back_users
-- ----------------------------
DROP TABLE IF EXISTS `tab_back_users`;
CREATE TABLE `tab_back_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `acc` varchar(255) DEFAULT NULL,
  `pass` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tab_back_users
-- ----------------------------
INSERT INTO `tab_back_users` VALUES ('1', 'admin', '123');
INSERT INTO `tab_back_users` VALUES ('2', 'leo', '0000');

-- ----------------------------
-- Table structure for tab_front_doc
-- ----------------------------
DROP TABLE IF EXISTS `tab_front_doc`;
CREATE TABLE `tab_front_doc` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `kind` varchar(50) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `workday` varchar(50) DEFAULT NULL,
  `worktime` varchar(255) DEFAULT NULL,
  `tel` varchar(11) DEFAULT NULL,
  `veri` varchar(50) DEFAULT NULL,
  `score` varchar(50) DEFAULT NULL,
  `descp` varchar(255) DEFAULT NULL,
  `rid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tab_front_doc
-- ----------------------------
INSERT INTO `tab_front_doc` VALUES ('1', 'Amanda', '眼科医生', '../imgs/doctor/doc1.png', '南京市第一医院', '周一-周五', '9:00-17:00', '123456789', 'ABMS', '4.8', '毕业于洛杉矶医科大学，主要方向为内科，擅长各种内科疑难杂症的诊断治疗，有5年临床经验。', '1');
INSERT INTO `tab_front_doc` VALUES ('2', '小小', '外科医生', '../imgs/doctor/doc3.png', '南京金陵中西医结合医院总院', '周一-周五', '9:00-17:00', '987654321', 'ABAA', '4.5', '毕业于洛杉矶医科大学，主要方向为内科，擅长各种内科疑难杂症的诊断治疗，有5年临床经验。', '2');
INSERT INTO `tab_front_doc` VALUES ('3', '花花', '内科医生', '../imgs/doctor/doc4.png', '江苏省中医药', '周一-周五', '9:00-17:00', '12322223333', 'CBSA', '4.2', '毕业于洛杉矶医科大学，主要方向为内科，擅长各种内科疑难杂症的诊断治疗，有5年临床经验。', '3');
INSERT INTO `tab_front_doc` VALUES ('4', '李华', '牙科医生', '../imgs/doctor/doc2.png', '南京医科大学附属南京医院', '周一-周五', '9:00-17:00', '147147147', null, '4.1', '毕业于洛杉矶医科大学，主要方向为内科，擅长各种内科疑难杂症的诊断治疗，有5年临床经验。', '4');
INSERT INTO `tab_front_doc` VALUES ('5', '王丽', '儿科医生', '../imgs/doctor/doc1.png', '江苏省第二中医药', '周一-周五', '9:00-17:00', '1234156845', null, '4.3', '毕业于洛杉矶医科大学，主要方向为内科，擅长各种内科疑难杂症的诊断治疗，有5年临床经验。', '5');
INSERT INTO `tab_front_doc` VALUES ('6', '张张', '妇科医生', '../imgs/doctor/doc4.png', '南京建国医院', '周一-周五', '9:00-17:00', '4001235689', 'SCMO', '4.4', '毕业于洛杉矶医科大学，主要方向为内科，擅长各种内科疑难杂症的诊断治疗，有5年临床经验。', '6');
INSERT INTO `tab_front_doc` VALUES ('7', '小米', '神经科医生', '../imgs/doctor/doc3.png', '八一医院', '周一-周五', '9:00-17:00', '401471471', null, '4.8', '毕业于洛杉矶医科大学，主要方向为内科，擅长各种内科疑难杂症的诊断治疗，有5年临床经验。', '7');
INSERT INTO `tab_front_doc` VALUES ('8', '张三丰', '男科医生', '../imgs/doctor/doc2.png', '南京市妇幼保健院', '周一-周五', '9:00-17:00', '56984235', 'PLK', '3.8', '毕业于洛杉矶医科大学，主要方向为内科，擅长各种内科疑难杂症的诊断治疗，有5年临床经验。', '8');

-- ----------------------------
-- Table structure for tab_front_docreview
-- ----------------------------
DROP TABLE IF EXISTS `tab_front_docreview`;
CREATE TABLE `tab_front_docreview` (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `nickname` varchar(50) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `review` varchar(255) DEFAULT NULL,
  `rid` int(11) DEFAULT NULL,
  PRIMARY KEY (`cid`),
  KEY `docreview` (`rid`),
  CONSTRAINT `docreview` FOREIGN KEY (`rid`) REFERENCES `tab_front_doc` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tab_front_docreview
-- ----------------------------
INSERT INTO `tab_front_docreview` VALUES ('1', 'Ryan', '../imgs/doctor/r1.png', '挺不错的，本来我的腿伤挺严重，经过治疗现在能自由走路了。', '1');
INSERT INTO `tab_front_docreview` VALUES ('2', 'Leo', '../imgs/doctor/r2.png', '不错，医生很随和', '1');
INSERT INTO `tab_front_docreview` VALUES ('3', '晓华', '../imgs/doctor/r3.png', '很快就好了', '1');
INSERT INTO `tab_front_docreview` VALUES ('4', '小黑', '../imgs/doctor/r2.png', '开了药，很快就好了', '1');
INSERT INTO `tab_front_docreview` VALUES ('5', '666', '../imgs/doctor/r1.png', '医生很nice', '1');
INSERT INTO `tab_front_docreview` VALUES ('6', 'Ryan', '../imgs/doctor/r1.png', '挺不错的，本来我的腿伤挺严重，经过治疗现在能自由走路了。', '2');
INSERT INTO `tab_front_docreview` VALUES ('7', '小黑', '../imgs/doctor/r2.png', '开了药，很快就好了', '2');
INSERT INTO `tab_front_docreview` VALUES ('8', '小米', '../imgs/doctor/r1.png', '医生医术很不错', '3');
INSERT INTO `tab_front_docreview` VALUES ('9', '晓华', '../imgs/doctor/r3.png', '很快就好了', '4');

-- ----------------------------
-- Table structure for tab_front_drugs
-- ----------------------------
DROP TABLE IF EXISTS `tab_front_drugs`;
CREATE TABLE `tab_front_drugs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `price` double(10,2) DEFAULT NULL,
  `descp` varchar(255) DEFAULT NULL,
  `methods` varchar(255) DEFAULT NULL,
  `engname` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tab_front_drugs
-- ----------------------------
INSERT INTO `tab_front_drugs` VALUES ('1', '阿莫西林', '../imgs/drug/a1.png', '29.90', '阿莫西林，又名安莫西林或安默西林，是一种\r\n                        最常用的半合成青霉素类广谱β-内酰胺类抗生素，为一种白色粉末，半衰期约为61.3分钟', '口服：①成人1次0.5g，每6～8小时1次，每日剂量不超过4g；②小儿每日20～40mg/kg', 'Amoxicillin');
INSERT INTO `tab_front_drugs` VALUES ('2', '口服消毒液', '../imgs/drug/a2.png', '39.90', '阿莫西林，又名安莫西林或安默西林，是一种\r\n                        最常用的半合成青霉素类广谱β-内酰胺类抗生素，为一种白色粉末，半衰期约为61.3分钟', '口服：①成人1次0.5g，每6～8小时1次，每日剂量不超过4g；②小儿每日20～40mg/kg', 'Oral disinfectant');
INSERT INTO `tab_front_drugs` VALUES ('3', '阿奇霉素分散片', '../imgs/drug/a3.png', '19.90', '阿莫西林，又名安莫西林或安默西林，是一种\r\n                        最常用的半合成青霉素类广谱β-内酰胺类抗生素，为一种白色粉末，半衰期约为61.3分钟', '口服：①成人1次0.5g，每6～8小时1次，每日剂量不超过4g；②小儿每日20～40mg/kg', 'Azithromycin');
INSERT INTO `tab_front_drugs` VALUES ('4', '氨苄西林钠', '../imgs/drug/a4.png', '15.50', '阿莫西林，又名安莫西林或安默西林，是一种\r\n                        最常用的半合成青霉素类广谱β-内酰胺类抗生素，为一种白色粉末，半衰期约为61.3分钟', '口服：①成人1次0.5g，每6～8小时1次，每日剂量不超过4g；②小儿每日20～40mg/kg', 'Ampicillin Sodium');
INSERT INTO `tab_front_drugs` VALUES ('5', '氨曲南', '../imgs/drug/a1.png', '18.00', '阿莫西林，又名安莫西林或安默西林，是一种\r\n                        最常用的半合成青霉素类广谱β-内酰胺类抗生素，为一种白色粉末，半衰期约为61.3分钟', '口服：①成人1次0.5g，每6～8小时1次，每日剂量不超过4g；②小儿每日20～40mg/kg', 'Aztreonam');
INSERT INTO `tab_front_drugs` VALUES ('6', '林可霉素', '../imgs/drug/a2.png', '9.00', '阿莫西林，又名安莫西林或安默西林，是一种\r\n                        最常用的半合成青霉素类广谱β-内酰胺类抗生素，为一种白色粉末，半衰期约为61.3分钟', '口服：①成人1次0.5g，每6～8小时1次，每日剂量不超过4g；②小儿每日20～40mg/kg', 'Lincomycin');
INSERT INTO `tab_front_drugs` VALUES ('7', '克林霉素磷酸脂', '../imgs/drug/a3.png', '6.00', '阿莫西林，又名安莫西林或安默西林，是一种\r\n                        最常用的半合成青霉素类广谱β-内酰胺类抗生素，为一种白色粉末，半衰期约为61.3分钟', '口服：①成人1次0.5g，每6～8小时1次，每日剂量不超过4g；②小儿每日20～40mg/kg', 'Clindamycin phosphate');
INSERT INTO `tab_front_drugs` VALUES ('8', '罗红霉素胶囊', '../imgs/drug/a4.png', '12.00', '阿莫西林，又名安莫西林或安默西林，是一种\r\n                        最常用的半合成青霉素类广谱β-内酰胺类抗生素，为一种白色粉末，半衰期约为61.3分钟', '口服：①成人1次0.5g，每6～8小时1次，每日剂量不超过4g；②小儿每日20～40mg/kg', 'Roxithromycin id');
INSERT INTO `tab_front_drugs` VALUES ('9', '青霉素钠', '../imgs/drug/a1.png', '8.00', '阿莫西林，又名安莫西林或安默西林，是一种\r\n                        最常用的半合成青霉素类广谱β-内酰胺类抗生素，为一种白色粉末，半衰期约为61.3分钟', '口服：①成人1次0.5g，每6～8小时1次，每日剂量不超过4g；②小儿每日20～40mg/kg', 'Penicillin Sodium');
INSERT INTO `tab_front_drugs` VALUES ('10', '庆大霉素注射液', '../imgs/drug/a2.png', '17.00', '阿莫西林，又名安莫西林或安默西林，是一种\r\n                        最常用的半合成青霉素类广谱β-内酰胺类抗生素，为一种白色粉末，半衰期约为61.3分钟', '口服：①成人1次0.5g，每6～8小时1次，每日剂量不超过4g；②小儿每日20～40mg/kg', 'gentamicin');
INSERT INTO `tab_front_drugs` VALUES ('11', '磷霉素钠', '../imgs/drug/a3.png', '23.00', '阿莫西林，又名安莫西林或安默西林，是一种\r\n                        最常用的半合成青霉素类广谱β-内酰胺类抗生素，为一种白色粉末，半衰期约为61.3分钟', '口服：①成人1次0.5g，每6～8小时1次，每日剂量不超过4g；②小儿每日20～40mg/kg', 'Fosfomycin Sodium');
INSERT INTO `tab_front_drugs` VALUES ('12', '环丙沙星胶囊', '../imgs/drug/a4.png', '3.50', '阿莫西林，又名安莫西林或安默西林，是一种\r\n                        最常用的半合成青霉素类广谱β-内酰胺类抗生素，为一种白色粉末，半衰期约为61.3分钟', '口服：①成人1次0.5g，每6～8小时1次，每日剂量不超过4g；②小儿每日20～40mg/kg', 'ciprofloxacin');
INSERT INTO `tab_front_drugs` VALUES ('13', '头孢克肟颗粒', '../imgs/drug/a1.png', '14.00', '阿莫西林，又名安莫西林或安默西林，是一种\r\n                        最常用的半合成青霉素类广谱β-内酰胺类抗生素，为一种白色粉末，半衰期约为61.3分钟', '口服：①成人1次0.5g，每6～8小时1次，每日剂量不超过4g；②小儿每日20～40mg/kg', 'Cefixime');
INSERT INTO `tab_front_drugs` VALUES ('14', '头孢哌酮钠舒巴坦钠', '../imgs/drug/a2.png', '16.50', '阿莫西林，又名安莫西林或安默西林，是一种\r\n                        最常用的半合成青霉素类广谱β-内酰胺类抗生素，为一种白色粉末，半衰期约为61.3分钟', '口服：①成人1次0.5g，每6～8小时1次，每日剂量不超过4g；②小儿每日20～40mg/kg', 'Cefoperazone sodium and sulbactam sodium');
INSERT INTO `tab_front_drugs` VALUES ('15', '头孢曲松钠', '../imgs/drug/a3.png', '17.40', '阿莫西林，又名安莫西林或安默西林，是一种\r\n                        最常用的半合成青霉素类广谱β-内酰胺类抗生素，为一种白色粉末，半衰期约为61.3分钟', '口服：①成人1次0.5g，每6～8小时1次，每日剂量不超过4g；②小儿每日20～40mg/kg', 'Ceftriaxone Sodium');

-- ----------------------------
-- Table structure for tab_front_hos
-- ----------------------------
DROP TABLE IF EXISTS `tab_front_hos`;
CREATE TABLE `tab_front_hos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `kind` varchar(50) DEFAULT NULL,
  `score` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tab_front_hos
-- ----------------------------
INSERT INTO `tab_front_hos` VALUES ('1', '江苏省东南大学医院', '../imgs/index/hos1.png', '南京市南京站', '综合三甲', '4.7');
INSERT INTO `tab_front_hos` VALUES ('2', '南京曙光医院', '../imgs/index/hos2.png', '南京市南京南站', '综合三乙', '4.5');
INSERT INTO `tab_front_hos` VALUES ('3', '南京明医馆诊所', '../imgs/index/hos1.png', '南京市南京站', '综合一甲', '3.4');
INSERT INTO `tab_front_hos` VALUES ('4', '灌南协和医院', '../imgs/index/hos2.png', '南京市南京站', '综合二乙', '4.0');
INSERT INTO `tab_front_hos` VALUES ('5', '淮安博爱医院', '../imgs/index/hos1.png', '南京市南京站', '综合二丙', '3.9');
INSERT INTO `tab_front_hos` VALUES ('6', '宿迁同仁医院', '../imgs/index/hos2.png', '南京市南京站', '综合一甲', '3.7');
INSERT INTO `tab_front_hos` VALUES ('7', '盐城迎宾医院', '../imgs/index/hos1.png', '南京市南京站', '综合二甲', '4.1');
INSERT INTO `tab_front_hos` VALUES ('8', '扬州市第二人民医院', '../imgs/index/hos2.png', '南京市南京站', '综合三乙', '4.2');

-- ----------------------------
-- Table structure for tab_front_news
-- ----------------------------
DROP TABLE IF EXISTS `tab_front_news`;
CREATE TABLE `tab_front_news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `author` varchar(30) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `rid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tab_front_news
-- ----------------------------
INSERT INTO `tab_front_news` VALUES ('1', '怎样培养吃绿色食物的习惯', '../imgs/news/a1.png', '小明', '2019年6月2日', '1.食物多样，谷类为主，粗细搭配。2.多吃蔬菜水果和薯类。', '1');

-- ----------------------------
-- Table structure for tab_front_user
-- ----------------------------
DROP TABLE IF EXISTS `tab_front_user`;
CREATE TABLE `tab_front_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `acc` varchar(50) DEFAULT NULL,
  `pass` varchar(50) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `blood` varchar(10) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `height` double DEFAULT NULL,
  `weight` double DEFAULT NULL,
  `mail` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tab_front_user
-- ----------------------------
INSERT INTO `tab_front_user` VALUES ('1', 'admin', '123', '../imgs/index2/p1.jpg', '24', 'B', '女', '163', '44', 'admin@163.com');
INSERT INTO `tab_front_user` VALUES ('2', '小米', '123', '../imgs/index2/p2.jpg', '21', 'A', '男', '175', '62', null);
INSERT INTO `tab_front_user` VALUES ('3', '小名', '123', '../imgs/index2/p3.jpg', '24', 'A', '女', '174', '46', 'xiaoming@123.com');
INSERT INTO `tab_front_user` VALUES ('43', 'yunar', '123', '../imgs/index2/p4.jpg', '21', 'B', '女', '170', '45', 'af');
INSERT INTO `tab_front_user` VALUES ('44', 'taeyang', '123', '../imgs/index2/p5.jpg', '28', 'O', '男', '176', '70', '133@hie.dw');
INSERT INTO `tab_front_user` VALUES ('45', '张三', '123', null, null, null, null, null, null, 'zhangsan@qq.com');
INSERT INTO `tab_front_user` VALUES ('46', '李四', '123', '../imgs/index2/profile.png', '28', 'A', '男', '180', '70', 'lisi@123.com');
INSERT INTO `tab_front_user` VALUES ('47', 'xiao', '123', '123', '15', 'A', '男', '178', '70', 'dsj@kf.soks');
SET FOREIGN_KEY_CHECKS=1;

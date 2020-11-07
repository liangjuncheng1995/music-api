/*
Navicat MySQL Data Transfer

Source Server         : cheng
Source Server Version : 100137
Source Host           : localhost:3306
Source Database       : music

Target Server Type    : MYSQL
Target Server Version : 100137
File Encoding         : 65001

Date: 2020-11-07 09:23:45
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for switch
-- ----------------------------
DROP TABLE IF EXISTS `switch`;
CREATE TABLE `switch` (
  `turn` int(1) NOT NULL,
  `created_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`turn`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of switch
-- ----------------------------
INSERT INTO `switch` VALUES ('0', '2020-11-07 09:19:01', '2020-11-07 09:19:01', '2020-11-07 09:19:01');

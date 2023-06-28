-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`cancion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`cancion` (
  `idcancion` INT NOT NULL AUTO_INCREMENT,
  `autor` VARCHAR(45) NOT NULL,
  `letra` VARCHAR(1000) NOT NULL,
  PRIMARY KEY (`idcancion`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`acorde`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`acorde` (
  `idacorde` INT NOT NULL AUTO_INCREMENT,
  `primertraste` INT NOT NULL,
  PRIMARY KEY (`idacorde`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`pulsada`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`pulsada` (
  `idpulsada` INT NOT NULL AUTO_INCREMENT,
  `traste` VARCHAR(45) NOT NULL,
  `cuerda` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idpulsada`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`acordepulsada`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`acordepulsada` (
  `idacorde` INT NOT NULL,
  `idpulsada` INT NOT NULL,
  PRIMARY KEY (`idacorde`, `idpulsada`),
  INDEX `fk_pulsada_has_acorde_acorde1_idx` (`idacorde` ASC) VISIBLE,
  INDEX `fk_pulsada_has_acorde_pulsada1_idx` (`idpulsada` ASC) VISIBLE,
  CONSTRAINT `fk_pulsada_has_acorde_pulsada1`
    FOREIGN KEY (`idpulsada`)
    REFERENCES `mydb`.`pulsada` (`idpulsada`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pulsada_has_acorde_acorde1`
    FOREIGN KEY (`idacorde`)
    REFERENCES `mydb`.`acorde` (`idacorde`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`posicion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`posicion` (
  `posicion` INT NOT NULL,
  `idcancion` INT NOT NULL,
  `idacorde` INT NOT NULL,
  PRIMARY KEY (`idcancion`, `idacorde`),
  INDEX `fk_cancion_has_acorde_acorde1_idx` (`idacorde` ASC) VISIBLE,
  INDEX `fk_cancion_has_acorde_cancion1_idx` (`idcancion` ASC) VISIBLE,
  CONSTRAINT `fk_cancion_has_acorde_cancion1`
    FOREIGN KEY (`idcancion`)
    REFERENCES `mydb`.`cancion` (`idcancion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cancion_has_acorde_acorde1`
    FOREIGN KEY (`idacorde`)
    REFERENCES `mydb`.`acorde` (`idacorde`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

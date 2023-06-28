-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-06-2023 a las 23:25:13
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `guitarappdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `acorde`
--

CREATE TABLE `acorde` (
  `idacorde` int(11) NOT NULL,
  `primertraste` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `acorde`
--

INSERT INTO `acorde` (`idacorde`, `primertraste`, `nombre`) VALUES
(1, 1, 'E'),
(2, 2, 'A'),
(3, 2, 'D'),
(4, 2, 'G'),
(5, 1, 'C'),
(6, 2, 'Em'),
(7, 1, 'Am'),
(8, 1, 'D7'),
(9, 2, 'A7'),
(10, 1, 'F');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `acordepulsada`
--

CREATE TABLE `acordepulsada` (
  `idacorde` int(11) NOT NULL,
  `idpulsada` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `acordepulsada`
--

INSERT INTO `acordepulsada` (`idacorde`, `idpulsada`) VALUES
(1, 3),
(1, 10),
(1, 11),
(2, 7),
(2, 8),
(2, 9),
(3, 7),
(3, 9),
(3, 14),
(4, 11),
(4, 13),
(4, 18),
(5, 2),
(5, 10),
(5, 17),
(6, 10),
(6, 11),
(7, 2),
(7, 9),
(7, 10),
(8, 2),
(8, 7),
(8, 9),
(9, 8),
(9, 10),
(10, 1),
(10, 2),
(10, 3),
(10, 4),
(10, 5),
(10, 6),
(10, 9),
(10, 16),
(10, 17);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cancion`
--

CREATE TABLE `cancion` (
  `idcancion` int(11) NOT NULL,
  `autor` varchar(45) NOT NULL,
  `letra` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `cancion`
--

INSERT INTO `cancion` (`idcancion`, `autor`, `letra`) VALUES
(1, 'joan sebastian', 'Y pensé, que hermoso cuento\nY ahora resulta que es más grande\nY que es más bello\nEsto, esto que por ti yo siento\nCruzare los montes, los ríos, los valles\nPor irte a encontrar\nSalvaría tormentas, ciclones, dragones\nSin exagerar\nPor poder mirarme en tus ojos bonitos\nY vivir la gloria de estar a tu lado\nPorque en mi ya siento que te necesito\nQue me he enamorado\nPor poder mirarme en tus ojos bonitos\nY vivir la gloria de estar a tu lado\nPorque en mi ya siento que te necesito\nEso y más haré\nPor asegurar la sonrisa de tu alma\nBuscando equidad\nYo podría empeñar lo más caro\nQue tengo que es mi libertad\nY seria un honor hay amor ser tu esclavo\nSeria tu juguete por mi voluntad\nY si un día glorioso en tus brazos acabo\nQue felicidad\nSi seria un honor hay amor ser tu esclavo\nSeria tu juguete por mi voluntad\nY si un día glorioso en tus brazos acabo\nQue felicidad'),
(2, 'Manuel Medrano', 'Quiero volar contigo, muy alto en algún lugar\nQuisiera estar contigo viendo las estrellas sobre el mar\nQuiero encontrar otro camino ponerme mi vestido y salir a caminar contigo\nQuiero decirle al mundo que no somos amigos, decirle a la tristeza\nQue no se cruce en mi camino\nQuiero volar contigo, muy alto en algún lugar\nQuisiera estar contigo viendo las estrellas sobre el mar\nQuiero encontrar otro camino ponerme mi vestido y salir a caminar contigo\nQuiero decirle al mundo que no somos amigos, decirle a la tristeza\nQue no se cruce en mi camino\nHoy por que voy\nContra la fuerza de un submarino\nA conquistar a esa dama que tanto juega conmigo\nVoy por el mundo solo y sin amigos\nVoy dando tantas vueltas sin ningun sentido\nPero tu ayer cambiaste mi destino\nMe diste vida, mucha más vida que el vino\nMe diste fuerza en los días fríos\nMe diste ganas de extrañarte sin ningún motivo\nQuiero encontrar otro camino ponerme mi vestido y salir a caminar contigo\nQuiero decirle al mundo que no somos amigos, de');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posicion`
--

CREATE TABLE `posicion` (
  `posicion` int(11) NOT NULL,
  `idcancion` int(11) NOT NULL,
  `idacorde` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pulsada`
--

CREATE TABLE `pulsada` (
  `idpulsada` int(11) NOT NULL,
  `traste` varchar(45) NOT NULL,
  `cuerda` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `pulsada`
--

INSERT INTO `pulsada` (`idpulsada`, `traste`, `cuerda`) VALUES
(1, '1', '1'),
(2, '1', '2'),
(3, '1', '3'),
(4, '1', '4'),
(5, '1', '5'),
(6, '1', '6'),
(7, '2', '1'),
(8, '2', '2'),
(9, '2', '3'),
(10, '2', '4'),
(11, '2', '5'),
(12, '2', '6'),
(13, '3', '1'),
(14, '3', '2'),
(15, '3', '3'),
(16, '3', '4'),
(17, '3', '5'),
(18, '3', '6'),
(19, '4', '1'),
(20, '4', '2'),
(21, '4', '3'),
(22, '4', '4'),
(23, '4', '5'),
(24, '4', '6');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `acorde`
--
ALTER TABLE `acorde`
  ADD PRIMARY KEY (`idacorde`);

--
-- Indices de la tabla `acordepulsada`
--
ALTER TABLE `acordepulsada`
  ADD PRIMARY KEY (`idacorde`,`idpulsada`),
  ADD KEY `fk_pulsada_has_acorde_acorde1_idx` (`idacorde`),
  ADD KEY `fk_pulsada_has_acorde_pulsada1_idx` (`idpulsada`);

--
-- Indices de la tabla `cancion`
--
ALTER TABLE `cancion`
  ADD PRIMARY KEY (`idcancion`);

--
-- Indices de la tabla `posicion`
--
ALTER TABLE `posicion`
  ADD PRIMARY KEY (`idcancion`,`idacorde`),
  ADD KEY `fk_cancion_has_acorde_acorde1_idx` (`idacorde`),
  ADD KEY `fk_cancion_has_acorde_cancion1_idx` (`idcancion`);

--
-- Indices de la tabla `pulsada`
--
ALTER TABLE `pulsada`
  ADD PRIMARY KEY (`idpulsada`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `acorde`
--
ALTER TABLE `acorde`
  MODIFY `idacorde` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `cancion`
--
ALTER TABLE `cancion`
  MODIFY `idcancion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `pulsada`
--
ALTER TABLE `pulsada`
  MODIFY `idpulsada` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `acordepulsada`
--
ALTER TABLE `acordepulsada`
  ADD CONSTRAINT `fk_pulsada_has_acorde_acorde1` FOREIGN KEY (`idacorde`) REFERENCES `acorde` (`idacorde`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_pulsada_has_acorde_pulsada1` FOREIGN KEY (`idpulsada`) REFERENCES `pulsada` (`idpulsada`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `posicion`
--
ALTER TABLE `posicion`
  ADD CONSTRAINT `fk_cancion_has_acorde_acorde1` FOREIGN KEY (`idacorde`) REFERENCES `acorde` (`idacorde`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_cancion_has_acorde_cancion1` FOREIGN KEY (`idcancion`) REFERENCES `cancion` (`idcancion`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

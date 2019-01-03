-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-01-2019 a las 18:04:08
-- Versión del servidor: 10.1.37-MariaDB
-- Versión de PHP: 7.3.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pinboard`
--
CREATE DATABASE IF NOT EXISTS `pinboard` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `pinboard`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(100) NOT NULL,
  `dueDate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `projects`
--

INSERT INTO `projects` (`id`, `name`, `description`, `dueDate`) VALUES
(1, 'Ejemplo', 'Esta es la descripcion del ejemplo', NULL),
(2, 'Proyecto', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ', '2019-02-28');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `dueDate` date DEFAULT NULL,
  `isDone` tinyint(1) NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `projectId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tasks`
--

INSERT INTO `tasks` (`id`, `name`, `dueDate`, `isDone`, `deletedAt`, `projectId`) VALUES
(1, 'Relevamiento de requisitos', '2019-01-02', 1, NULL, 2),
(2, 'Relevamiento de información', '2019-01-04', 1, NULL, 2),
(256, 'Especificación de software', '2019-01-07', 1, NULL, 2),
(257, 'Planteo de funciones', '2019-01-10', 1, NULL, 2),
(258, 'Diseño de API', '2019-01-18', 0, NULL, 2),
(259, 'Diseño interfaz', '2019-01-25', 0, NULL, 2),
(260, 'Programación', '2019-02-08', 0, NULL, 2),
(261, 'Programación', '2019-02-08', 0, NULL, 2),
(262, 'Testeo aplicativo', '2019-02-13', 0, NULL, 2),
(263, 'Implementación', '2019-02-15', 0, NULL, 2),
(264, 'Testeo aplicativo', '2019-02-13', 0, NULL, 2),
(265, 'Implementación', '2019-02-15', 0, NULL, 2),
(266, 'Capacitación usuarios', NULL, 0, NULL, 2),
(267, 'Cuestionario sobre aplicativo', NULL, 0, NULL, 2),
(268, 'Implementación de cambios', NULL, 0, NULL, 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `projectId` (`projectId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=270;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`projectId`) REFERENCES `projects` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

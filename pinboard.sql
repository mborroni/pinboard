-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-01-2019 a las 18:12:10
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
  `dueDate` date DEFAULT NULL,
  `deletedAt` date DEFAULT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `projects`
--

INSERT INTO `projects` (`id`, `name`, `description`, `dueDate`, `deletedAt`, `userId`) VALUES
(1, 'Ejemplo', 'Esta es la descripcion del ejemplo', NULL, NULL, 1),
(2, 'Proyecto', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ', '2019-02-28', NULL, 1),
(3, 'DSDASDA', '', '2019-01-16', NULL, 1),
(4, 'asdada', '', '2019-01-21', NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `dueDate` date DEFAULT NULL,
  `isDone` tinyint(1) NOT NULL DEFAULT '0',
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
(258, 'Diseño de API', '2019-01-18', 0, '0000-00-00 00:00:00', 2),
(259, 'Diseño interfaz', '2019-01-25', 0, '0000-00-00 00:00:00', 2),
(260, 'Programación', '2019-02-08', 0, '0000-00-00 00:00:00', 2),
(261, 'Programación11112312', '2019-02-08', 1, NULL, 2),
(262, 'Testeo aplicativo1111', '2019-02-13', 1, NULL, 2),
(263, 'Implementación2222', '2019-02-20', 1, NULL, 2),
(264, 'Testeo aplicativo', '2019-02-13', 1, NULL, 2),
(265, 'Implementación1', '2019-02-15', 0, NULL, 2),
(266, 'Capacitación usuarios', NULL, 0, '0000-00-00 00:00:00', 2),
(267, 'Cuestionario sobre aplicativo', NULL, 1, '0000-00-00 00:00:00', 2),
(268, 'Implementación de cambios', NULL, 0, '0000-00-00 00:00:00', 2),
(270, '', NULL, 1, '0000-00-00 00:00:00', 2),
(271, '', NULL, 0, '0000-00-00 00:00:00', 2),
(272, '', NULL, 0, '0000-00-00 00:00:00', 2),
(273, '', NULL, 0, '0000-00-00 00:00:00', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(15) NOT NULL,
  `password` varchar(255) NOT NULL,
  `firstname` varchar(15) NOT NULL,
  `lastname` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `firstname`, `lastname`) VALUES
(1, 'mili', 'milimili', 'milagros', 'milagros2222');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indices de la tabla `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `projectId` (`projectId`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=274;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `projects`
--
ALTER TABLE `projects`
  ADD CONSTRAINT `projects_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`projectId`) REFERENCES `projects` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

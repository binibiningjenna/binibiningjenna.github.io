-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 13, 2025 at 10:05 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `booklet`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`category_id`, `name`) VALUES
(1, 'Non-Fiction'),
(2, 'Fiction'),
(3, 'Education'),
(4, 'Kids');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `author` varchar(60) NOT NULL,
  `cover_image` varchar(20) NOT NULL,
  `is_available` tinyint(1) NOT NULL DEFAULT 1,
  `price` decimal(8,2) NOT NULL,
  `code` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `category_id`, `title`, `author`, `cover_image`, `is_available`, `price`, `code`) VALUES
(1, 1, 'Why Machines Learn', 'Anil Ananthaswamy', 'NF001.jpg', 1, 300.00, 'NFWHL'),
(2, 1, 'The Intelligent Investor', 'Benjamin Graham', 'NF002.jpg', 1, 120.00, 'NFTINV'),
(3, 1, 'Your Money or Your Life', 'Phoenix Principles', 'NF003.jpg', 1, 230.00, 'NFYMOL'),
(4, 1, 'The Total Money Makeover', 'Dave Ramsey', 'NF004.jpg', 1, 100.00, 'NFTMMO'),
(5, 1, 'The Millionaire Next Door', 'Thomas Stanley', 'NF005.jpg', 1, 100.00, 'NFTMND'),
(6, 1, 'Atomic Habits', 'James Clear', 'NF006.jpg', 1, 100.00, 'NFATMH'),
(7, 1, 'Superbloom', 'Nicholas Carr', 'NF007.jpg', 1, 100.00, 'NFSB'),
(8, 1, 'Co-Intelligence', 'Ethan Mollick', 'NF008.jpg', 1, 100.00, 'NFHTWF'),
(9, 1, 'Zero Risk Startup', 'Paulo Andrez', 'NF009.jpg', 1, 100.00, 'NFZRS'),
(10, 1, 'Die With Zero', 'Bill Perkins', 'NF010.jpg', 1, 100.00, 'NFDWZ'),
(11, 1, 'Knee Ability Zero', 'Ben Patrick', 'NF011.jpg', 1, 100.00, 'NFKAZ'),
(12, 1, 'Breath', 'James Nestor', 'NF012.jpg', 1, 100.00, 'NFB'),
(13, 2, 'Love and Other Words', 'Christine Lauren', 'F001.jpg', 1, 300.00, 'FLOW'),
(14, 2, 'The Notebook', 'Nicholas Sparks', 'F002.jpg', 1, 100.00, 'FTNOT'),
(15, 2, 'Me Before You', 'Jojo Moyes', 'F003.jpg', 1, 150.00, 'FMB4U'),
(16, 2, 'The Boomerang', 'Robert Bailey', 'F004.jpg', 1, 180.00, 'FTB'),
(17, 2, 'The Hating Game', 'Sally Thorne', 'F005.jpg', 1, 300.00, 'FTHG'),
(18, 2, 'The Girl on the Train', 'Paula Hawkins', 'F006.jpg', 1, 120.00, 'FTGOT'),
(19, 2, 'Gone Girl', 'Gillian Flynn', 'F007.jpg', 1, 160.00, 'FGG'),
(20, 2, 'The Silent Patient', 'Alex Michaelides', 'F008.jpg', 1, 100.00, 'FTSP'),
(21, 2, 'The Da Vinci Code', 'Dan Brown', 'F009.jpg', 1, 200.00, 'FDVC'),
(22, 2, 'The Woman in the Window', 'A. J. Finn', 'F010.jpg', 1, 350.00, 'fWIT'),
(23, 2, 'The Silo Series', 'Hugh Howey', 'F011.jpg', 1, 230.00, 'FTSS'),
(24, 2, 'Ignite Me', 'Tahereh Mafe', 'F012.jpg', 1, 190.00, 'FIM'),
(25, 3, 'A Brief History of Time', 'Stephen Hawking', 'E001.jpg', 1, 210.00, 'BHOT'),
(26, 3, 'Thinking, Fast and Slow', 'Daniel Kahneman', 'E002.jpg', 1, 110.00, 'TFAS'),
(27, 3, 'Sapiens', 'Yuval Noah Harari', 'E003.jpg', 1, 130.00, 'SAPN'),
(28, 3, 'The Selfish Gene', 'Richard Dawkins', 'E004.jpg', 1, 400.00, 'TSGN'),
(29, 3, 'Elements of Style', 'William Strunk', 'E005.jpg', 1, 400.00, 'EFS'),
(30, 3, 'Good Energy', 'Casey Means', 'E006.jpg', 1, 380.00, 'EGE'),
(31, 3, 'Diabetes Code', 'Jason Fung', 'E007.jpg', 1, 230.00, 'EDC'),
(32, 3, 'Autism Out Loud', 'Kate Swenson', 'E008.jpg', 1, 290.00, 'AUL'),
(33, 3, 'Free to Fly', 'Nicole Runyon', 'E009.jpg', 1, 340.00, 'FTF'),
(34, 3, 'She Was My Home', 'Nadia Hollo', 'E010.jpg', 1, 340.00, 'SWMH'),
(35, 3, 'It\'s Them, Not You', 'Josh Connolly', 'E011.jpg', 1, 130.00, 'ISNY'),
(36, 3, 'Teacher By Teacher', 'John B. King', 'E012.jpg', 1, 200.00, 'TBT'),
(37, 4, 'Difficult Riddles', 'M Prefontaine', 'K001.jpg', 1, 250.00, 'KDR'),
(38, 4, 'A Saint a Day', 'Maurice Sendak', 'K002.jpg', 1, 140.00, 'ASAD'),
(39, 4, 'Learn to Read', 'Hannah Braun', 'K003.jpg', 1, 105.00, 'LTR'),
(40, 4, 'Charlotte\'s Web', 'E.B. White', 'K004.jpg', 1, 125.00, 'CHWB'),
(41, 4, 'Green Eggs and Ham', 'Dr. Seuss', 'K005.jpg', 1, 235.00, 'GEAH'),
(42, 4, 'Dog Man:', 'Dac Pilkey', 'K006.jpg', 1, 135.00, 'EDG'),
(43, 4, 'Measuring Circles', 'Bonnie Worth', 'K007.jpg', 1, 200.00, 'EMC'),
(44, 4, 'Wacky Weather', 'Todd Tarpley', 'K008.jpg', 1, 270.00, 'EWW'),
(45, 4, 'All About Deserts', 'Tish Rabe', 'K009.jpg', 1, 135.00, 'AAD'),
(46, 4, 'Ocean Animals', 'Kailan Carr', 'K010.jpg', 1, 235.00, 'KOA'),
(47, 4, 'Baby\'s First Bible Stories', 'Rachel Elliot', 'K011.jpg', 1, 235.00, 'BFBS'),
(48, 4, 'Leo\'s Lunch Box', 'Raphael G. Warnock', 'K012.jpg', 1, 215.00, 'LLB');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

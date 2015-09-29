--
-- Table structure for table `event`
--

CREATE TABLE IF NOT EXISTS `event` (
  `EventId` int(11) NOT NULL,
  `EventName` varchar(30) NOT NULL,
  `EventCode` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE IF NOT EXISTS `register` (
  `RegisterId` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `Gender` char(1) DEFAULT NULL,
  `college` varchar(50) NOT NULL,
  `daiictid` int(10) DEFAULT NULL,
  `ieeeno` varchar(50) DEFAULT NULL,
  `city` varchar(30) DEFAULT NULL,
  `phoneno` int(10) NOT NULL,
  `emailid` varchar(100) NOT NULL,
  `accommodation` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `registerinfo`
--

CREATE TABLE IF NOT EXISTS `registerinfo` (
  `RegisterId` int(11) NOT NULL,
  `EventId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`EventId`);

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`RegisterId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `event`
--
ALTER TABLE `event`
  MODIFY `EventId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `RegisterId` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


insert into event(`EventName`,`EventCode`) VALUES
('iarduino',1),
('ibot',2),
('icode',3),
('ipapyrus',4),
('techhunt',5),
('iapp',6),
('idatabase',7),
('ielectro',8),
('blindc',9),
('ibiz',10),
('icrypt',11),
('iintelligence',12),
('iganith',13),
('treasurehunt',14),
('imaze',15),
('icube',16),
('iquiz',17),
('idesign',18),
('iclash',19),
('idecipher',20),
('irubble',21),
('technocafe',22);


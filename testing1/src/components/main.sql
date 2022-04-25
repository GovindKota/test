create a table
 CREATE TABLE students (
   PersonID int PRIMARY KEY,
  Name varchar(255) ,
   Address varchar(255)

 );

 insert some values
 INSERT INTO students VALUES (1, 'Govind','klm');
 INSERT INTO students VALUES (2, 'Manikanta','klm');
 INSERT INTO students VALUES (3, 'Anuradha','gwk');
 INSERT INTO students VALUES (4, 'Anusha','gwk');
 INSERT INTO students VALUES (5, 'Arresu','hyd');
 INSERT INTO students VALUES (6, 'Bogesu','hyd');

 fetching data

 SELECT * FROM students ORDER BY Name 
 SELECT * FROM students ORDER BY Name DESC
 SELECT * FROM students ORDER BY Name ASC ,Address DESC
 SELECT DISTINCT Name from students
 SELECT COUNT(DISTINCT Name) from students
 SELECT * FROM students WHERE Name='Govind'
 SELECT * FROM students WHERE Name='Govind' AND Address='klm'
 SELECT * FROM students WHERE Name='Manikanta' OR Address='klm'
 SELECT * FROM students WHERE NOT Address='hyd'
 SELECT * FROM students WHERE Name IS NULL
 UPDATE students SET Name='Anuradha' WHERE PersonID=3;
 SELECT * FROM students
 DELETE FROM students WHERE Name='Manikanta';
 SELECT * FROM students LIMIT 2
 NAME ENDING WITH a
 SELECT * FROM students WHERE Name LIKE '%a'
 NAME starting WITH A
 SELECT * FROM students WHERE Name LIKE 'A%'
 NAME MIDDLE OF THE NAME
 SELECT * FROM students WHERE Name LIKE 'A_U_%'
 SELECT * FROM students WHERE Address IN ('hyd')
CREATE TABLE student(
PersonID INT PRIMARY KEY,
Contact long,

Age INT

);

INSERT INTO student VALUES (1,'8466836076',5);
INSERT INTO student VALUES (2,'8466226076',5);
INSERT INTO student VALUES (31,'8466836077',5);
INSERT INTO student VALUES (14,'8460815076',5);
SELECT * FROM student
SELECT students.PersonID, student.Contact
FROM students
INNER JOIN student ON students.PersonID = Customers.CustomerID;
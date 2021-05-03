
create table Users
(
	userID integer primary key autoincrement,
	name varchar not null,
	email varchar not null,
	userType varchar not null,
	password varchar not null
);

CREATE TABLE "users" (
	"userID"	integer PRIMARY KEY AUTOINCREMENT,
	"firstName"	varchar NOT NULL,
	"lastName"	varchar NOT NULL,
	"emailAddress"	varchar NOT NULL,
	"password"	varchar NOT NULL,
	"userType"	varchar,
	"homeAddress"	varchar,
	"city"	varchar,
	"state"	varchar,
	"zipCode"	number
);
drop table users;
DELETE from users where userID = 1;
UPDATE users SET userType = "student",homeAddress = "1020 Edison Avenue",city = "Fresno",state = "CA",zipCode = 93703 WHERE userID = 1;
UPDATE users SET userType = "instructor",homeAddress = "30 Brandywine Drive",city = "Temple Hills",state = "MD",zipCode = 20748 WHERE userID = 2;
UPDATE users SET userType = "student",homeAddress = "1600 Westbrook Drive",city = "Gainesville",state = "VA",zipCode = 20155 WHERE userID = 3;
UPDATE users SET userType = "instructor",homeAddress = "45 Washington Road",city = "Dallas",state = "TX",zipCode = 75007 WHERE userID = 4;
UPDATE users SET userType = "instructor",homeAddress = "23 Black Pines Road",city = "Santa Monica",state = "CA",zipCode = 90401 WHERE userID = 5;
UPDATE users SET userType = "student",homeAddress = "102 Seneca Street",city = "Oxon Hill",state = "MD",zipCode = 20748 WHERE userID = 6;
UPDATE users SET userType = "student",homeAddress = "2039 Jackson Ave",city = "Laurel",state = "MD",zipCode = 20723 WHERE userID = 7;
UPDATE users SET userType = "instructor",homeAddress = "1000 Pacific Road",city = "Grand Forks",state = "ND",zipCode = 58201 WHERE userID = 8;

UPDATE users SET userType = "student",homeAddress = "1020 Edison Avenue",city = "Fresno",state = "CA",zipCode = 93703 WHERE userID = 1;
UPDATE users SET userType = "instructor",homeAddress = "30 Brandywine Drive",city = "Temple Hills",state = "MD",zipCode = 20748 WHERE userID = 2;
UPDATE users SET userType = "student",homeAddress = "1600 Westbrook Drive",city = "Gainesville",state = "VA",zipCode = 20155 WHERE userID = 3;
UPDATE users SET userType = "instructor",homeAddress = "45 Washington Road",city = "Dallas",state = "TX",zipCode = 75007 WHERE userID = 4;
UPDATE users SET userType = "instructor",homeAddress = "23 Black Pines Road",city = "Santa Monica",state = "CA",zipCode = 90401 WHERE userID = 5;
UPDATE users SET userType = "student",homeAddress = "102 Seneca Street",city = "Oxon Hill",state = "MD",zipCode = 20748 WHERE userID = 6;
UPDATE users SET userType = "student",homeAddress = "2039 Jackson Ave",city = "Laurel",state = "MD",zipCode = 20723 WHERE userID = 7;
UPDATE users SET userType = "instructor",homeAddress = "1000 Pacific Road",city = "Grand Forks",state = "ND",zipCode = 58201 WHERE userID = 8;
UPDATE users SET userType = "instructor",homeAddress = "30 Northwest Avenue",city = "Grand Forks",state = "ND",zipCode = 58201 WHERE userID = 9;
UPDATE users SET userType = "instructor",homeAddress = "32 Maxwell Drive",city = "Fresno",state = "CA",zipCode = 93703 WHERE userID = 10;
UPDATE users SET userType = "instructor",homeAddress = "1409 Heisenburg Road",city = "Santa Monica",state = "CA",zipCode = 90401 WHERE userID = 11;
UPDATE users SET userType = "instructor",homeAddress = "1410 Maxwell Drive",city = "Largo",state = "MD",zipCode = 20774 WHERE userID = 12;

create table Students (

	studentID number primary key not null,
	userID number  not null,
	userType number  not null,
	Major varchar not null,
	GPA real,

	foreign key (userID,userType) references User (userID,userType) on delete cascade

);

create table Instructors (
	instructorID primary key not null,
	userID number  not null,
	userType number  not null,
	departmentID number  not null,
	departmentName varchar not null,
	foreign key (userID,userType) references User (userID,userType) on delete cascade,
	-- foreign key (departmentID,departmentName) references (departmentID,departmentName) on delete cascade



);

create table Facility
(

	facilityID number primary key not null,
	buildingName varchar not null,
	roomNumber number not null
);

insert into Facility (facilityID,buildingName,roomNumber) values(1,"A. James Clark Building", 113);


create table Department
(
	departmentID number primary key not null,
	departmentName varchar not null,
	departmentChair varchar not null	

);

insert into Department values (2000,"Computer Science"," Michael Blackwell");


create table student(

studentID number primary key not null,
userID number  not null,
userType varchar  not null,
Major varchar not null,
GPA real,

foreign key (userID,userType) references Users (userID,userType) on delete cascade
);

INSERT into student VALUES (1,1001,'student','computers',4.0)

create table instructor(
instructorID primary key not null,
userID number  not null,
userType varchar  not null,
departmentID number  not null,
departmentName varchar not null,
foreign key (userID,userType) references User (userID,userType) on delete cascade,
foreign key (departmentID,departmentName) references Department (departmentID,departmentName) on delete cascade
);

insert into instructor values (001, 1000, "instructor", 2000, "Computer Science");
insert into instructor values (002, 1002, "instructor", 2000, "Hacking 101");
delete from instructor where instructorID = 1;

delete from users where userID = 12

create table course(

courseID number primary key,
section varchar,
hours varchar,
courseName varchar,
creditHours number,
instructorID number,
departmentID number,
facilityID number,

foreign key (instructorID) references instructor(instructorID) on delete cascade,
foreign key (departmentID) references Department (departmentID) on delete cascade,
foreign key (facilityID) references Facility (facilityID)
);

create table course(

courseID number primary key not null,
section varchar not null,
hours varchar not null,
daysOfWeek varchar not null,
courseName varchar not null,
creditHours number not null,
instructorID number not null,
departmentID number not null,
facilityID number not null,

foreign key (instructorID) references instructor(instructorID) on delete cascade,
foreign key (departmentID) references Department (departmentID) on delete cascade,
foreign key (facilityID) references Facility (facilityID) on delete cascade
);

insert into course values (400, "DEV", "3", "Code Stuff", 3, 2000, 3000, 5000);
insert into course values (401, "DEV", "3", "Logic Stuff", 3, 2003, 3002, 5004);
delete from course where courseID = 401;

insert into course (courseID,section,hours,daysOfWeek,courseName,creditHours,instructorID,departmentID,facilityID) values 
(1100,"Day","9:30am-10:45am","MWF","Statics",3,2000,3000,5000)
insert into course (courseID,section,hours,daysOfWeek,courseName,creditHours,instructorID,departmentID,facilityID) values 
(1101,"Night","6:00pm-9:30pm","TTH","Materials Science",3,2000,3000,5000)
insert into course (courseID,section,hours,daysOfWeek,courseName,creditHours,instructorID,departmentID,facilityID) values 
(1102,"Night","7:30pm-9:45pm","MWF","Student Design",3,2000,3000,5000)
insert into course (courseID,section,daysOfWeek,hours,courseName,creditHours,instructorID,departmentID,facilityID) values 
(1200,"Day","MTWTHF","8:00am-10:00am","Computer Science I",4,2003,3002,5001)
insert into course (courseID,section,daysOfWeek,hours,courseName,creditHours,instructorID,departmentID,facilityID) values 
1201,Day,MWF,10:30am-12:00pm,Data Structures and Analysis,3,2003,3002,5001
insert into course (courseID,section,daysOfWeek,hours,courseName,creditHours,instructorID,departmentID,facilityID) values 
1202,Day,TTH,1:00pm-2:15pm,Machine Learning,3,2003,3002,5001
insert into course (courseID,section,daysOfWeek,hours,courseName,creditHours,instructorID,departmentID,facilityID) values 
1300,Day,MWF,2:30pm-3:35pm,Intro to Information Tech,3,2005,3004,5003
insert into course (courseID,section,hours,daysOfWeek,courseName,creditHours,instructorID,departmentID,facilityID) values 
1301,Night,MWF,6:00pm-8:45pm,Cloud Computing,3,2005,3004,5003
insert into course (courseID,section,hours,daysOfWeek,courseName,creditHours,instructorID,departmentID,facilityID) values 
1302,Night,TTH,7:00pm-9:15pm,Systems Analysis,4,2005,3004,5003
insert into course (courseID,section,hours,daysOfWeek,courseName,creditHours,instructorID,departmentID,facilityID) values 
1400,Day,TTH,8:00am-9:30am,College Algebra,3,2001,3001,5005
insert into course (courseID,section,hours,daysOfWeek,courseName,creditHours,instructorID,departmentID,facilityID) values 
1401,Day,TTH,10:00am-11:30am,Trigonometry,3,2001,3001,5005
insert into course (courseID,section,hours,daysOfWeek,courseName,creditHours,instructorID,departmentID,facilityID) values 
1402,Day,MWF,9:30am-10:45am,Calculus I,3,2001,3001,5005
insert into course (courseID,section,hours,daysOfWeek,courseName,creditHours,instructorID,departmentID,facilityID) values 
1500,Day,MWF,8:30am-10:00am,Engish Composition I,3,2007,3003,5006
insert into course (courseID,section,hours,daysOfWeek,courseName,creditHours,instructorID,departmentID,facilityID) values 
1501,Day,MWF,9:30am-10:45am,General Psychology,3,2007,3003,5006
insert into course (courseID,section,hours,daysOfWeek,courseName,creditHours,instructorID,departmentID,facilityID) values 
1502,Day,MWF,8:00am-10:45am,Cultural Anthropology,3,2007,3003,5006
insert into course (courseID,section,hours,daysOfWeek,courseName,creditHours,instructorID,departmentID,facilityID) values 
1600,Day,MW,9:00am-10:25am,Intro to Business,3,2006,3005,5002
insert into course (courseID,section,hours,daysOfWeek,courseName,creditHours,instructorID,departmentID,facilityID) values 
1601,Night,TTH,6:00pm-7:45pm,Adv Advertisement,3,2006,3005,5002
insert into course (courseID,section,hours,daysOfWeek,courseName,creditHours,instructorID,departmentID,facilityID) values 
1602,Day,TTH,9:00am-10:45am,Principles of Finance,3,2006,3005,5002

drop table enrollment;

create table enrollment(

enrollmentID integer PRIMARY KEY AUTOINCREMENT,
studentID number not null,
courseID number not null,
dateEnrolled date not null,
foreign key (studentID) references student (studentID) on delete cascade,
foreign key (courseID) references course (courseID) on delete cascade
);

INSERT into enrollment (studentID,courseID,dateEnrolled) VALUES (1002,1100,DATE())

SELECT 
            courseID, 
            courseName, 
            creditHours, 
            course.instructorID AS Course, 
            instructor.userID AS Instructor, 
            users.name AS Name
        FROM
            course 
        INNER JOIN instructor on instructor.instructorID = course.instructorID 
        INNER JOIN users on users.userID = instructor.userID;

		SELECT 
            courseID, 
            courseName, 
            creditHours, 
            course.instructorID AS Course, 
            instructor.userID AS Instructor, 
            users.name AS Name
        FROM
            course 
        INNER JOIN instructor on instructor.instructorID = course.instructorID 
        INNER JOIN users on users.userID = instructor.userID
        WHERE CourseID = 401;

		SELECT courseID, courseName, creditHours, course.instructorID AS Course, instructor.userID AS Instructor, users.name AS Name FROM course INNER JOIN instructor on instructor.instructorID = course.instructorID INNER JOIN users on users.userID = instructor.userID where courseID = 401;

        select 
                    c.courseID, 
                    courseName, 
                    creditHours, 
                    c.instructorID AS instructorId,
                    u.firstname AS instructorName,
                    i.departmentName,
                    1 as registered
                from course c
                INNER JOIN instructor i on i.instructorID = c.instructorID 
                INNER JOIN users u on u.userID = i.userID
                where courseID not in (
                    select courseID from enrollment e
                    inner join student s 
                    on s.studentID = e.studentID
                    inner join Users u
                    on s.userId = u.userID
                    where u.userID = 1001
                )
                union
                select 
                    c.courseID, 
                    courseName, 
                    creditHours, 
                    c.instructorID AS instructorId,
                    u.firstname AS instructorName,
                    i.departmentName,
                    0 as registered
                from course c
                INNER JOIN instructor i on i.instructorID = c.instructorID 
                INNER JOIN users u on u.userID = i.userID
                where courseID in (
                    select courseID from enrollment e
                    inner join student s 
                    on s.studentID = e.studentID
                    inner join Users u
                    on s.userId = u.userID
                    where u.userID = 1001
                )

                select 
                    c.courseID, 
                    courseName, 
                    creditHours, 
                    c.instructorID AS instructorId,
                    u.firstname AS instructorName,
                    u
                    i.departmentName,
                    0 as registered
                from course c
                INNER JOIN instructor i on i.instructorID = c.instructorID 
                INNER JOIN users u on u.userID = i.userID
                where courseID not in (
                    select courseID from enrollment e
                    inner join student s 
                    on s.studentID = e.studentID
                    inner join Users u
                    on s.userId = u.userID
                    where u.userID = 1
                )
                union
                select 
                    c.courseID, 
                    courseName, 
                    creditHours, 
                    c.instructorID AS instructorId,
                    u.firstname AS instructorName,
                    i.departmentName,
                    1 as registered
                from course c
                INNER JOIN instructor i on i.instructorID = c.instructorID 
                INNER JOIN users u on u.userID = i.userID
                where courseID in (
                    select courseID from enrollment e
                    inner join student s 
                    on s.studentID = e.studentID
                    inner join Users u
                    on s.userId = u.userID
                    where u.userID = 1
                )

        select * 
            from enrollment e
            inner join student s on s.studentid = e.studentid
            inner join users u on u.userid = s.userid
            where u.userID = 1

select userID, firstname, lastname, emailaddress, usertype, homeaddress, city, state, zipcode from Users where userID = 3

INSERT into enrollment (studentID,courseID,dateEnrolled) VALUES (1001,400,DATE())

UPDATE users SET city = NULL WHERE userID = 3
update users set city) values ('Tallahassee') where userid = 3

ALTER TABLE enrollment ADD COLUMN finalgrade varchar

select C.*
from course c
INNER JOIN instructor i on i.instructorID = c.instructorID
INNER JOIN users u on u.userID = i.userID
where u.userID = 2

select 
                e.courseID, 
                e.enrollmentID, 
                u.firstName, 
                u.lastName
            from enrollment e
            inner join student s on e.studentID = s.studentID
            inner join users u on u.userID = s.userID
            where e.courseID = 1

SELECT 
            c.courseID,
            c.section, 
            c.hours, 
            c.courseName, 
            u.firstName || ' ' || u.lastName as instructorName,
            c.instructorID
        FROM course c
        INNER JOIN instructor i on i.instructorID = c.instructorID
        INNER JOIN users u on u.userID = i.userID
        where u.userID = 2

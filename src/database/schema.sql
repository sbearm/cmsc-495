
create table Users
(
	userID integer primary key autoincrement,
	name varchar not null,
	email varchar not null,
	userType varchar not null,
	password varchar not null
);

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


create table course(

courseID number primary key not null,
section varchar not null,
hours varchar not null,
courseName varchar not null,
creditHours number not null,
instructorID number not null,
departmentID number not null,
facilityID number not null,

foreign key (instructorID) references instructor(instructorID) on delete cascade,
foreign key (departmentID) references Department (departmentID) on delete cascade,
foreign key (facilityID) references Facility (facilityID)
);

create table enrollment(

enrollmentID number primary key not null,
studentID number not null,
courseID number not null,
dateEnrolled date not null,
foreign key (studentID) references student (studentID) on delete cascade,
foreign key (courseID) reference course (courseID) on delete cascade






);
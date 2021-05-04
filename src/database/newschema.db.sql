BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "users" (
	"userID"	integer,
	"firstName"	varchar NOT NULL,
	"lastName"	varchar NOT NULL,
	"emailAddress"	varchar NOT NULL,
	"password"	varchar NOT NULL,
	"userType"	varchar,
	"homeAddress"	varchar,
	"city"	varchar,
	"state"	varchar,
	"zipCode"	number,
	PRIMARY KEY("userID" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "student" (
	"studentID"	number NOT NULL,
	"userID"	number NOT NULL,
	"userType"	number NOT NULL,
	"Major"	varchar NOT NULL,
	"GPA"	real,
	PRIMARY KEY("studentID"),
	FOREIGN KEY("userID") REFERENCES "users"("userID") on delete cascade
);
CREATE TABLE IF NOT EXISTS "Department" (
	"departmentID"	number NOT NULL,
	"departmentName"	varchar NOT NULL,
	"departmentChair"	varchar NOT NULL,
	PRIMARY KEY("departmentID")
);
CREATE TABLE IF NOT EXISTS "Facility" (
	"facilityID"	number NOT NULL,
	"buildingName"	varchar NOT NULL,
	"roomNumber"	number NOT NULL,
	PRIMARY KEY("facilityID")
);
CREATE TABLE IF NOT EXISTS "enrollment" (
	"enrollmentID"	integer,
	"studentID"	number NOT NULL,
	"courseID"	number NOT NULL,
	"dateEnrolled"	date NOT NULL,
	"finalgrade"	varchar,
	PRIMARY KEY("enrollmentID" AUTOINCREMENT),
	FOREIGN KEY("studentID") REFERENCES "student"("studentID") on delete cascade,
	FOREIGN KEY("courseID") REFERENCES "course"("courseID") on delete cascade
);
CREATE TABLE IF NOT EXISTS "course" (
	"courseID"	number NOT NULL,
	"section"	varchar NOT NULL,
	"hours"	varchar NOT NULL,
	"daysOfWeek"	varchar NOT NULL,
	"courseName"	varchar NOT NULL,
	"creditHours"	number NOT NULL,
	"instructorID"	number NOT NULL,
	"departmentID"	number NOT NULL,
	"facilityID"	number NOT NULL,
	PRIMARY KEY("courseID"),
	FOREIGN KEY("departmentID") REFERENCES "Department"("departmentID") on delete cascade,
	FOREIGN KEY("facilityID") REFERENCES "Facility"("facilityID") on delete cascade,
	FOREIGN KEY("instructorID") REFERENCES "instructor"("instructorID") on delete cascade
);
CREATE TABLE IF NOT EXISTS "instructor" (
	"instructorID"	NUMERIC NOT NULL,
	"userID"	number NOT NULL,
	"userType"	number NOT NULL,
	"departmentID"	number NOT NULL,
	"departmentName"	varchar NOT NULL,
	PRIMARY KEY("instructorID"),
	FOREIGN KEY("userID") REFERENCES "users"("userID") on delete cascade,
	FOREIGN KEY("departmentID") REFERENCES "Department"("departmentID") on delete cascade
);
COMMIT;

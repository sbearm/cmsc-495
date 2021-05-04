class Student:

    def __init__(self, data):
        self.id = data[0]
        self.firstname = data[1]
        self.lastname = data[2]
        self.email = data[3]
        self.userType = data[4]

    @property
    def serialized(self):
        return {
            'id': self.id,
            'firstname': self.firstname,
            'lastname': self.lastname,
            'email': self.email,
            'userType': self.userType
        }

class User:

    def __init__(self, data):
        self.userID = data[0]
        self.firstname = data[1]
        self.lastname = data[2]
        self.emailaddress = data[3]
        self.userType = data[4]
        self.homeaddress = data[5]
        self.city = data[6]
        self.state = data[7]
        self.zipcode = data[8]


    @property
    def serialized(self):
        return {
            'userID': self.userID,
            'firstname': self.firstname,
            'lastname': self.lastname,
            'emailaddress': self.emailaddress,
            'userType': self.userType,
            'homeaddress': self.homeaddress,
            'city': self.city,
            'state': self.state,
            'zipcode': self.zipcode
        }

class Classes:

    def __init__(self, data):
        self.courseID = data[0]
        self.courseName = data[1]
        self.creditHours = data[2]
        self.instructorID = data[3]
        self.firstname = data [4]
        self.lastname = data [5]
        self.departmentName = data[6]
        self.registered = bool(data[7])

    @property
    def serialized(self):
        return {
            'courseID': self.courseID,
            'courseName': self.courseName,
            'creditHours': self.creditHours,
            'instructorID': self.instructorID,
            'firstname': self.firstname,
            'lastname': self.lastname,
            'departmentName': self.departmentName,
            'registered': self.registered            
        }

class ClassDetail:

    def __init__(self, data):
        self.courseID = data[0]
        self.courseName = data[1]
        self.creditHours = data[2]
        self.instructorID = data[3]
        self.firstname = data [4]
        self.lastname = data [5]
        self.departmentName = data[6]

    @property
    def serialized(self):
        return {
            'courseID': self.courseID,
            'courseName': self.courseName,
            'creditHours': self.creditHours,
            'instructorID': self.instructorID,
            'firstname': self.firstname,
            'lastname': self.lastname,
            'departmentName': self.departmentName           
        }

class TeacherClass:

    def __init__(self, data):
        self.courseID = data[0]
        self.section = data[1]
        self.hours = data[2]
        self.courseName = data[3]
        self.instructorName = data[4]
        self.students = []

    @property
    def serialized(self):
        return {
            'courseID': self.courseID,
            'section': self.section,
            'hours': self.hours,
            'courseName': self.courseName,
            'instructorName': self.instructorName,
            'students': self.students
        }

class TeacherStudents:
    def __init__(self, data):
        self.courseID = data[0]
        self.enrollmentID = data[1]
        self.firstName = data[2]
        self.lastName = data[3]
        self.finalGrade = data[4]

    @property
    def serialized(self):
        return {
            'courseID': self.courseID,
            'enrollmentID': self.enrollmentID,
            'firstName': self.firstName,
            'lastName': self.lastName,
            'finalGrade': self.finalGrade,
        }
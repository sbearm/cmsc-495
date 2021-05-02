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
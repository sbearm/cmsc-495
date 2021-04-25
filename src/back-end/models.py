class Student:

    def __init__(self, data):
        self.id = data[0]
        self.name = data[1]
        self.email = data[2]

    @property
    def serialized(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email
        }

class Classes:

    def __init__(self, data):
        self.courseID = data[0]
        self.courseName = data[1]
        self.creditHours = data[2]
        self.instructorID = data[3]
        self.name = data [4]
        self.departmentName = data[5]
        self.registered = bool(data[6])

    @property
    def serialized(self):
        return {
            'courseID': self.courseID,
            'courseName': self.courseName,
            'creditHours': self.creditHours,
            'instructorID': self.instructorID,
            'name': self.name,
            'departmentName': self.departmentName,
            'registered': self.registered            
        }

class ClassDetail:

    def __init__(self, data):
        self.courseID = data[0]
        self.courseName = data[1]
        self.creditHours = data[2]
        self.instructorID = data[3]
        self.name = data [4]
        self.departmentName = data[5]

    @property
    def serialized(self):
        return {
            'courseID': self.courseID,
            'courseName': self.courseName,
            'creditHours': self.creditHours,
            'instructorID': self.instructorID,
            'name': self.name,
            'departmentName': self.departmentName           
        }
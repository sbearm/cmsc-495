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
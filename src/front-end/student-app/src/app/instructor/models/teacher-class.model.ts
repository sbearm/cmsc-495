export interface TeacherClass {
    courseID: number,
    courseName: string,
    hours: string,
    instructorName: string,
    section: string,
    students: TeacherStudent[]
}

export interface TeacherStudent {
    courseID: number,
    enrollmentID: number,
    firstName: string,
    lastName: string,
    finalGrade: string,
    newGrade: string
}
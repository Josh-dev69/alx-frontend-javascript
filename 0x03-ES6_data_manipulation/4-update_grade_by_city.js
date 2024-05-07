export default function (studentList, city, newGrade) {
  return studentList.filter((student) => student.location === city)
    .map((student) => {
      const matchGrade = newGrade.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: matchGrade ? matchGrade.grade : 'N/A',
      };
    });
}

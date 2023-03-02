function solve(students) {
    const grades = {};

    for (const student of students) {
        studentInfo = student.split(', ');
        let studentName = studentInfo[0].split(': ')[1];
        let grade = Number(studentInfo[1].split(': ')[1]) + 1;
        let studentGrade = Number(studentInfo[2].split(': ')[1]);

        if (!(grade in grades)) {
            grades[grade] = [];
        }

        if (studentGrade >= 3) {
            grades[grade].push({studentName, studentGrade});
        }
    }

    for (const [grade, studentsInGrade] of Object.entries(grades)) {
        let gradesSum = 0;
        let gradesLength = 0;
        let studentsArr = [];
        for (const student of studentsInGrade) {
            gradesLength++;
            gradesSum += student['studentGrade'];
            studentsArr.push(student['studentName']);
        }
        if (grades[grade].length > 0) {
            console.log(`${grade} Grade`);
            console.log(`List of students: ${studentsArr.join(', ')}`);
            console.log(`Average annual score from last year: ${(gradesSum / gradesLength).toFixed(2)}\n`);
        }
    }
}

solve([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
]);

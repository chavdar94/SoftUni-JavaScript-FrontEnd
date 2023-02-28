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
        console.log(`${grade} Grade`);
        let gradesSum = 0;
        let gradesLength = 0;
        let studentsArr = [];
        for (const student of studentsInGrade) {
            gradesLength++;
            gradesSum += student['studentGrade'];
            studentsArr.push(student['studentName']);
        }
        console.log(`List of students: ${studentsArr.join(', ')}`);
        console.log(`Average annual score from last year: ${(gradesSum / gradesLength).toFixed(2)}`);
    }
}


solve(
    ["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"]);



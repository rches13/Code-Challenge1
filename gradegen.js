function getStudentGrade() {

    const marks =("Enter Mark");
  
    if (isNaN(marks) || marks < 0 || marks > 100) {
      console.log("Invalid Number");
    }
  
    let grade;
    if (marks > 79) {
      grade = "A";
    } else if (marks >= 60) {
      grade = "B";
    } else if (marks >= 49) {
      grade = "C";
    } else if (marks >= 40) {
      grade = "D";
    } else {
      grade = "E";
    }
  
    console.log("Student Grade:", grade);
  }
  
  getStudentGrade();
  
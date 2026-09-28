function displayProfile() {

    const name =
        document.getElementById("name").value.trim() ||
        "Not provided";

    const roll =
        document.getElementById("roll").value.trim() ||
        "Not provided";

    const markInput =
        document.getElementById("mark").value;

    let mark = parseInt(markInput);

    if (isNaN(mark) || mark < 0) {
        mark = 0;
    }

    if (mark > 100) {
        mark = 100;
    }

    let grade;

    if (mark >= 90) {
        grade = "A+";
    }
    else if (mark >= 80) {
        grade = "A";
    }
    else if (mark >= 70) {
        grade = "B+";
    }
    else if (mark >= 60) {
        grade = "B";
    }
    else if (mark >= 50) {
        grade = "C";
    }
    else if (mark >= 40) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    document.getElementById("dispName").textContent = name;

    document.getElementById("dispRoll").textContent = roll;

    document.getElementById("dispMark").textContent = mark;

    document.getElementById("dispGrade").textContent = grade;
}
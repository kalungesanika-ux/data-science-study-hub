let currentYear = "";
let currentStep = 1;

let subjects = {
    FY: {
        1: ["Introduction to DBMS", "Introduction to R Programming", "C Programming"],
        2: ["Introduction to Data Science", "Introduction to Python Programming"]
    },

    SY: {
        3: ["Statistical Computing I", "Classification and Regression I", "Application of Data Science"],
        4: ["Statistical Computing II", "Classification and Regression II", "AI and Data in Everyday Life"]
    },

    TY: {
        5: ["Subject 1", "Subject 2"],
        6: ["Subject 3", "Subject 4"]
    }
};

// SHOW STUDY SECTION
function showStudy() {
    document.getElementById("study").scrollIntoView();
}

// SELECT YEAR
function showYear(year) {

    currentYear = year;
    currentStep = 2;

    document.getElementById("year-box").classList.add("hidden");
    document.getElementById("workspace").classList.remove("hidden");

    document.getElementById("year-title").innerHTML = year + " - Select Semester";

    let output = "";

    for (let sem in subjects[year]) {
        output += "<button onclick='showSemester(" + sem + ")'>Semester " + sem + "</button>";
    }

    document.getElementById("semester-box").innerHTML = output;

    document.getElementById("study-layout").classList.add("hidden");
}

// SELECT SEMESTER
function showSemester(semester) {

    currentStep = 3;

    let list = subjects[currentYear][semester];
    let output = "<h3>Semester " + semester + " - Subjects</h3>";

    for (let i = 0; i < list.length; i++) {
        output += "<button onclick='showSubject(" + i + "," + semester + ")'>" + list[i] + "</button>";
    }

    document.getElementById("semester-content").innerHTML = output;

    document.getElementById("materials").innerHTML =
        "<h3>Study Material</h3><p>Select a subject.</p>";

    document.getElementById("study-layout").classList.remove("hidden");
}

// SELECT SUBJECT
function showSubject(index, semester) {

    currentStep = 4;

    let subject = subjects[currentYear][semester][index];

    document.getElementById("materials").innerHTML =
        "<h3>" + subject + "</h3>" +
        "<button onclick=\"showMessage('Notes')\">Notes</button>" +
        "<button onclick=\"showMessage('PYQs')\">PYQs</button>" +
        "<button onclick=\"showMessage('Practicals')\">Practicals</button>" +
        "<button onclick=\"showMessage('Assignments')\">Assignments</button>";
}

// MATERIAL MESSAGE
function showMessage(type) {

    document.getElementById("material-message").innerHTML =
        type + " will be added soon.";
}

// BACK BUTTON
function goBack() {

    if (currentStep === 4) {
        document.getElementById("materials").innerHTML =
            "<h3>Study Material</h3><p>Select a subject.</p>";

        currentStep = 3;
    }

    else if (currentStep === 3) {
        document.getElementById("study-layout").classList.add("hidden");
        currentStep = 2;
    }

    else if (currentStep === 2) {
        document.getElementById("workspace").classList.add("hidden");
        document.getElementById("year-box").classList.remove("hidden");
        currentStep = 1;
    }
}
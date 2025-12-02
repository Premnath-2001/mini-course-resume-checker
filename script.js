// 3 dummy courses
const courses = [
    {
        name: "Java Basics",
        duration: "4 weeks",
        description: "Learn core Java, OOPS, loops, arrays."
    },
    {
        name: "Web Development",
        duration: "6 weeks",
        description: "HTML, CSS, JavaScript, basic projects."
    },
    {
        name: "SQL Mastery",
        duration: "3 weeks",
        description: "Queries, Joins, CRUD, indexing."
    }
];

function loadCourses() {
    const list = document.getElementById("course-list");

    courses.forEach((course, index) => {
        list.innerHTML += `
            <div class="course">
                <h3>${course.name}</h3>
                <p>Duration: ${course.duration}</p>
                <button onclick="showDetails(${index})">View Details</button>
            </div>
        `;
    });
}

function showDetails(i) {
    document.getElementById("detail-title").innerText = courses[i].name;
    document.getElementById("detail-desc").innerText = courses[i].description;
    document.getElementById("details-box").classList.remove("hidden");
}

function closeDetails() {
    document.getElementById("details-box").classList.add("hidden");
}

function checkScore() {
    const resumeText = document.getElementById("resume-text").value.toLowerCase();
    const jobTitle = document.getElementById("job-title").value.toLowerCase();
    let score = 0;

    // +50 if resume contains job title
    if (resumeText.includes(jobTitle)) {
        score += 50;
    }

    // check keywords
    const keywords = ["experience", "skills", "project"];
    keywords.forEach(word => {
        if (resumeText.includes(word)) {
            score += 10;
        }
    });

    if (score > 100) score = 100;

    document.getElementById("score-output").innerText = "Your Resume Score: " + score + "/100";
}


loadCourses();

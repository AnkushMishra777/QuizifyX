console.log("QuizifyX JavaScript loaded!");

const Darkmodetoggle = document.getElementById("toggle");
const body = document.body;

if (localStorage.getItem("Darkmode") === "true") {
    body.classList.add("dark-mode");
    Darkmodetoggle.checked = true;
}
else {
    body.classList.remove("dark-mode");
}

Darkmodetoggle.addEventListener("change", function () {

    if (Darkmodetoggle.checked) {
        console.log("It is on ");
        body.classList.add("dark-mode");
        localStorage.setItem("Darkmode", "true");
    }
    else {
        console.log("It is off");
        body.classList.remove("dark-mode");
        localStorage.setItem("Darkmode", "false");
    }

});

const navItems = document.querySelectorAll(".nav-item");
console.log(navItems);

const welcomeMessage = document.querySelector(".message-container h2");
console.log(welcomeMessage);

welcomeMessage.textContent = "Welcome to QuizifyX!";


const categoriesSection = document.querySelector(".categories-section");
console.log(categoriesSection);
const dashboardSection = document.querySelector(".quiz-container");
const dailyChallengeSection = document.querySelector(".daily-challenge");
console.log(dailyChallengeSection);

const leaderboardSection = document.querySelector(".leaderboard-card");

const QuizzesSection = document.querySelector(".recommended-section");
console.log(QuizzesSection);

const HistorySection = document.querySelector(".continue-quiz-section")
console.log(HistorySection);

const profileSection = document.querySelector(".user-profile");
console.log(profileSection);

const sections = document.querySelectorAll(
    ".quiz-container, .categories-section, .continue-quiz-section, .recommended-section, .daily-challenge, .statistics-card, .leaderboard-card, .user-profile, .invite-card"
);

const categoryCards = document.querySelectorAll(".category-card");
console.log(categoryCards);


navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        const clickedText = item.querySelector("span").textContent.trim().replace(/\s+/g, " ");

        console.log("Clicked:", clickedText);

        sections.forEach(function (section) {
            section.classList.remove("highlighted");
        });

        if (clickedText === "Dashboard") {

            welcomeMessage.textContent = "Welcome to QuizifyX!";
        }

        else if (clickedText === "Categories") {

            welcomeMessage.textContent = "Categories";
            categoriesSection.classList.add("highlighted");

        }

        else if (clickedText === "Daily Challenges") {

            welcomeMessage.textContent = "Daily Challenges";
            dailyChallengeSection.classList.add("highlighted");

        }

        else if (clickedText === "Leaderboard") {

            welcomeMessage.textContent = "Leaderboard";
            leaderboardSection.classList.add("highlighted");

        }

        else if (clickedText === "Quizzes") {

            welcomeMessage.textContent = "Quizzes";
            QuizzesSection.classList.add("highlighted");

        }

        else if (clickedText === "History") {

            welcomeMessage.textContent = "Where you left off";
            HistorySection.classList.add("highlighted");

        }

        else if (clickedText === "Profile") {

            welcomeMessage.textContent = "Ankush Mishra";
            profileSection.classList.add("highlighted");

        }

        navItems.forEach(function (navItem) {
            navItem.classList.remove("active");
        });

        item.classList.add("active");

    });

});

categoryCards.forEach(function (card) {

    card.addEventListener("click", function () {
        const categoryName = card.querySelector("h4").textContent;
        console.log(categoryName);

        const selectedQuestions = quizQuestions[categoryName];
        console.log(selectedQuestions);
    });

});

const quizQuestions = {

    Science: [

        {
            question: "What is the chemical symbol for water?",
            options: ["H₂O", "CO₂", "O₂", "NaCl"],
            answer: "H₂O"
        },

        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Venus"],
            answer: "Mars"
        },

        {
            question: "What gas do plants primarily absorb during photosynthesis?",
            options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
            answer: "Carbon dioxide"
        }

    ]

};
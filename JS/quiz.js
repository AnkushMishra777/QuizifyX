console.log("QuizifyX JavaScript loaded!");


// ========================================
// DARK MODE
// ========================================

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

        console.log("It is on");
        body.classList.add("dark-mode");
        localStorage.setItem("Darkmode", "true");

    }
    else {

        console.log("It is off");
        body.classList.remove("dark-mode");
        localStorage.setItem("Darkmode", "false");

    }

});


// ========================================
// NAVIGATION
// ========================================

const navItems = document.querySelectorAll(".nav-item");

const welcomeMessage = document.querySelector(".message-container h2");

welcomeMessage.textContent = "Welcome to QuizifyX!";


const categoriesSection = document.querySelector(".categories-section");

const dashboardSection = document.querySelector(".quiz-container");

const dailyChallengeSection = document.querySelector(".daily-challenge");

const leaderboardSection = document.querySelector(".leaderboard-card");

const QuizzesSection = document.querySelector(".recommended-section");

const HistorySection = document.querySelector(".continue-quiz-section");

const profileSection = document.querySelector(".user-profile");


const sections = document.querySelectorAll(
    ".quiz-container, .categories-section, .continue-quiz-section, .recommended-section, .daily-challenge, .statistics-card, .leaderboard-card, .user-profile, .invite-card"
);


navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        const clickedText = item
            .querySelector("span")
            .textContent
            .trim()
            .replace(/\s+/g, " ");

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


// ========================================
// QUIZ QUESTIONS DATA
// ========================================



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


// ========================================
// QUIZ SCREEN ELEMENTS
// ========================================

const quizScreen = document.querySelector(".quiz-screen");

const quizTitle = document.querySelector(".quiz-header h2");

const questioncounter = document.querySelector(".quiz-header p");

const Questions = document.querySelector(".question-container h3");

const optionsContainer = document.querySelector(".options");

const nextButton = document.querySelector(".next-btn");


// ========================================
// QUIZ STATE
// ========================================

let selectedQuestions = [];

let currentQuestionIndex = 0;

let userAnswers = [];

let selectedAnswer = null;

// ========================================
// SHOW QUESTION
// ========================================

function showQuestion() {

    const currentQuestion =
        selectedQuestions[currentQuestionIndex];


    Questions.textContent =
        currentQuestion.question;


    questioncounter.textContent =
        `Question ${currentQuestionIndex + 1} of ${selectedQuestions.length}`;


    optionsContainer.innerHTML = "";


    selectedAnswer = null;


    currentQuestion.options.forEach(function (option) {

        const optionButton =
            document.createElement("button");

        optionButton.textContent = option;


        optionButton.addEventListener("click", function () {

            selectedAnswer = option;

            console.log("Selected answer:", selectedAnswer);


            const allOptionButtons =
                optionsContainer.querySelectorAll("button");


            allOptionButtons.forEach(function (button) {

                button.classList.remove("selected");

            });


            optionButton.classList.add("selected");

        });


        optionsContainer.appendChild(optionButton);

    });

}


// ========================================
// CATEGORY SELECTION
// ========================================

const categoryCards =
    document.querySelectorAll(".category-card");


categoryCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const categoryName =
            card.querySelector("h4").textContent.trim();


        console.log("Selected category:", categoryName);


        selectedQuestions =
            quizQuestions[categoryName];


        console.log(
            "Selected questions:",
            selectedQuestions
        );


        // If category doesn't have questions
        if (!selectedQuestions) {

            console.log(
                "No questions available for this category."
            );

            return;

        }

       
        // Start from Question 1
        currentQuestionIndex = 0;
        userAnswers = [];


        // Change quiz title
        quizTitle.textContent =
            categoryName + " Quiz";


        // Display Question 1
        showQuestion();

        quizScreen.style.display = "flex";
        
    });

});


// ========================================
// NEXT BUTTON
// ========================================

nextButton.addEventListener("click", function () {

    if (selectedAnswer === null) {

        console.log("Please select an answer first.");

        return;

    }


    userAnswers[currentQuestionIndex] =
        selectedAnswer;


    console.log("Saved answers:", userAnswers);


    if (
        currentQuestionIndex <
        selectedQuestions.length - 1
    ) {

        currentQuestionIndex++;

        showQuestion();

    }

    else {

        console.log("Quiz completed!");

        console.log("Final answers:", userAnswers);

    }

});
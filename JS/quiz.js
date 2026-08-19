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

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        const clickedText = item.querySelector("span").textContent;
        console.log(clickedText);
        welcomeMessage.textContent = "Categories";
        
        categoriesSection.classList.remove("highlighted");
        sections.forEach(function(section) {
    section.classList.remove("highlighted");
});

        if (clickedText === "Categories") {
            categoriesSection.classList.add("highlighted");
        }
        navItems.forEach(function (navItem) {
            navItem.classList.remove("active");
        });
        item.classList.add("active");
    });
});



const welcomeMessage = document.querySelector(".message-container h2");
console.log(welcomeMessage);
welcomeMessage.textContent = "Welcome to QuizifyX!";
const categoriesSection = document.querySelector(".categories-section");
console.log(categoriesSection);

const sections = document.querySelectorAll(
    ".quiz-container, .categories-section, .continue-quiz-section, .recommended-section, .daily-challenge, .statistics-card, .leaderboard-card, .invite-card"
);
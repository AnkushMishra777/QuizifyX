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

const welcomeMessage =
    document.querySelector(".message-container h2");

welcomeMessage.textContent = "Welcome to QuizifyX!";

const categoriesSection =
    document.querySelector(".categories-section");

const dailyChallengeSection =
    document.querySelector(".daily-challenge");

const leaderboardSection =
    document.querySelector(".leaderboard-card");

const QuizzesSection =
    document.querySelector(".recommended-section");

const HistorySection =
    document.querySelector(".continue-quiz-section");

const profileSection =
    document.querySelector(".user-profile");

const sections = document.querySelectorAll(
    ".quiz-container, .categories-section, .continue-quiz-section, .recommended-section, .daily-challenge, .statistics-card, .leaderboard-card, .user-profile, .invite-card"
);


navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        const clickedText =
            item
                .querySelector("span")
                .textContent
                .trim()
                .replace(/\s+/g, " ");

        console.log("Clicked:", clickedText);


        sections.forEach(function (section) {

            section.classList.remove("highlighted");

        });


        if (clickedText === "Dashboard") {

            welcomeMessage.textContent =
                "Welcome to QuizifyX!";

        }

        else if (clickedText === "Categories") {

            welcomeMessage.textContent =
                "Categories";

            categoriesSection.classList.add("highlighted");

        }

        else if (clickedText === "Daily Challenges") {

            welcomeMessage.textContent =
                "Daily Challenges";

            dailyChallengeSection.classList.add("highlighted");

        }

        else if (clickedText === "Leaderboard") {

            welcomeMessage.textContent =
                "Leaderboard";

            leaderboardSection.classList.add("highlighted");

        }

        else if (clickedText === "Quizzes") {

            welcomeMessage.textContent =
                "Quizzes";

            QuizzesSection.classList.add("highlighted");

        }

        else if (clickedText === "History") {

            welcomeMessage.textContent =
                "Where you left off";

            HistorySection.classList.add("highlighted");

        }

        else if (clickedText === "Profile") {

            welcomeMessage.textContent =
                "Ankush Mishra";

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
            question: "What is the atomic number of Carbon?",
            options: ["4", "6", "8", "12"],
            answer: "6"
        },
        {
            question: "Which gas is known as the 'Laughing Gas'?",
            options: ["CO₂", "O₃", "N₂O", "NH₃"],
            answer: "N₂O"
        },
        {
            question: "What is the pH of pure water at 25°C?",
            options: ["6", "7", "8", "14"],
            answer: "7"
        },
        {
            question: "Which element has the highest electronegativity?",
            options: ["Oxygen", "Chlorine", "Fluorine", "Nitrogen"],
            answer: "Fluorine"
        },
        {
            question: "What is the chemical formula of common salt?",
            options: ["KCl", "NaCl", "NaHCO₃", "CaCO₃"],
            answer: "NaCl"
        },
        {
            question: "Which law states that the volume of a gas is inversely proportional to pressure at constant temperature?",
            options: ["Charles's Law", "Boyle's Law", "Avogadro's Law", "Dalton's Law"],
            answer: "Boyle's Law"
        },
        {
            question: "What is the oxidation state of Manganese in KMnO₄?",
            options: ["+2", "+4", "+7", "+5"],
            answer: "+7"
        },
        {
            question: "Which of the following is a noble gas?",
            options: ["Neon", "Krypton", "Both A and B", "Argon"],
            answer: "Neon"
        },
        {
            question: "What is the IUPAC name of CH₃COOH?",
            options: ["Methanoic acid", "Ethanoic acid", "Propanoic acid", "Butanoic acid"],
            answer: "Ethanoic acid"
        },
        {
            question: "Which type of bond is formed between Na and Cl in NaCl?",
            options: ["Covalent", "Ionic", "Metallic", "Hydrogen"],
            answer: "Ionic"
        },
        {
            question: "What is the molar mass of H₂O?",
            options: ["16 g/mol", "18 g/mol", "20 g/mol", "22 g/mol"],
            answer: "18 g/mol"
        },
        {
            question: "Which of the following is a strong acid?",
            options: ["CH₃COOH", "H₂CO₃", "HCl", "H₂S"],
            answer: "HCl"
        },
        {
            question: "What is the hybridization of Carbon in methane (CH₄)?",
            options: ["sp", "sp²", "sp³", "sp³d"],
            answer: "sp³"
        },
        {
            question: "Which element is the most abundant in the Earth's crust?",
            options: ["Iron", "Silicon", "Oxygen", "Aluminium"],
            answer: "Oxygen"
        },
        {
            question: "What is the formula of the carbonate ion?",
            options: ["CO₃²⁻", "HCO₃⁻", "CO₂²⁻", "CO₄²⁻"],
            answer: "CO₃²⁻"
        },
        {
            question: "Which of the following is an isotope of Carbon-12?",
            options: ["Carbon-14", "Nitrogen-14", "Oxygen-16", "Carbon-11"],
            answer: "Carbon-14"
        },
        {
            question: "What is the value of Avogadro's number?",
            options: ["6.022 × 10²²", "6.022 × 10²³", "6.022 × 10²⁴", "3.011 × 10²³"],
            answer: "6.022 × 10²³"
        },
        {
            question: "Which of the following is a transition metal?",
            options: ["Sodium", "Iron", "Aluminium", "Calcium"],
            answer: "Iron"
        },
        {
            question: "What is the chemical formula of gypsum?",
            options: ["CaSO₄·2H₂O", "CaSO₄·5H₂O", "CaCO₃", "Ca(OH)₂"],
            answer: "CaSO₄·2H₂O"
        },
        {
            question: "Which process is used to separate components of a mixture based on differences in boiling points?",
            options: ["Filtration", "Distillation", "Chromatography", "Sublimation"],
            answer: "Distillation"
        },
        {
            question: "What is the valency of Sulphur in H₂SO₄?",
            options: ["+2", "+4", "+6", "-2"],
            answer: "+6"
        },
        {
            question: "Which of the following is a Lewis acid?",
            options: ["NH₃", "H₂O", "BF₃", "CH₃COOH"],
            answer: "BF₃"
        },
        {
            question: "What is the name of the process in which a substance changes from solid directly to gas?",
            options: ["Evaporation", "Condensation", "Sublimation", "Deposition"],
            answer: "Sublimation"
        },
        {
            question: "Which of the following is the correct electron configuration of Sodium (Na, Z=11)?",
            options: [
                "1s² 2s² 2p⁶ 3s¹",
                "1s² 2s² 2p⁵ 3s²",
                "1s² 2s² 2p⁶ 3p¹",
                "1s² 2s² 2p⁶ 3s²"
            ],
            answer: "1s² 2s² 2p⁶ 3s¹"
        },
        {
            question: "What is the chemical formula of bleaching powder?",
            options: ["CaOCl₂", "CaCl₂", "Ca(OCl)₂", "CaCO₃"],
            answer: "CaOCl₂"
        },
        {
            question: "Which of the following is a redox reaction?",
            options: [
                "NaCl + AgNO₃ → AgCl + NaNO₃",
                "Zn + 2HCl → ZnCl₂ + H₂",
                "CaO + H₂O → Ca(OH)₂",
                "NaOH + HCl → NaCl + H₂O"
            ],
            answer: "Zn + 2HCl → ZnCl₂ + H₂"
        },
        {
            question: "What is the IUPAC name of C₂H₅OH?",
            options: ["Methanol", "Ethanol", "Propanol", "Butanol"],
            answer: "Ethanol"
        },
        {
            question: "Which of the following has the highest ionization energy?",
            options: ["Na", "K", "He", "Li"],
            answer: "He"
        },
        {
            question: "What is the chemical formula of baking soda?",
            options: ["NaHCO₃", "Na₂CO₃", "NaOH", "K₂CO₃"],
            answer: "NaHCO₃"
        },
        {
            question: "Which law states that equal volumes of all gases, at the same temperature and pressure, contain an equal number of molecules?",
            options: ["Boyle's Law", "Charles's Law", "Avogadro's Law", "Graham's Law"],
            answer: "Avogadro's Law"
        }
    ],

    Sports: [
        {
            question: "Who holds the record for the most runs in international cricket (all formats)?",
            options: ["Virat Kohli", "Sachin Tendulkar", "Ricky Ponting", "Kumar Sangakkara"],
            answer: "Sachin Tendulkar"
        },
        {
            question: "How many players are there in a cricket team on the field?",
            options: ["9", "10", "11", "12"],
            answer: "11"
        },
        {
            question: "Which country won the first Cricket World Cup in 1975?",
            options: ["Australia", "India", "West Indies", "England"],
            answer: "West Indies"
        },
        {
            question: "Who is known as the 'King' of cricket?",
            options: ["Virat Kohli", "Sachin Tendulkar", "MS Dhoni", "AB de Villiers"],
            answer: "Sachin Tendulkar"
        },
        {
            question: "What is the maximum number of overs a bowler can bowl in an innings in Test cricket?",
            options: ["10", "15", "20", "No limit"],
            answer: "No limit"
        },
        {
            question: "Which Indian cricketer scored 100 international centuries?",
            options: ["Virat Kohli", "Sachin Tendulkar", "Rahul Dravid", "Virender Sehwag"],
            answer: "Sachin Tendulkar"
        },
        {
            question: "How many balls are in an over?",
            options: ["4", "5", "6", "8"],
            answer: "6"
        },
        {
            question: "Which country hosted the 2011 Cricket World Cup?",
            options: ["Australia", "South Africa", "India, Sri Lanka & Bangladesh", "England"],
            answer: "India, Sri Lanka & Bangladesh"
        },
        {
            question: "Who was the captain of the Indian team that won the 2011 World Cup?",
            options: ["Sachin Tendulkar", "MS Dhoni", "Virender Sehwag", "Rahul Dravid"],
            answer: "MS Dhoni"
        },
        {
            question: "What is the term for a score of zero in cricket?",
            options: ["Out", "Duck", "Zero", "Nil"],
            answer: "Duck"
        },
        {
            question: "Which bowler has taken the most wickets in Test cricket?",
            options: ["Muttiah Muralitharan", "Shane Warne", "James Anderson", "Anil Kumble"],
            answer: "Muttiah Muralitharan"
        },
        {
            question: "How many overs are in a T20 innings?",
            options: ["10", "15", "20", "50"],
            answer: "20"
        },
        {
            question: "Which Indian team won the first IPL title in 2008?",
            options: ["Chennai Super Kings", "Rajasthan Royals", "Mumbai Indians", "Deccan Chargers"],
            answer: "Rajasthan Royals"
        },
        {
            question: "What is the name of the trophy awarded to the winner of the Cricket World Cup?",
            options: ["ICC Trophy", "World Cup Trophy", "Champions Trophy", "T20 Trophy"],
            answer: "World Cup Trophy"
        },
        {
            question: "Who holds the record for the fastest century in international cricket?",
            options: ["AB de Villiers", "Rohit Sharma", "Chris Gayle", "Yuvraj Singh"],
            answer: "Yuvraj Singh"
        },
        {
            question: "Which country has won the most Cricket World Cups?",
            options: ["India", "Australia", "West Indies", "England"],
            answer: "Australia"
        },
        {
            question: "What is the maximum number of wickets that can be taken in an over?",
            options: ["4", "5", "6", "7"],
            answer: "6"
        },
        {
            question: "Which Indian cricketer is known as 'Sixer King'?",
            options: ["Virat Kohli", "Rohit Sharma", "MS Dhoni", "Yuvraj Singh"],
            answer: "Rohit Sharma"
        },
        {
            question: "In which year did India win the ICC T20 World Cup for the first time?",
            options: ["2007", "2009", "2011", "2024"],
            answer: "2007"
        },
        {
            question: "What is the term for when a batsman is out without scoring?",
            options: ["Golden Duck", "Duck", "Zero", "Out"],
            answer: "Duck"
        },
        {
            question: "Who is the leading wicket-taker in ODI cricket?",
            options: ["Muttiah Muralitharan", "Wasim Akram", "Mitchell Starc", "Shakib Al Hasan"],
            answer: "Muttiah Muralitharan"
        },
        {
            question: "Which Indian cricketer hit 6 sixes in an over in an ODI?",
            options: ["Rohit Sharma", "Yuvraj Singh", "MS Dhoni", "Virat Kohli"],
            answer: "Yuvraj Singh"
        },
        {
            question: "What is the length of a cricket pitch?",
            options: ["18 yards", "20 yards", "22 yards", "24 yards"],
            answer: "22 yards"
        },
        {
            question: "Which country won the 2019 Cricket World Cup?",
            options: ["India", "Australia", "New Zealand", "England"],
            answer: "England"
        },
        {
            question: "What is the term for a bowler who takes 5 wickets in an innings?",
            options: ["Hat-trick", "Five-for", "Five wicket haul", "Both B and C"],
            answer: "Both B and C"
        },
        {
            question: "Who was the first Indian to score a double century in Test cricket?",
            options: ["Sachin Tendulkar", "Virender Sehwag", "Virat Kohli", "Cheteshwar Pujara"],
            answer: "Virender Sehwag"
        },
        {
            question: "What is the maximum number of wickets a bowler can take in an over in T20?",
            options: ["4", "5", "6", "7"],
            answer: "6"
        },
        {
            question: "Which Indian cricketer is known as the 'Mr. 360' for his all-round performances?",
            options: ["Kapil Dev", "MS Dhoni", "Rohit Sharma", "Hardik Pandya"],
            answer: "Hardik Pandya"
        },
        {
            question: "In which year was the first Test match played?",
            options: ["1850", "1877", "1880", "1890"],
            answer: "1877"
        },
        {
            question: "What is the term for three wickets taken in three consecutive balls?",
            options: ["Double", "Hat-trick", "Triple", "Three-for"],
            answer: "Hat-trick"
        }
    ],

    Geography: [
        {
            question: "What is the largest ocean in the world?",
            options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
            answer: "Pacific Ocean"
        },
        {
            question: "Which is the longest river in the world?",
            options: ["Amazon", "Nile", "Yangtze", "Ganga"],
            answer: "Nile"
        },
        {
            question: "What is the capital city of Australia?",
            options: ["Sydney", "Melbourne", "Canberra", "Perth"],
            answer: "Canberra"
        },
        {
            question: "Which is the highest mountain peak in the world?",
            options: ["K2", "Kanchenjunga", "Mount Everest", "Lhotse"],
            answer: "Mount Everest"
        },
        {
            question: "The Tropic of Cancer passes through which of the following Indian states?",
            options: ["Kerala", "Gujarat", "Tamil Nadu", "Karnataka"],
            answer: "Gujarat"
        },
        {
            question: "Which is the largest hot desert in the world?",
            options: ["Kalahari", "Gobi", "Sahara", "Thar"],
            answer: "Sahara"
        },
        {
            question: "What is the official language of Brazil?",
            options: ["Spanish", "Portuguese", "English", "French"],
            answer: "Portuguese"
        },
        {
            question: "Which is the smallest country in the world by area?",
            options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
            answer: "Vatican City"
        },
        {
            question: "The Equator passes through which of the following countries?",
            options: ["India", "Kenya", "Australia", "Egypt"],
            answer: "Kenya"
        },
        {
            question: "Which is the largest lake in the world by surface area?",
            options: ["Lake Baikal", "Lake Superior", "Caspian Sea", "Lake Victoria"],
            answer: "Caspian Sea"
        },
        {
            question: "What is the national flower of India?",
            options: ["Rose", "Lotus", "Marigold", "Jasmine"],
            answer: "Lotus"
        },
        {
            question: "Which river is known as the 'Sorrow of Bengal'?",
            options: ["Ganga", "Brahmaputra", "Hooghly", "Damodar"],
            answer: "Brahmaputra"
        },
        {
            question: "The Great Barrier Reef is located off the coast of which country?",
            options: ["New Zealand", "Indonesia", "Australia", "Philippines"],
            answer: "Australia"
        },
        {
            question: "Which is the deepest ocean trench in the world?",
            options: ["Java Trench", "Tonga Trench", "Mariana Trench", "Philippine Trench"],
            answer: "Mariana Trench"
        },
        {
            question: "What is the largest peninsula in the world?",
            options: ["Iberian Peninsula", "Arabian Peninsula", "Indian Peninsula", "Scandinavian Peninsula"],
            answer: "Arabian Peninsula"
        },
        {
            question: "Which is the driest place on Earth?",
            options: ["Atacama Desert", "Sahara Desert", "Mojave Desert", "Gobi Desert"],
            answer: "Atacama Desert"
        },
        {
            question: "The Suez Canal connects which two seas?",
            options: [
                "Black Sea & Mediterranean Sea",
                "Red Sea & Mediterranean Sea",
                "Persian Gulf & Arabian Sea",
                "Caspian Sea & Black Sea"
            ],
            answer: "Red Sea & Mediterranean Sea"
        },
        {
            question: "Which is the largest island in the world?",
            options: ["Madagascar", "Borneo", "Greenland", "Sumatra"],
            answer: "Greenland"
        },
        {
            question: "The Deccan Plateau is located in which country?",
            options: ["Sri Lanka", "India", "Nepal", "Bangladesh"],
            answer: "India"
        },
        {
            question: "What is the longest mountain range in the world?",
            options: ["Himalayas", "Rockies", "Andes", "Alps"],
            answer: "Andes"
        },
        {
            question: "Which is the only continent without any active volcanoes?",
            options: ["Australia", "Antarctica", "Europe", "Africa"],
            answer: "Australia"
        },
        {
            question: "The Panama Canal connects which two oceans?",
            options: [
                "Pacific & Indian",
                "Atlantic & Pacific",
                "Atlantic & Indian",
                "Arctic & Pacific"
            ],
            answer: "Atlantic & Pacific"
        },
        {
            question: "Which is the largest island in the Indian Ocean?",
            options: ["Sri Lanka", "Madagascar", "Sumatra", "Borneo"],
            answer: "Madagascar"
        },
        {
            question: "What is the capital of South Africa's legislative branch?",
            options: ["Pretoria", "Cape Town", "Johannesburg", "Durban"],
            answer: "Cape Town"
        },
        {
            question: "The 'Land of the Rising Sun' is a nickname for which country?",
            options: ["China", "South Korea", "Japan", "Thailand"],
            answer: "Japan"
        },
        {
            question: "Which is the largest freshwater lake in the world by surface area?",
            options: ["Lake Baikal", "Lake Superior", "Lake Victoria", "Lake Tanganyika"],
            answer: "Lake Superior"
        },
        {
            question: "The Bosphorus Strait connects which two seas?",
            options: [
                "Mediterranean & Black Sea",
                "Red Sea & Arabian Sea",
                "Persian Gulf & Arabian Sea",
                "Baltic & North Sea"
            ],
            answer: "Mediterranean & Black Sea"
        },
        {
            question: "Which is the largest country in the world by area?",
            options: ["Canada", "China", "United States", "Russia"],
            answer: "Russia"
        },
        {
            question: "The 'Roof of the World' is a nickname for which mountain range?",
            options: ["Himalayas", "Pamir Mountains", "Karakoram", "Hindu Kush"],
            answer: "Pamir Mountains"
        },
        {
            question: "Which is the largest state in India by area?",
            options: ["Madhya Pradesh", "Maharashtra", "Rajasthan", "Uttar Pradesh"],
            answer: "Rajasthan"
        }
    ],

    History: [
        {
            question: "In which year was Shivaji Maharaj born?",
            options: ["1625", "1630", "1635", "1640"],
            answer: "1630"
        },
        {
            question: "Where was Shivaji Maharaj born?",
            options: ["Raigad Fort", "Shivneri Fort", "Pratapgad Fort", "Purandar Fort"],
            answer: "Shivneri Fort"
        },
        {
            question: "Who was Shivaji Maharaj's father?",
            options: ["Jijabai", "Sambhaji", "Shahaji Bhonsle", "Ramdas Swami"],
            answer: "Shahaji Bhonsle"
        },
        {
            question: "Who was Shivaji Maharaj's guru?",
            options: ["Tukaram", "Namadev", "Dnyaneshwar", "Samarth Ramdas"],
            answer: "Samarth Ramdas"
        },
        {
            question: "Which fort did Shivaji Maharaj capture first at the age of 16?",
            options: ["Raigad", "Torna", "Sinhagad", "Pratapgad"],
            answer: "Torna"
        },
        {
            question: "In which year was Shivaji Maharaj crowned as Chhatrapati?",
            options: ["1665", "1670", "1674", "1680"],
            answer: "1674"
        },
        {
            question: "At which fort was Shivaji Maharaj crowned?",
            options: ["Shivneri Fort", "Raigad Fort", "Sinhagad Fort", "Purandar Fort"],
            answer: "Raigad Fort"
        },
        {
            question: "What title was given to Shivaji Maharaj after his coronation?",
            options: ["Maharaja", "Samrat", "Chhatrapati", "Peshwa"],
            answer: "Chhatrapati"
        },
        {
            question: "In which battle did Shivaji Maharaj defeat Afzal Khan?",
            options: ["Battle of Sinhagad", "Battle of Pratapgad", "Battle of Pavan Khind", "Battle of Kolhapur"],
            answer: "Battle of Pratapgad"
        },
        {
            question: "In which year did the Battle of Pratapgad take place?",
            options: ["1656", "1659", "1663", "1665"],
            answer: "1659"
        },
        {
            question: "What weapon did Shivaji Maharaj use to kill Afzal Khan?",
            options: ["Sword (Tulwar)", "Dagger (Katar)", "Baghnakh (Tiger Claw)", "Arrow"],
            answer: "Baghnakh (Tiger Claw)"
        },
        {
            question: "Who was the Mughal commander under whose command the Treaty of Purandar was signed in 1665?",
            options: ["Shaista Khan", "Jai Singh I", "Aurangzeb", "Mirza Raja Jai Singh"],
            answer: "Jai Singh I"
        },
        {
            question: "In which year did Shivaji Maharaj escape from Agra Fort?",
            options: ["1665", "1666", "1667", "1668"],
            answer: "1666"
        },
        {
            question: "How did Shivaji Maharaj escape from Agra?",
            options: ["By swimming a river", "Hiding in a basket of sweets", "Through a secret tunnel", "By disguising as a servant"],
            answer: "Hiding in a basket of sweets"
        },
        {
            question: "What was the name of Shivaji Maharaj's administrative council of 8 ministers?",
            options: ["Navaratna", "Ashtapradhan", "Sangathan", "Samiti"],
            answer: "Ashtapradhan"
        },
        {
            question: "Who was the Prime Minister (Peshwa) in the Ashtapradhan council?",
            options: ["Moropant Panto", "Heeralal", "The Peshwa", "Chandrarao More"],
            answer: "Moropant Panto"
        },
        {
            question: "Shivaji Maharaj is known as the 'Father of the Indian Navy.' Which was his first major naval fort?",
            options: ["Vijaydurg", "Sindhudurg", "Khanderi", "Janjira"],
            answer: "Sindhudurg"
        },
        {
            question: "In which year did Shivaji Maharaj first sack Surat?",
            options: ["1660", "1664", "1670", "1674"],
            answer: "1664"
        },
        {
            question: "What military strategy was Shivaji Maharaj famous for?",
            options: ["Cavalry charges", "Naval blockades", "Guerrilla warfare (Ganimi Kava)", "Siege warfare"],
            answer: "Guerrilla warfare (Ganimi Kava)"
        },
        {
            question: "In which year did Shivaji Maharaj die?",
            options: ["1675", "1680", "1685", "1690"],
            answer: "1680"
        },
        {
            question: "Who succeeded Shivaji Maharaj as the ruler of the Maratha Empire?",
            options: ["Shivaji", "Rajaram", "Sambhaji", "Rajarshi"],
            answer: "Sambhaji"
        },
        {
            question: "What was Shivaji Maharaj's first capital?",
            options: ["Raigad", "Rajgad", "Pune", "Satara"],
            answer: "Rajgad"
        },
        {
            question: "Who was the chief intelligence officer during Shivaji Maharaj's rule?",
            options: ["Jiva Mahala", "Tanaji Malusare", "Bahirji Naik", "Baji Prabhu Deshpande"],
            answer: "Bahirji Naik"
        },
        {
            question: "Which fort was associated with the Battle of Pavan Khind in 1660?",
            options: ["Sinhagad", "Vishalgad", "Pratapgad", "Raigad"],
            answer: "Vishalgad"
        },
        {
            question: "Who led the Maratha forces at the Battle of Pavan Khind?",
            options: ["Tanaji Malusare", "Baji Prabhu Deshpande", "Jiva Mahala", "Dhanaji Jadhav"],
            answer: "Baji Prabhu Deshpande"
        },
        {
            question: "What was the famous title given to Shivaji Maharaj for protecting Hindu culture?",
            options: ["Swami", "Haindava Dharmoddharaka", "Maratha Simha", "Deccan Simha"],
            answer: "Haindava Dharmoddharaka"
        },
        {
            question: "Which Mughal official did Shivaji Maharaj attack at Pune in 1663?",
            options: ["Jai Singh I", "Shaista Khan", "Aurangzeb", "Daud Khan"],
            answer: "Shaista Khan"
        },
        {
            question: "How many forts did Shivaji Maharaj control at the peak of his reign?",
            options: ["200", "250", "360", "500"],
            answer: "360"
        },
        {
            question: "Which fort did Shivaji Maharaj famously fail to capture?",
            options: ["Sindhudurg", "Janjira", "Vijaydurg", "Khanderi"],
            answer: "Janjira"
        },
        {
            question: "Who was Shivaji Maharaj's bodyguard?",
            options: ["Tanaji Malusare", "Jiva Mahala", "Dhanaji Jadhav", "Baji Prabhu Deshpande"],
            answer: "Jiva Mahala"
        }
    ],

};


// ========================================
// QUIZ SCREEN ELEMENTS
// ========================================

const quizScreen =
    document.querySelector(".quiz-screen");

const quizTitle =
    document.querySelector(".quiz-header h2");

const questioncounter =
    document.querySelector(".quiz-header p");

const Questions =
    document.querySelector(".question-container h3");

const optionsContainer =
    document.querySelector(".options");

const nextButton =
    document.querySelector(".next-btn");

const result =
    document.querySelector(".result-screen");

const finalScore =
    document.getElementById("final-score");

const totalQuestions =
    document.getElementById("total-questions");

const screen =
    document.querySelector(".question-container");

const quizHeader =
    document.querySelector(".quiz-header");

const quizExitButton =
    document.querySelector(".exit-btn");

const resultExitButton =
    document.querySelector(".result-exit-btn");

const restartButton =
    document.querySelector(".restart-btn");

const dashboardLayout =
    document.querySelector(".dashboard-layout");

const resultMessage =
    document.querySelector(".result-message");

const quizSetup =
    document.querySelector(".quiz-setup");

const dashboardStartQuizButton =
    document.querySelector(".quiz-container .start-quiz-btn");

const startQuizButton =
    document.querySelector(".quiz-setup .start-quiz-btn");

console.log("Dashboard start button:", dashboardStartQuizButton);
console.log("Quiz setup start button:", startQuizButton);

const questionCountButtons =
    document.querySelectorAll(".question-count-btn");

// ========================================
// QUIZ STATE
// ========================================

let selectedQuestions = [];

let currentQuestionIndex = 0;

let userAnswers = [];

let selectedAnswer = null;

let score = 0;

let selectedCategory = "";

let selectedQuestionCount = null;

const quizProgress = {
    category: selectedCategory,
    selectedQuestions: selectedQuestions,
    currentQuestionIndex: currentQuestionIndex,
    userAnswers: userAnswers,
    score: score
};

// ========================================
// SAVE QUIZ PROGRESS
// ========================================

function saveQuizProgress() {

    localStorage.setItem(
        "quizProgress",
        JSON.stringify(quizProgress)
    );

}

// ========================================
// RESET QUIZ STATE
// ========================================

function resetQuizState() {

    currentQuestionIndex = 0;

    userAnswers = [];

    selectedAnswer = null;

    score = 0;

}

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

            console.log(
                "Selected answer:",
                selectedAnswer
            );

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
// SCORE CALCULATION
// ========================================

function calculateScore() {

    score = 0;

    userAnswers.forEach(function (answer, index) {

        if (
            answer ===
            selectedQuestions[index].answer
        ) {

            score++;

        }

    });

    return score;

}

// ========================================
// RESULT MESSAGE
// ========================================

function displayResultMessage() {

    if (
        score ===
        selectedQuestions.length
    ) {

        resultMessage.textContent =
            "Excellent! You got all the answers correct!";

    }

    else if (
        score >=
        selectedQuestions.length / 2
    ) {

        resultMessage.textContent =
            "Good job! You scored above average.";

    }

    else {

        resultMessage.textContent =
            "Keep trying! You can improve your score.";

    }

}


// ========================================
// CATEGORY SELECTION
// ========================================

const categoryCards =
    document.querySelectorAll(".category-card");


categoryCards.forEach(function (card) {

    card.addEventListener("click", function () {

        selectedCategory =
            card.querySelector("h4").textContent.trim();

        console.log(
            "Selected category:",
            selectedCategory
        );

        selectedQuestions =
            quizQuestions[selectedCategory];

        console.log(
            "Selected questions:",
            selectedQuestions
        );

        if (!selectedQuestions) {

            console.log(
                "No questions available for this category."
            );
            return;
        }

        resetQuizState();

        selectedQuestionCount = null;

        quizTitle.textContent =
            selectedCategory + " Quiz";

        result.style.display = "none";

        screen.style.display = "none";

        quizHeader.style.display = "none";

        quizSetup.style.display = "block";

        quizScreen.style.display = "flex";

        dashboardLayout.style.display = "none";

        questionCountButtons.forEach(function (button) {

            button.classList.remove("selected");

        });

    });

});


// ========================================
// QUESTION COUNT SELECTION
// ========================================

questionCountButtons.forEach(function (button) {

    button.addEventListener("click", function () {
        selectedQuestionCount =
            Number(button.dataset.count);

        questionCountButtons.forEach(function (countButton) {
            countButton.classList.remove("selected");
        });

        button.classList.add("selected");
        console.log(
            "Selected question count:",
            selectedQuestionCount
        );
    });
});

// ========================================
// DASHBOARD HERO START QUIZ (NAVIGATE TO CATEGORIES)
// ========================================

if (dashboardStartQuizButton) {

    dashboardStartQuizButton.addEventListener("click", function () {

        dashboardLayout.style.display = "";

        quizScreen.style.display = "none";

        sections.forEach(function (section) {

            section.classList.remove("highlighted");

        });

        if (categoriesSection) {

            categoriesSection.classList.add("highlighted");
            categoriesSection.scrollIntoView({ behavior: "smooth" });
        }

        if (welcomeMessage) {
            welcomeMessage.textContent = "Categories";
        }

        navItems.forEach(function (navItem) {

            const text =
                navItem
                    .querySelector("span")
                    ?.textContent
                    .trim()
                    .replace(/\s+/g, " ");

            if (text === "Categories") {

                navItem.classList.add("active");

            } else {

                navItem.classList.remove("active");

            }
        });
    });
}


// ========================================
// QUIZ SETUP START QUIZ (ACTUALLY START QUIZ)
// ========================================

if (startQuizButton) {

    startQuizButton.addEventListener("click", function () {

        if (!selectedCategory || !quizQuestions[selectedCategory]) {

            console.log(
                "Please select a category first."
            );

            return;

        }


        if (selectedQuestionCount === null) {

            console.log(
                "Please select the number of questions first."
            );

            return;

        }


        resetQuizState();


        selectedQuestions =
            quizQuestions[selectedCategory].slice(
                0,
                Math.min(
                    selectedQuestionCount,
                    quizQuestions[selectedCategory].length
                )
            );


        quizTitle.textContent =
            selectedCategory + " Quiz";


        result.style.display = "none";

        quizSetup.style.display = "none";

        screen.style.display = "block";

        quizHeader.style.display = "flex";

        quizScreen.style.display = "flex";

        dashboardLayout.style.display = "none";


        showQuestion();

    });

}


// ========================================
// NEXT BUTTON
// ========================================

nextButton.addEventListener("click", function () {

    if (selectedAnswer === null) {

        console.log(
            "Please select an answer first."
        );
        return;
    }

    userAnswers[currentQuestionIndex] =
        selectedAnswer;

    console.log(
        "Saved answers:",
        userAnswers
    );

    if (
        currentQuestionIndex <
        selectedQuestions.length - 1
    ) {

        currentQuestionIndex++;

        quizProgress.category = selectedCategory;
        quizProgress.selectedQuestions = selectedQuestions;
        quizProgress.currentQuestionIndex = currentQuestionIndex;
        quizProgress.userAnswers = userAnswers;
        quizProgress.score = score;
        console.log(quizProgress);

        saveQuizProgress();
        showQuestion();

    }

    else {

        console.log("Quiz completed!");

        console.log(
            "Final answers:",
            userAnswers
        );


        finalScore.textContent =
            calculateScore();


        totalQuestions.textContent =
            selectedQuestions.length;


        screen.style.display = "none";

        quizHeader.style.display = "none";

        result.style.display = "flex";


        displayResultMessage();

    }

});


// ========================================
// EXIT QUIZ
// ========================================

function exitQuiz() {

    quizScreen.style.display = "none";

    dashboardLayout.style.display = "";

    quizSetup.style.display = "block";

    result.style.display = "none";

    screen.style.display = "none";

    quizHeader.style.display = "none";


    resetQuizState();


    selectedQuestions = [];

    selectedCategory = "";

    selectedQuestionCount = null;


    questionCountButtons.forEach(function (button) {

        button.classList.remove("selected");

    });

}


quizExitButton.addEventListener(
    "click",
    exitQuiz
);


resultExitButton.addEventListener(
    "click",
    exitQuiz
);

// ========================================
// RESTART QUIZ
// ========================================

restartButton.addEventListener("click", function () {

    resetQuizState();


    selectedQuestions =
        quizQuestions[selectedCategory].slice(
            0,
            Math.min(
                selectedQuestionCount,
                quizQuestions[selectedCategory].length
            )
        );


    result.style.display = "none";

    quizSetup.style.display = "none";

    screen.style.display = "block";

    quizHeader.style.display = "flex";

    quizScreen.style.display = "flex";

    dashboardLayout.style.display = "none";


    showQuestion();

});

// ========================================
// Continue quiz from dashboard
// ========================================

function saveQuizProgress() {
    // save current quiz state
}

function loadQuizProgress() {
    // get saved quiz
}

function clearQuizProgress() {
    // remove completed quiz
}
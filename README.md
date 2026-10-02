# 🎯 QuizifyX

**QuizifyX** is an interactive web-based quiz platform designed to make learning and testing knowledge simple, engaging, and interactive.

Users can choose a quiz category, select the number of questions, attempt multiple-choice questions, and receive their results after completing the quiz.

---

## 🚀 Features

- 🎯 Interactive quiz interface
- 📚 Multiple quiz categories
- 🔢 Select the number of questions
- ❓ Multiple-choice questions with four options
- ✅ Automatic answer validation
- 📊 Score calculation
- 🏆 Quiz result screen
- 🔄 Continue and restart quiz functionality
- 🧭 Category-based quiz selection
- 🌓 Dark mode interface
- ⭐ Premium section in the sidebar
- 📱 Responsive and modern dashboard UI
- 🎨 Custom sidebar and navigation interface

---

## 🧩 Quiz Categories

QuizifyX can contain multiple categories such as:

- 🌍 General Knowledge
- ⚗️ Chemistry
- 🏏 Cricket
- 🏰 History
- 💻 Computer Science
- 📐 Mathematics
- 🔬 Science
- And more...

Each category contains a collection of multiple-choice questions.

---

## 🎮 How the Quiz Works

The basic quiz flow is:

```text
Dashboard
    ↓
Start Quiz
    ↓
Select Category
    ↓
Select Number of Questions
    ↓
Start Selected Quiz
    ↓
Answer Questions
    ↓
Submit Quiz
    ↓
Calculate Score
    ↓
Display Result
```

---

## 🖥️ User Interface

QuizifyX uses a dashboard-style interface consisting of:

### Sidebar

The sidebar provides navigation to different sections of the application.

It includes:

- Logo
- Dashboard
- Quiz categories
- Navigation options
- Dark mode toggle
- Premium section

The sidebar uses a fixed layout and separates navigation from the main application content.

### Quiz Area

The quiz interface displays:

- Current question
- Multiple-choice options
- Question navigation
- Selected answer
- Quiz progress
- Result information

---

## 🛠️ Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript

### Development Tools

- Git
- GitHub
- Visual Studio Code

---

## 📁 Project Structure

```text
QuizifyX/
│
├── CSS/
│   ├── quiz.css
│   └── ...
│
├── JS/
│   ├── quiz.js
│   └── ...
│
├── assets/
│   ├── icons/
│   ├── images/
│   └── ...
│
├── quiz.html
├── index.html
└── README.md
```

> The exact folder structure may change as the project continues to develop.

---

## 🧠 Question Structure

Quiz questions are stored using JavaScript objects.

Example:

```javascript
{
    question: "What is the largest ocean in the world?",
    options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean"
    ],
    answer: "Pacific Ocean"
}
```

This structure makes it easy to:

- Add new questions
- Create new categories
- Validate answers
- Calculate scores
- Randomize questions
- Expand the quiz database

---

## 📊 Scoring System

QuizifyX checks the user's selected answer against the correct answer.

For example:

```javascript
if (selectedAnswer === question.answer) {
    score++;
}
```

After all questions are completed, the final score is displayed to the user.

Example:

```text
Your Score

8 / 10

Great Job! 🎉
```

---

## 🔄 Quiz Flow

### 1. Start Quiz

The user clicks **Start Quiz** from the dashboard.

### 2. Select Category

The user chooses the category they want to attempt.

### 3. Select Questions

The user selects how many questions they want to answer.

For example:

```text
5 Questions
10 Questions
20 Questions
30 Questions
```

### 4. Attempt Quiz

Questions are displayed one at a time with four possible answers.

### 5. Submit

The user completes the quiz and submits their answers.

### 6. Result

QuizifyX calculates the score and displays the final result.

---

## 🎨 UI Design

The application uses a modern dashboard design with:

- Purple primary color
- White sidebar
- Rounded navigation elements
- Card-based components
- Modern typography
- Active navigation states
- Hover animations
- Premium feature card
- Dark mode support

The sidebar is designed using CSS Flexbox so that navigation and bottom controls remain properly positioned.

---

## 🌱 Current Development

QuizifyX is currently under active development.

Current work includes:

- Improving the quiz UI
- Adding quiz categories
- Improving question selection
- Implementing quiz navigation
- Improving score/result handling
- Building dashboard components
- Improving sidebar design
- Adding dark mode
- Adding premium UI
- Expanding the question database

---

## 🔮 Future Improvements

Planned improvements include:

- [ ] User authentication
- [ ] User profiles
- [ ] Persistent quiz history
- [ ] Leaderboards
- [ ] Timed quizzes
- [ ] Question randomization
- [ ] Difficulty levels
- [ ] Progress tracking
- [ ] More quiz categories
- [ ] Admin panel for question management
- [ ] Backend API
- [ ] Database integration
- [ ] AI-generated quizzes
- [ ] Personalized quiz recommendations
- [ ] Performance analytics
- [ ] Mobile optimization

---

## 💻 Running the Project

Clone the repository:

```bash
git clone https://github.com/AnkushMishra777/QuizifyX.git
```

Navigate to the project:

```bash
cd QuizifyX
```

Open the project in VS Code:

```bash
code .
```

You can then open the HTML files using a local development server such as **Live Server**.

---

## 🔧 Git Workflow

To update the project after making changes:

```bash
git status
```

Add your changes:

```bash
git add .
```

Commit:

```bash
git commit -m "Update quiz functionality and UI"
```

Push to GitHub:

```bash
git push origin main
```

---

## 🤝 Contributing

Contributions and suggestions are welcome.

If you want to improve QuizifyX:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Test the application
5. Commit your changes
6. Push the branch
7. Open a pull request

---

## 📌 Project Goal

The goal of QuizifyX is to build a complete, user-friendly quiz platform where users can **learn, practice, test their knowledge, and track their progress** through an interactive experience.

---

## 👨‍💻 Author

**Ankush Mishra**

Computer Engineering Student  
Mumbai University

---

⭐ If you find QuizifyX useful, consider giving the repository a star!

**Built with ❤️ using HTML, CSS & JavaScript.**

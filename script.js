const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2,
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correct: 1,
    },
    {
        question: "Who painted the Mona Lisa?",
        options: [
            "Vincent van Gogh",
            "Pablo Picasso",
            "Leonardo da Vinci",
            "Michelangelo",
        ],
        correct: 2,
    },
    {
        question: "What is the largest ocean on Earth?",
        options: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Arctic Ocean",
            "Pacific Ocean",
        ],
        correct: 3,
    },
    {
        question: "In what year did World War II end?",
        options: ["1943", "1944", "1945", "1946"],
        correct: 2,
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        correct: 2,
    },
    {
        question: "Which country is home to the kangaroo?",
        options: ["New Zealand", "Australia", "South Africa", "Brazil"],
        correct: 1,
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        correct: 2,
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: [
            "Charles Dickens",
            "William Shakespeare",
            "Jane Austen",
            "Mark Twain",
        ],
        correct: 1,
    },
    {
        question: "What is the speed of light?",
        options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "200,000 km/s"],
        correct: 0,
    },
];

let currentQuestion = 0;
let score = 0;
let userName = "";
let timer;
let timeLeft = 15;

function startQuiz() {
    const nameInput = document.getElementById("username").value.trim();
    if (!nameInput) {
        alert("Please enter your name!");
        return;
    }
    userName = nameInput;
    document.querySelector(".welcome-screen").classList.remove("active");
    document.querySelector(".quiz-screen").classList.add("active");
    loadQuestion();
    startTimer();
}

function loadQuestion() {
    const question = quizData[currentQuestion];
    document.getElementById("questionNumber").textContent = `Question ${currentQuestion + 1
        } of ${quizData.length}`;
    document.getElementById("questionText").textContent = question.question;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    question.options.forEach((option, index) => {
        const optionDiv = document.createElement("div");
        optionDiv.className = "option";
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectOption(index);
        optionsContainer.appendChild(optionDiv);
    });

    updateProgress();
    resetTimer();
    document.getElementById("nextBtn").classList.remove("active");
}

function selectOption(selectedIndex) {
    const question = quizData[currentQuestion];
    const options = document.querySelectorAll(".option");

    clearInterval(timer);

    options.forEach((option, index) => {
        option.classList.add("disabled");
        if (index === question.correct) {
            option.classList.add("correct");
        }
        if (index === selectedIndex && selectedIndex !== question.correct) {
            option.classList.add("wrong");
        }
    });

    if (selectedIndex === question.correct) {
        score += 10;
        document.getElementById("score").textContent = score;
    }

    document.getElementById("nextBtn").classList.add("active");
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
        startTimer();
    } else {
        showResults();
    }
}

function startTimer() {
    timeLeft = 15;
    updateTimerDisplay();
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 5) {
            document.querySelector(".timer").classList.add("warning");
        }

        if (timeLeft <= 0) {
            clearInterval(timer);
            autoSelectWrong();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 15;
    document.querySelector(".timer").classList.remove("warning");
}

function updateTimerDisplay() {
    document.getElementById("timer").textContent = timeLeft;
}

function autoSelectWrong() {
    const question = quizData[currentQuestion];
    const options = document.querySelectorAll(".option");

    options.forEach((option, index) => {
        option.classList.add("disabled");
        if (index === question.correct) {
            option.classList.add("correct");
        }
    });

    document.getElementById("nextBtn").classList.add("active");
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    document.getElementById("progressFill").style.width = progress + "%";
}

function showResults() {
    clearInterval(timer);
    document.querySelector(".quiz-screen").classList.remove("active");
    document.querySelector(".result-screen").classList.add("active");

    const percentage = (score / (quizData.length * 10)) * 100;
    let icon = "🎉";
    let text = "Congratulations!";

    if (percentage === 100) {
        icon = "🏆";
        text = "Perfect Score!";
    } else if (percentage >= 80) {
        icon = "🎉";
        text = "Excellent Work!";
    } else if (percentage >= 60) {
        icon = "😊";
        text = "Good Job!";
    } else if (percentage >= 40) {
        icon = "📚";
        text = "Keep Practicing!";
    } else {
        icon = "💪";
        text = "Try Again!";
    }

    document.getElementById("resultIcon").textContent = icon;
    document.getElementById("resultText").textContent = `${text} ${userName}!`;
    document.getElementById("finalScore").textContent = `${score} / ${quizData.length * 10
        }`;

    updateHighScore();
}

function updateHighScore() {
    const highScores = JSON.parse(localStorage.getItem("quizHighScores") || "{}");
    const previousHigh = highScores[userName] || 0;

    if (score > previousHigh) {
        highScores[userName] = score;
        localStorage.setItem("quizHighScores", JSON.stringify(highScores));
        document.getElementById(
            "highScore"
        ).textContent = `🌟 New High Score! Previous: ${previousHigh}`;
    } else {
        document.getElementById("highScore").textContent = `Your High Score: ${highScores[userName] || score
            }`;
    }
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("score").textContent = score;
    document.querySelector(".result-screen").classList.remove("active");
    document.querySelector(".quiz-screen").classList.add("active");
    loadQuestion();
    startTimer();
}

function changeUser() {
    currentQuestion = 0;
    score = 0;
    userName = "";
    document.getElementById("score").textContent = score;
    document.getElementById("username").value = "";
    document.querySelector(".result-screen").classList.remove("active");
    document.querySelector(".welcome-screen").classList.add("active");
}

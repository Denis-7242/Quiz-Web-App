# 🎯 Interactive Quiz Master

A fully functional, responsive quiz web application built with vanilla HTML, CSS, and JavaScript. Features a beautiful UI, real-time scoring, timer functionality, and persistent high score tracking.

![Quiz App](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### Core Functionality
- **Multiple Choice Questions**: 10 diverse trivia questions with 4 options each
- **One Question at a Time**: Clean, focused interface showing single questions
- **Visual Feedback**: Instant color-coded feedback (green for correct, red for wrong)
- **Live Score Tracking**: Real-time score updates as you progress
- **Progressive Navigation**: Next button appears after answer selection
- **Final Results Screen**: Comprehensive score summary with performance feedback

### Advanced Features
- **⏱️ Timer System**: 15-second countdown per question
  - Visual warning when time is running low (< 5 seconds)
  - Auto-submit when timer expires
- **📊 Progress Bar**: Visual indicator of quiz completion
- **👤 User Profiles**: Personalized experience with username input
- **🏆 High Score Tracking**: Saves personal best scores (in-memory storage)
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **🎨 Modern UI**: Beautiful gradient design with smooth animations

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server or installation required!

### Installation

1. **Download the file**
   ```bash
   # Save the HTML file to your computer
   # save the CSS file to your computer
   # save the JS file to your computer
   ```

2. **Open in browser**
   - Double-click the `index.html` file, or
   - Right-click and select "Open with" → Your browser

That's it! The quiz is ready to play.

## 📖 How to Use

1. **Enter Your Name**: Type your name on the welcome screen
2. **Click "Start Quiz"**: Begin the quiz
3. **Answer Questions**: 
   - Read the question carefully
   - Click on your chosen answer
   - Wait for feedback (correct/wrong highlighting)
4. **Navigate**: Click "Next Question" to proceed
5. **View Results**: See your final score and performance feedback
6. **Play Again**: Click "Play Again" to retry or "Change User" to switch players

## 🎮 Scoring System

- **Points per Question**: 10 points
- **Total Possible Score**: 100 points (10 questions)
- **Performance Ratings**:
  - 🏆 100%: Perfect Score!
  - 🎉 80-99%: Excellent Work!
  - 😊 60-79%: Good Job!
  - 📚 40-59%: Keep Practicing!
  - 💪 0-39%: Try Again!

## 🛠️ Customization

### Adding Your Own Questions

Edit the `quizData` array in the JavaScript section:

```javascript
const quizData = [
    {
        question: "Your question here?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0  // Index of correct answer (0-3)
    },
    // Add more questions...
];
```

### Changing Timer Duration

Modify the `timeLeft` variable:

```javascript
let timeLeft = 15;  // Change to desired seconds
```

### Adjusting Colors

Update the CSS gradient colors:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
/* Change #667eea and #764ba2 to your preferred colors */
```

### Modifying Points per Question

Change the scoring logic:

```javascript
if (selectedIndex === question.correct) {
    score += 10;  // Change 10 to your desired points
}
```

## 📁 File Structure

```
quiz-app/
│
└── index.html          # Complete application (HTML, CSS, JS)
    ├── HTML Structure  # Welcome, Quiz, and Result screens
    ├── CSS Styling     # Responsive design and animations
    └── JavaScript      # Quiz logic and interactivity
```

## 🌟 Key Components

### HTML Structure
- **Welcome Screen**: Username input and start button
- **Quiz Screen**: Question display, options, timer, score, progress bar
- **Result Screen**: Final score, high score, and action buttons

### CSS Features
- Gradient backgrounds
- Smooth transitions and animations
- Hover effects on interactive elements
- Responsive flexbox layout
- Mobile-first design approach

### JavaScript Functions
- `startQuiz()`: Initializes the quiz
- `loadQuestion()`: Displays current question
- `selectOption()`: Handles answer selection
- `nextQuestion()`: Navigates to next question
- `startTimer()`: Manages countdown timer
- `showResults()`: Displays final results
- `updateHighScore()`: Manages score persistence

## 🎨 Design Philosophy

- **Clean & Modern**: Minimalist design with focus on content
- **User-Friendly**: Intuitive navigation and clear feedback
- **Engaging**: Animations and visual effects enhance experience
- **Accessible**: High contrast colors and readable fonts
- **Performance**: Lightweight with no external dependencies

## 🔧 Technical Details

- **No Dependencies**: Pure vanilla JavaScript
- **No Backend Required**: Runs entirely in the browser
- **Storage**: Uses in-memory storage for high scores (session-based)
- **Compatibility**: Works on all modern browsers (ES6+)
- **File Size**: Single HTML file (~8KB)

## 📱 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome  | 90+     | ✅ Fully Supported |
| Firefox | 88+     | ✅ Fully Supported |
| Safari  | 14+     | ✅ Fully Supported |
| Edge    | 90+     | ✅ Fully Supported |

## 🤝 Contributing

Want to improve the quiz? Here are some ideas:

- Add more question categories
- Implement difficulty levels (Easy, Medium, Hard)
- Add sound effects for correct/wrong answers
- Create leaderboard functionality
- Add question shuffling
- Implement hint system
- Add explanation for correct answers

## 📝 License

This project is open source and available under the MIT License.


Created for learning and fun!

## 🎯 Future Enhancements

- [ ] Add multiple quiz categories
- [ ] Implement difficulty selection
- [ ] Add question bank with 50+ questions
- [ ] Create sharable result cards
- [ ] Add dark mode toggle
- [ ] Implement sound effects
- [ ] Add achievements system
- [ ] Create multiplayer mode

## 💡 Tips for Best Experience

1. **Take Your Time**: Read questions carefully
2. **Use Full Screen**: Better experience on larger screens
3. **Stay Focused**: Complete quiz in one sitting for best results
4. **Challenge Friends**: Share your high score and compete
5. **Learn from Mistakes**: Review correct answers after completion

## 🐛 Known Issues

- High scores are session-based (cleared when browser closes)
- Timer may vary slightly based on browser performance
- No back button (by design - prevents cheating)

## 📞 Support

If you encounter any issues or have suggestions:
- Check browser console for errors
- Ensure JavaScript is enabled
- Try a different browser
- Clear browser cache

---

**Enjoy the quiz! 🎉 Good luck and have fun learning!**


## 👨‍💻 Author

**Made with ❤️ by Denis**
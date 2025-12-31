// Quiz Daten - hier trägst du die Community Member Namen ein
const quizData = [
    { image: 'images/recap1.png', member: 'MemberName1' },
    { image: 'images/recap2.png', member: 'MemberName2' },
    { image: 'images/recap3.png', member: 'MemberName3' }
];

let currentIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let answered = [];

// Elemente holen
const recapImage = document.getElementById('recapImage');
const showAnswerBtn = document.getElementById('showAnswer');
const answerSection = document.getElementById('answerSection');
const memberName = document.getElementById('memberName');
const correctBtn = document.getElementById('correctBtn');
const wrongBtn = document.getElementById('wrongBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const results = document.getElementById('results');
const correctCount = document.getElementById('correctCount');
const wrongCount = document.getElementById('wrongCount');

// Quiz starten
function loadRecap() {
    recapImage.src = quizData[currentIndex].image;
    answerSection.classList.add('hidden');
    showAnswerBtn.style.display = 'block';
    
    prevBtn.disabled = currentIndex === 0;
    
    if (currentIndex === quizData.length - 1) {
        nextBtn.textContent = 'Ergebnis anzeigen';
    } else {
        nextBtn.textContent = 'Nächste Seite';
    }
    
    correctBtn.style.display = 'inline-block';
    wrongBtn.style.display = 'inline-block';
}

showAnswerBtn.addEventListener('click', () => {
    memberName.textContent = quizData[currentIndex].member;
    answerSection.classList.remove('hidden');
    showAnswerBtn.style.display = 'none';
});

correctBtn.addEventListener('click', () => {
    if (!answered[currentIndex]) {
        correctAnswers++;
        answered[currentIndex] = true;
    }
    correctBtn.style.display = 'inline-block';
    wrongBtn.style.display = 'none';
});

wrongBtn.addEventListener('click', () => {
    if (!answered[currentIndex]) {
        wrongAnswers++;
        answered[currentIndex] = true;
    }
    wrongBtn.style.display = 'inline-block';
    correctBtn.style.display = 'none';
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        loadRecap();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < quizData.length - 1) {
        currentIndex++;
        loadRecap();
    } else {
        showResults();
    }
});

function showResults() {
    document.querySelector('.quiz-area').style.display = 'none';
    document.querySelector('.navigation').style.display = 'none';
    results.classList.remove('hidden');
    correctCount.textContent = correctAnswers;
    wrongCount.textContent = wrongAnswers;
}

// Quiz initialisieren
loadRecap();
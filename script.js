let currentPhase = 1;
let score = 0;

const quizContent = document.getElementById('quiz-content');
const resultElement = document.getElementById('result');
const nextPhaseButton = document.getElementById('next-phase');

const phases = [
    {
        question: "Quem é Exu?",
        options: [
            "Deus do trovão, responsável pelas questões de justiça",
            "Dono das águas doces, rios e cachoeiras",
            "Sentinela, protetor e mensageiro entre Orum e o Ayê",
            "Orixá que se manifesta pelos ventos, na brisa ou tempestade"
        ],
        correctAnswer: 3,
        correctResponse: "Laroyê! Você acertou.",
        incorrectResponse: "Você errou!"
    },
    {
        question: "Qual erva serve para fazer banho de descarrego?",
        options: [
            "Alecrim",
            "Arruda",
            "Rosa branca",
            "Manjericão"
        ],
        correctAnswer: 2,
        correctResponse: "Axé! Você acertou.",
        incorrectResponse: "Você errou!"
    },
    {
        question: "Sexta-feira é dia de qual Orixá?",
        options: [
            "Oxum",
            "Obaluaê",
            "Nanã",
            "Oxalá"
        ],
        correctAnswer: 4,
        correctResponse: "Epa Babá! Você acertou.",
        incorrectResponse: "Você errou!"
    }
];

function loadPhase() {
    if (currentPhase > phases.length) {
        quizContent.innerHTML = `<p>Você acertou ${score} de ${phases.length} perguntas.</p>`;
        nextPhaseButton.style.display = 'none';
        return;
    }

    const phase = phases[currentPhase - 1];
    quizContent.innerHTML = `
        <p>${phase.question}</p>
        <div class="options">
            ${phase.options.map((option, index) => `<button onclick="checkAnswer(${index + 1})">${option}</button>`).join('')}
        </div>
    `;
}

function checkAnswer(option) {
    const phase = phases[currentPhase - 1];
    if (option === phase.correctAnswer) {
        resultElement.textContent = phase.correctResponse;
        resultElement.style.color = 'green';
        score++;
    } else {
        resultElement.textContent = phase.incorrectResponse;
        resultElement.style.color = 'red';
    }
    nextPhaseButton.style.display = 'inline-block';
}

function nextPhase() {
    currentPhase++;
    resultElement.textContent = '';
    nextPhaseButton.style.display = 'none';
    loadPhase();
}

loadPhase();

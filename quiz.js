const quizDB = [
    {
        question: "Q1: What is the fullform of html",
        a: "Hello to my land",
        b: "Heyy text me language",
        c: "Hyper text makeup language",
        d: "Hyper text markup language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the fullform of CSS",
        a: "Cascading styling sheets",
        b: "Cascade styling sheet",
        c: "Cascade styles ",
        d: "Cascading super sheets",
        ans: "ans1"
    },
    {
        question: "Q3: What is the fullform of http",
        a: "Hypertext transfer product",
        b: "Hypertext tool Protocol",
        c: "Hey Transfer Protocol",
        d: " HyperText Transfer Protocol.",
        ans: "ans4"
    },
    {
        question: "Q4: Why is CSS used",
        a: "For building the web pages",
        b: "For routing",
        c: " interaction the Sheets",
        d: "For Styling the HTML document",
        ans: "ans4"
    },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });

    return answer;
};

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();

    if (checkedAnswer === quizDB[questionCount].ans) {  // Use === for strict equality check
        score++;
    }

    questionCount++;

    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `
            <h3> You scored ${score}/${quizDB.length}</h3>
            <button class="btn" onclick="location.reload()">Retry</button>
        `;
        showScore.classList.add('scoreArea');
    }
});

const quizData = [
    {
        question:'Que edad tiene julian?',
        a:'18',
        b:'20',
        c:'25',
        d:'22',
        correct:'c'
    },
    {
        question:'Cual de estos es el mejor Skater?',
        a:'Lionel Messi',
        b:'Jhon Cardiel',
        c:'Jereme Rogers',
        d:'Ryan Sheckler',
        correct:'b'
    },
    {
        question:'lucas esta aimboteado?',
        a:'si',
        b:'no',
        c:'no se',
        d:'seguro',
        correct:'a'
    },
    {
        question:'cual es la edad de la tierra?',
        a:'100 mil millones de años',
        b:'345345345 miles millones de años',
        c:'45 miles millones de años',
        d:'4543 miles millones de años',
        correct:'d'
    }
]
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerHTML = currentQuizData.question;

    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
    
}

function getSelected(){
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
} 

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    console.log(answer)

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz ++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>Respondiste bien 
            ${score} de ${quizData.length} preguntas</h2>`
        }     
    }
   
        

  
})
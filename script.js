
const choix1 = document.getElementById('btnA')
const choix2 = document.getElementById('btnB')
const choix3 = document.getElementById('btnC')
const question = document.getElementById('QuestionAffiche')
const score = document.getElementById('Affichescore')
let Score = 0;
let currentIndex = 0;

const questions = [

    { 
        question: "Que veut dire BMW ?",
        answers: ["Berlin Motoren Wagen", "Bayerische Motoren Werke", "Blau Mit Weiss"],
        correct: 2
    },
    {
        question: "Quelle est la première voiture de la division M ?",
        answers: ["M1", "M3 E30", "M5 E28"],
        correct: 1
    },
    {
        question: "Quel est le moteur de la BMW M3 E92 ?",
        answers: ["V8 atmosphérique", "6 en ligne", "V8 Biturbo"],
        correct: 1
    },
    {
        question: "Quel est le moteur de la BMW M2 (F87 version de base) ?",
        answers: ["Le S58", "Le N55", "Le B58"],
        correct: 2
    },
    {
        question: "Comment s'appelle le système 4 roues motrices chez BMW ?",
        answers: ["X-Drive", "4Matic", "Quattro"],
        correct: 1
    },


    { question : "Quelle est la capitale de la France ",
       answers: ["Paris" , "Lyon" , "Nantes" ],
       correct: 0
    },
     { question : "Quelle est la capitale du Bresil ",
       answers: ["Rio" , "Bordeaux" , "Brasilia" ],
        correct: 2
    },
     { question : "Quelle est la capitale du Mali ",
       answers : ["Bamako" , "Dakar" , "Nantes" ],
        correct: 0
    },
     { question : "Quelle est la capitale du Portugal ",
      answers : ["Paris" , "Barcelone" , "Lisbonne" ],
        correct: 2
    },
     { question : "Quelle est la capitale du Japon ",
     answers : ["Tokyo" , "Séoul" , "Madrid" ],
        correct: 0
    },
     { question : "Quelle est la capitale de l'Egypte ",
      answers: ["Paris" , "Caire" , "Arsenal" ],
        correct: 1
    }

]


function afficheQuestionEtreponses(variable,i){
question.innerHTML = variable[i].question;
score.innerText = `score = ${Score}`
choix1.innerText = variable[i].answers[0]
choix2.innerText = variable[i].answers[1]
choix3.innerText = variable[i].answers[2]
let correct = questions[currentIndex].correct


}


function answers(choix,questions,Score,currentIndex){
    console.log(choix , questions[currentIndex].correct);
    
    if(choix == questions[currentIndex].correct){
        
        Score++; 
        currentIndex++;
        score.innerText = `score = ${Score}`

    }else{
        currentIndex++;
       score.innerText = `score = ${Score}`
        
    }
    
    if(currentIndex == variable.length){
question.innerHTML = 'fin du quiz';
score.innerText = `score final = ${Score}`
    }
}

afficheQuestionEtreponses(questions,currentIndex);

choix1.addEventListener('click',()=>answers(questions[currentIndex].answers[0],questions))
choix2.addEventListener('click',()=>answers(questions[currentIndex].answers[1],questions))
choix3.addEventListener('click',()=>answers(questions[currentIndex].answers[2],questions))
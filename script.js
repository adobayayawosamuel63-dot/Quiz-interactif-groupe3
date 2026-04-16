const choix1 = document.getElementById('btnA')
const choix2 = document.getElementById('btnB')
const choix3 = document.getElementById('btnC')
const question = document.getElementById('QuestionAffiche')
const score = document.getElementById('Affichescore')



const questions = [{
question: "Quelle est la capitale de la France ?",
answers: ["Paris", "Lyon", "Marseille"],
correct: 0
},
{
question: "Quelle est la capitale de la France ?",
answers: ["Paris", "Lyon", "Marseille"],
correct: 0
}]
;

  


function afficheQuestionEtreponses(variable,i){
   
question.innerHTML = variable[i].question;
choix1.innerText = variable[i].answers[0]
choix2.innerText = variable[i].answers[1]
choix3.innerText = variable[i].answers[2]
}


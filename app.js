function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

//  Question prototype
Question.prototype.checkAnswer = function(answer){
    return this.answer === answer;
}

// Quiz Constructor
function Quiz(questions){
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
}

// Quiz Prototype
Quiz.prototype.getQuestion = function(){
    return this.questions[this.questionIndex];
}

//Quiz isFinish

Quiz.prototype.isFinish=function(){
    return this.questions.length === this.questionIndex
}

// Quiz guess
Quiz.prototype.guess = function(answer){
    var question = this.getQuestion();

    if(question.checkAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}


var q1 = new Question("En iyi programlama dili nedir?", ["C#", "JavaScript", "Python", "Asp.net"], "JavaScript");
var q2 = new Question("En popüler programlama dili nedir?", ["C#", "Python", "Visual Basic", "JavaScript"], "JavaScript");
var q3 = new Question("En modern programlama dili nedir?", ["C#", "JavaScript", "Python", "Asp.net"], "JavaScript");

var questions = [q1,q2,q3]


//Start Quiz
var quiz = new Quiz(questions);

console.log(quiz.isFinish());

console.log(quiz.getQuestion());
quiz.guess('JavaScript')

console.log(quiz.getQuestion());
quiz.guess('JavaScript')

console.log(quiz.getQuestion());
quiz.guess('JavaScript')

console.log(quiz.score);
console.log(quiz.isFinish());
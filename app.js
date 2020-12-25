function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

//  Question prototype
Question.prototype.checkAnswer = function(answer){
    return this.answer === answer;
}

var q1 = new Question("En iyi programlama dili nedir?", ["C#", "JavaScript", "Python", "Asp.net"], "JavaScript");

var q1 = new Question("En popüler programlama dili nedir?", ["C#", "Python", "Visual Basic", "JavaScript"], "JavaScript");

var q1 = new Question("En modern programlama dili nedir?", ["C#", "JavaScript", "Python", "Asp.net"], "JavaScript");



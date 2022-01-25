var startBtn = document.querySelector('#startBttn');



startBtn.addEventListener('click', function(event){
    document.getElementById('startScreen').remove();
    countdown();
    //if works link to question 
    displayQuestion(questions[questionIndex]);

   
});


var timerEl = document.getElementById('timer');

var message ="TIMES UP!";


function countdown() {
  var timeLeft = 60;

//   console.log(timeLeft);

  var timeInterval = setInterval(function () {
   
        timeLeft--;
        
        timerEl.textContent = "Timer: " +timeLeft;
        if (timeLeft < 1){
            clearInterval(timeInterval)
            msg();
        }

  }, 1000);
}


function msg() {
  return timerEl.textContent =message;
}




//code for questions 

var questions = [
    {
        title: 'What does js stand for?',
        options: ['python', 'java', 'ruby', 'javascript'],
        answer: 'javascript'
    },
    {
        title: 'What does html stand for?',
        options: ['Hypertext Markup language ', 'Help Teach Me Languages', 'Idk ', 'Home Tool Markup Language '],
        answer: 'Hypertext Markup language '
    },
    {
        title: 'How do you display text in the console?',
        options: ['console.display();', 'console.log();', 'log.console();', 'display.console();'],
        answer: 'console.log();'
    },
    {
        title: 'How do you comment out code in HTML?',
        options: ['//comment', '<!comment>', '#comment', '<!--comment-->'],
        answer: '<!--comment-->'
    },
    {
        title: 'Which tag is used to link to JavaScript from HTML?',
        options: ['<a>', '<script>', '<link>', '<href>'],
        answer: '<script>'
    }
]


var questionIndex = 0;

function displayQuestion(currentQuestion){

    var title = document.createElement('h1');

    title.append(currentQuestion.title);

    document.getElementById('questionContainer').append(title);


    for(var i =0; i < currentQuestion.options.length; i++){

        var btn = document.createElement('button');

        btn.append(currentQuestion.options[i]);

        document.getElementById('questionContainer').append(btn);
    }
}


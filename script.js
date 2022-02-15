var startBtn = document.querySelector('#startBttn');
var timeLeft = 60;
var questionIndex = 0;
var timerEl = document.getElementById('timer');
var name = localStorage.getItem('userName');
var userScore = localStorage.getItem('score');



var questions = [
    {
        title: 'What does js stand for?',
        option: ['python', 'java', 'ruby', 'javascript'],
        answer: 'javascript'
    },
    {
        title: 'What does html stand for?',
        option: ['Hypertext Markup language ', 'Help Teach Me Languages', 'Idk ', 'Home Tool Markup Language '],
        answer: 'Hypertext Markup language '
    },
    {
        title: 'How do you display text in the console?',
        option: ['console.display();', 'console.log();', 'log.console();', 'display.console();'],
        answer: 'console.log();'
    },
    {
        title: 'How do you comment out code in HTML?',
        option: ['//comment', '<!comment>', '#comment', '<!--comment-->'],
        answer: '<!--comment-->'
    },
    {
        title: 'Which tag is used to link to JavaScript from HTML?',
        option: ['<a>', '<script>', '<link>', '<href>'],
        answer: '<script>'
    }
]


startBtn.addEventListener('click', function (event) {
    document.getElementById('startScreen').remove();
    countdown();
    displayQuestion(questions[questionIndex]);

});



function countdown() {
    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "Timer: " + timeLeft;
        if (timeLeft < 1 || questionIndex === questions.length -1) {
            clearInterval(timeInterval);
           // document.getElementById('questionContainer').textContent = "";
            scoreFunc();
        }

    }, 1000);
}




function displayQuestion(currentQuestion) {
    document.getElementById('questionContainer').textContent = "";

    if (questionIndex === questions.length || timeLeft === 0) {
        document.getElementById('questionContainer').textContent= '';
        scoreFunc();
    }
    else {
        var questionT = document.createElement('h1');

        questionT.textContent = currentQuestion.title;
        questionT.setAttribute('value', currentQuestion.title);


        document.getElementById('questionContainer').append(questionT);

        for (var i = 0; i < currentQuestion.option.length; i++) {
            var btn = document.createElement('button');

            btn.textContent = currentQuestion.option[i];
            btn.setAttribute('value', currentQuestion.option[i]);

            document.getElementById('questionContainer').append(btn)

            btn.addEventListener("click", function () {

                if (this.value === currentQuestion.answer) {
                    var correctAns = document.createElement('p');
                    correctAns.textContent = "Correct!";
                    document.getElementById('questionContainer').append(correctAns);
                    nextQ(currentQuestion);

                }
                else {

                    timeLeft = timeLeft - 10;
                    var incorrect = document.createElement('p');
                    incorrect.textContent = " Incorrect";
                    document.getElementById('questionContainer').append(incorrect);
                    nextQ(currentQuestion);
                }
            });
        }
    }
 }



function nextQ() {
    questionIndex++;
    displayQuestion(questions[questionIndex]);
}


function scoreFunc() {
    
    var finishedTitle = document.createElement('h1');
    var finalText = document.createTextNode("Times up!");
    finishedTitle.append(finalText);
   
    document.getElementById('questionContainer').append(finishedTitle);

    var total = document.createElement('h4');

    total.textContent = "Your final score is: " + timeLeft;

    document.getElementById('questionContainer').append(total);


    var input = document.createElement('input');
    input.setAttribute("type", "text");

    input.textContent = "Enter initials: " + input;
    localStorage.setItem("userName", input.value);

    document.getElementById('questionContainer').append(input);

    var submitBtn = document.createElement('button');
    submitBtn.textContent = "Submit";
    document.getElementById('questionContainer').append(submitBtn);


  

    //after they click the submit button they sld be bought to the high score pg 
    submitBtn.addEventListener('click', function (event) {
        console.log("submit btn pressed")
        document.getElementById('questionContainer').textContent="";
    })
}

var startBtn = document.querySelector('#startBttn');
var timeLeft = 60;
var questionIndex = 0;
var score = timeLeft;
var btn;
var timerEl = document.getElementById('timer');
var message = "TIMES UP!";



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
        if (timeLeft < 1) {
            clearInterval(timeInterval);
            scoreFunc();
        }

    }, 1000);
}




function displayQuestion(currentQuestion) {

    var title = document.createElement('h1');

    title.append(currentQuestion.title);

    document.getElementById('questionContainer').append(title);


    for (var i = 0; i < currentQuestion.option.length; i++) {

        btn = document.createElement('button');

        btn.append(currentQuestion.option[i]);

        document.getElementById('questionContainer').append(btn);

        btn.addEventListener("click", checkAns);
    }
}

function checkAns(currentQuestion) {

    if (currentQuestion.btn = (currentQuestion.answer)) {
        var correctAns = document.createElement('p');
        correctAns.textContent = "Correct!";
        console.log("right");
        document.getElementById('questionContainer').append(correctAns);

        document.getElementById('questionContainer').remove();

        nextQ(currentQuestion);

    }
    else {
        console.log("wrong");
        timeLeft = timeLeft - 10;
        var incorrect = document.createElement('p');
        incorrect.textContent = " Incorrect";
        document.getElementById('questionContainer').append(incorrect);

        document.getElementById('questionContainer').remove();
        nextQ(currentQuestion);

    }



    if (questionIndex = questions.length) {
        document.getElementById('questionContainer').remove();
        //call to score function
        scoreFunc();
    }
    else if (timeLeft = 0) {
        document.getElementById('questionContainer').remove();
        //call to score function
        scoreFunc();
    }
}

function nextQ() {
    questionIndex++;
    console.log(questionIndex)
    displayQuestion(questions[questionIndex]);
}


function scoreFunc() {
    //clear screen 
    //document.getElementById('questionContainer').remove();

    var finishedTitle = document.createElement('h1');
    var finalText = document.createTextNode("Times up!");
    // finishedTitle.appendChild(finalText)

    finishedTitle.append(finalText);
    // finishedTitle.textContent = "Times up!"

    document.getElementById('questionContainer').append(finishedTitle);

    var total = document.createElement('h4');

    total.textContent = "Your final score is: " + score;

    document.getElementById('questionContainer').append(total);


    var input = document.createElement('input');
    input.setAttribute("type", "text");

    input.textContent = "Enter initials: " + input;

    document.getElementById('questionContainer').append(input);

    var submitBtn = document.createElement('button');
    submitBtn.textContent = "Submit";
    document.getElementById('questionContainer').append(submitBtn);

    //after they click the submit button they sld be bought to the high score pg 
}
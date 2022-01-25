var startBtn = document.querySelector('#startBttn');



startBtn.addEventListener('click', function(event){
    document.getElementById('startScreen').remove();
    //see if button works 

    displayQuestion(questions[questionIndex]);

   //if works link to question 
});


var timerEl = document.getElementById('timer');

var message ="TIMES UP!";


function countdown() {
  var timeLeft = 60;

//   console.log(timeLeft);

  var timeInterval = setInterval(function () {
   
        timeLeft--;
        // document.getElementById(timer).textContent=timeLeft;
        timerEl.textContent = timeLeft;
        if (timeLeft < 1){
            clearInterval(timeInterval)
        }

  }, 1000);
}





function msg() {
  return message;
}

countdown();

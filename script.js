var startBtn = document.querySelector('#startBttn');
startBtn.addEventListener('click', function(event){

    //see if button works 
   console.log('Button Clicked');

   //if works link to question 
});


var timerEl = document.getElementById('timer');

var message ="TIMES UP!";


function countdown() {
  var timeLeft = 60;

  console.log(timeLeft);

  var timeInterval = setInterval(function () {
   for (var i=0; i<60;i++)   {
    
    if (timeLeft > 1) {
        console.log("in if");
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
        console.log(timeLeft);
    } 
    else 
      timerEl.textContent = '';
      clearInterval(timeInterval);
      msg();
}
  }, 1000);
}

function msg() {
  return message;
}

countdown();

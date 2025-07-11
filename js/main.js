let countdown;
let timeLeft = 0;

const timeInput = document.getElementById('timeInput');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const countdownDisplay = document.getElementById('countdown');

startBtn.addEventListener('click', function() {
    const inputTime = parseInt(timeInput.value);

    if (isNaN(inputTime) || inputTime <= 0) {
      alert('Please enter a valid time.');
      return;
    }
    timeLeft = inputTime;
    countdownDisplay.textContent = timeLeft;
    clearInterval(countdown);
    countdown = setInterval(function() {
      timeLeft--;
      if (timeLeft <= 0) {
        clearInterval(countdown);
        countdownDisplay.textContent = 'Time is up!';
      } else {
        countdownDisplay.textContent = timeLeft;
      }
    }, 1000);
});

resetBtn.addEventListener('click', function() {
    clearInterval(countdown);
    countdownDisplay.textContent = 0;
    timeInput.value = '';
});
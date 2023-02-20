'use strict';

let guess;
let highscore = 0;
let max = 20;
let hiddenNumber = Math.floor(Math.random() * 20);
let score = 10
let diff = document.getElementsByName(`difficulty`)
document.querySelector(`.score`).textContent = `${score}`;

function again(){
for(let i=0;i<3;i++){
if(diff[i].checked){max = diff[i].value}
};
hiddenNumber = Math.floor(Math.random() * max);
score = 10;
document.querySelector('body').style.backgroundColor = `#222222`;
document.querySelector(`.guess`).max = max;
document.querySelector(`.between`).textContent = `Between 1 and ${max}`;
document.querySelector(`.message`).textContent = `Start guessing...`;
document.querySelector(`.score`).textContent = `${score}`;
document.querySelector(`.guess`).value = 0;
document.querySelector(`.number`).textContent = `?`;
document.querySelector(`.check`).addEventListener(`click`, check);
document.querySelector('.guess').addEventListener('keypress', enter);
}

function check() {
    guess = Number(document.querySelector(`.guess`).value);
    if (!guess) {
      document.querySelector(`.message`).textContent = `Please input a number between 1 and ${max}`;
    } else if (guess < hiddenNumber) {
      document.querySelector(`.message`).textContent = `Your guess is lower than hidden number`;
      score--;
      document.querySelector(`.score`).textContent = `${score}`;
    } else if (guess > hiddenNumber) {
      document.querySelector(`.message`).textContent = `Your guess is higher than hidden number`;
      score--;
      document.querySelector(`.score`).textContent = `${score}`;
    } else if (guess == hiddenNumber) {
      document.querySelector(`.message`).textContent = `Congratulations🥇`;
      document.querySelector(`.number`).textContent = hiddenNumber;
      document.querySelector('body').style.backgroundColor = `#60b347`;
      document.querySelector(`.check`).removeEventListener(`click`, check);
      document.querySelector('.guess').removeEventListener('keypress', enter);
      if(score>highscore){highscore = score;
        document.querySelector(`.highscore`).textContent = highscore;}
    }
    if(score < 1){
        document.querySelector(`.message`).textContent = `You lose 😭`;
        document.querySelector(`.number`).textContent = hiddenNumber;
        document.querySelector('body').style.backgroundColor = `#a02020`;
        document.querySelector(`.check`).removeEventListener(`click`, check);
        document.querySelector('.guess').removeEventListener('keypress', enter);
    }
};

function ranges(){
    if(Number(document.querySelector(`.guess`).value)>max){
        document.querySelector(`.guess`).value = max;
    }
    if (Number(document.querySelector(`.guess`).value) < 0) {
      document.querySelector(`.guess`).value = 1;
    }
}
function enter(e) {
  if (e.key === 'Enter') {
    check();
  }
}




document.querySelector(`.check`).addEventListener(`click`, check);
document.querySelector(`.again`).addEventListener(`click`, again);
document.querySelectorAll('input[name="difficulty"]').forEach((elem) => {
    elem.addEventListener("change", again)})
document.querySelector(`.guess`).addEventListener('input', ranges);
document.querySelector('.guess').addEventListener('keypress', enter);
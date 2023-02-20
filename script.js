'use strict';


// console.log(document.querySelector(`.message`).textContent)
// document.querySelector(`.message`).textContent = `Guess the number`
// document.querySelector(`.number`).textContent  = 13
// document.querySelector(`.score`).textContent  = 2

// document.querySelector(`.guess`).value = 23
// console.log(document.querySelector(`.guess`).value)

let guess;
let highscore = 0;
let max = 20;
let hiddenNumber = Math.floor(Math.random() * 20);
let score = Math.floor(max/2)
let diff = document.getElementsByName(`difficulty`)
document.querySelector(`.score`).textContent = `${score}`;

function again(){
for(let i=0;i<3;i++){
if(diff[i].checked){max = diff[i].value}
};
hiddenNumber = Math.floor(Math.random() * max);
score = Math.floor(max / 2);
document.querySelector('body').style.backgroundColor = `#222222`;
document.querySelector(`.guess`).max = max;
document.querySelector(`.between`).textContent = `Between 1 and ${max}`;
document.querySelector(`.message`).textContent = `Start guessing...`;
document.querySelector(`.score`).textContent = `${score}`;
document.querySelector(`.guess`).value = 0;
document.querySelector(`.number`).textContent = `?`;
}

function check() {
    guess = Number(document.querySelector(`.guess`).value);
    if (!guess) {
      document.querySelector(
        `.message`
      ).textContent = `Please input a number between 1 and ${max}`;
    } else if (guess < hiddenNumber) {
      document.querySelector(
        `.message`
      ).textContent = `Your guess is lower than hidden number`;
      score--;
      document.querySelector(`.score`).textContent = `${score}`;
    } else if (guess > hiddenNumber) {
      document.querySelector(
        `.message`
      ).textContent = `Your guess is higher than hidden number`;
      score--;
      document.querySelector(`.score`).textContent = `${score}`;
    } else if (guess == hiddenNumber) {
      document.querySelector(
        `.message`
      ).textContent = `Congratulations🥇`;
      document.querySelector(
        `.number`
      ).textContent = hiddenNumber;
      document.querySelector('body').style.backgroundColor = `#60b347`;
      if(score>highscore){highscore = score;
        document.querySelector(`.highscore`).textContent = highscore;}
    }
    if(score < 1){
        document.querySelector(`.message`).textContent = `You lose 😭`;        
    }
};

document.querySelector(`.check`).addEventListener(`click`, check);
document.querySelector(`.again`).addEventListener(`click`, again);
document.querySelectorAll('input[name="difficulty"]').forEach((elem) => {
    elem.addEventListener("change", again)})
const rules = document.querySelector(".rules");
const ruleBox = document.querySelector(".full-rule-box");
const rulesBoxClose = document.querySelector(".rules-box-close");

ruleBox.style.display = "none";

rules.addEventListener("click", () => {
  ruleBox.style.display = "block";
});
rulesBoxClose.addEventListener("click", () => {
  ruleBox.style.display = "none";
});

const min = 1; 
const max = 3;
let comRandom = Math.floor(Math.random() * (max - min + 1)) + min;


let uScore = parseInt(localStorage.getItem('uScore')) || 0;
let cScore = parseInt(localStorage.getItem('cScore')) || 0;


let uRock2 = document.querySelector("#u-rock2");
let uScissor2 = document.querySelector("#u-scissor2");
let uPaper2 = document.querySelector("#u-paper2");

let cRock2 = document.querySelector("#c-rock2");
let cScissor2 = document.querySelector("#c-scissor2");
let cPaper2 = document.querySelector("#c-paper2");

let resText1 = document.querySelector(".res-text1");
let resText2 = document.querySelector(".res-text2");

let playAgain = document.querySelector(".play-again");
let nextBtn = document.querySelector('.next')

let pScoreText = document.querySelector('#P-Score')
let cScoreText = document.querySelector('#C-Score')


nextBtn.addEventListener('click', () => window.location.href = 'Frame3.html')

const uWinElements = [
  document.querySelector(".u-win-1"),
  document.querySelector(".u-win-2"),
  document.querySelector(".u-win-3"),
];
const cWinElements = [
  document.querySelector(".c-win-1"),
  document.querySelector(".c-win-2"),
  document.querySelector(".c-win-3"),
];


uRock2.value = 1;
uScissor2.value = 2;
uPaper2.value = 3;


cRock2.value = 1;
cScissor2.value = 2;
cPaper2.value = 3;

let rock1val = localStorage.getItem("rock1");
let scissor1val = localStorage.getItem("scissor1");
let paper1val = localStorage.getItem("paper1");


if (comRandom === cRock2.value) {
  cRock2.style.display = "flex";
  cScissor2.style.display = "none";
  cPaper2.style.display = "none";
}

if (uRock2.value == rock1val) {
  uRock2.style.display = "flex";
  uScissor2.style.display = "none";
  uPaper2.style.display = "none";

  if (comRandom == rock1val) {
    resText1.textContent = "tie up";
    resText2.textContent = "";
  
    uWinElements.forEach(element => element.style.display = "none");
    cWinElements.forEach(element => element.style.display = "none");
    nextBtn.style.display = 'none'
  } else if (comRandom == cPaper2.value) {
    uWinElements.forEach(element => element.style.display = "none");
    resText1.textContent = "you lost";
    cScore++
    nextBtn.style.display = 'none'
  } else {
    cWinElements.forEach(element => element.style.display = "none");
    uScore++
  }

  localStorage.removeItem("rock1");
}


if (comRandom === cScissor2.value) {
  cRock2.style.display = "none";
  cScissor2.style.display = "flex";
  cPaper2.style.display = "none";
}


if (uScissor2.value == scissor1val) {
  uRock2.style.display = "none";
  uScissor2.style.display = "flex";
  uPaper2.style.display = "none";
  if (comRandom == scissor1val) {
    resText1.textContent = "tie up";
    resText2.textContent = "";
    
    uWinElements.forEach(element => element.style.display = "none");
    cWinElements.forEach(element => element.style.display = "none");
    nextBtn.style.display = 'none'
  } else if (comRandom < scissor1val) {
    uWinElements.forEach(element => element.style.display = "none");
    resText1.textContent = "you lost";
    cScore++
    nextBtn.style.display = 'none'
  } else {
    cWinElements.forEach(element => element.style.display = "none");
    uScore++
  }

  localStorage.removeItem("scissor1");
}


if (comRandom === cPaper2.value) {
  cRock2.style.display = "none";
  cScissor2.style.display = "none";
  cPaper2.style.display = "flex";
}


if (uPaper2.value == paper1val) {
  uRock2.style.display = "none";
  uScissor2.style.display = "none";
  uPaper2.style.display = "flex";
  if (comRandom == paper1val) {
    resText1.textContent = "tie up";
    resText2.textContent = "";
    
    uWinElements.forEach(element => element.style.display = "none");
    cWinElements.forEach(element => element.style.display = "none");
    nextBtn.style.display = 'none'
  } else if (comRandom == uScissor2.value) {
    uWinElements.forEach(element => element.style.display = "none");
    resText1.textContent = "you lost";
    cScore++
    nextBtn.style.display = 'none'
  } else {
    cWinElements.forEach(element => element.style.display = "none");
    uScore++
  }

  localStorage.removeItem("paper1");
}


localStorage.setItem('uScore', uScore.toString());
localStorage.setItem('cScore', cScore.toString());


pScoreText.textContent = localStorage.getItem('uScore')
cScoreText.textContent = localStorage.getItem('cScore')


playAgain.addEventListener("click", () => window.location.href = "index.html");
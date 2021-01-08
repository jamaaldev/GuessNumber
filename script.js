// Variable Maker
let qmark = document.querySelector(".game_q > h2");
let qmarks = document.querySelector(".game_q");
let bottoncheck = document.querySelector(".left button");
let start = document.querySelector(".starts > span");
let point = document.querySelector(".points > span");
let mypoint = document.querySelector(".mypoints > span");
let startpoints = 20;
// change the start points
start.innerHTML = startpoints;
point.innerHTML = startpoints;

// AddeventListener

qmarks.addEventListener("click", () => {
  qmark.innerHTML = "?";
  document.querySelector(".container").style.backgroundColor = "";
  let point = document.querySelector(".points > span");
  point.innerHTML = startpoints;

  reset();
});

bottoncheck.addEventListener("click", () => {
  humanNum = parseInt(document.querySelector("#typenumber").value);

  if (humanNum) {
    startpoints--;
    point.innerHTML = startpoints;
    myGuess(startpoints);
  } 
  

});

// function maker

let botNum = randomBot();

function reset() {
  botNum = randomBot();
  startpoints = 20;
  point.innerHTML = startpoints;
  qmarks.classList.remove("game_c");
}

function randomBot() {
  botRandom = Math.floor(Math.random() * 4 + 1);
  return botRandom;
}

// save the bot number in to varaible
let humanNum;

function myGuess(starpoint) {
  humanNum = parseInt(document.querySelector("#typenumber").value);
  checkNumber(botNum, humanNum, starpoint);
}
let myscore = 0;
function checkNumber(bot, human, point) {
  console.log("bot", bot);
  console.log("me", human);
  if (bot === human) {
    console.log("You Won");
    qmark.innerHTML = +bot;
    qmark.innerHTML += "  Restart";
    qmarks.classList.add("game_c");
    document.querySelector(".container").style.backgroundColor = "#1aa02e";
    myscore += point;

    document.querySelector("#typenumber").value = "";

    document.querySelector(".dynamic_text > h3").innerHTML =
      "Your Guess is Correct";

    if ((mypoint.innerHTML = "0")) {
      mypoint.innerHTML = myscore;
    }
    
    
  } else if (bot > human) {
    document.querySelector(".dynamic_text > h3").innerHTML =
      "Your Guess is Low";
  } else {
    document.querySelector(".dynamic_text > h3").innerHTML =
      "Your Guess is High";
  }

  if(point === 0){
    qmark.innerHTML += "  Restart";
    qmarks.classList.add("game_c");
    document.querySelector("#typenumber").value = "";    
  }
}

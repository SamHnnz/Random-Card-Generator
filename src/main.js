/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let randomNumber;
let randomSuit;
let suit;

window.onload = function() {
  suit = suitGenerator();
  document.getElementById("Number").innerHTML = numberGenerator();
  document.getElementById("Suit").innerHTML = suit;
  document.getElementById("Suits").innerHTML = suit;
  document.getElementById("button").innerHTML = "Get a new card";
};

//Generar número
const numberGenerator = () => {
  randomNumber = Math.floor(Math.random() * 13 + 1);
  if (randomNumber == 1) {
    randomNumber = "A";
  } else if (randomNumber == 11) {
    randomNumber = "J";
  } else if (randomNumber == 12) {
    randomNumber = "Q";
  } else if (randomNumber == 13) {
    randomNumber = "K";
  }

  if (randomNumber === 10) {
    document.getElementById("Number").style.fontSize = "24rem";
    document.getElementById("Number").style.marginTop = "0.5%";
  }
  if (randomNumber === "Q") {
    document.getElementById("Number").style.fontSize = "24rem";
    document.getElementById("Number").style.marginBottom = "-1%";
  }

  return randomNumber;
};

//Generar pintas

const suitGenerator = () => {
  randomSuit = Math.floor(Math.random() * 4 + 1);
  if (randomSuit == 1) {
    randomSuit = "&clubs;";
  } else if (randomSuit == 2) {
    randomSuit = "&hearts;";
  } else if (randomSuit == 3) {
    randomSuit = "&diams;";
  } else if (randomSuit == 4) {
    randomSuit = "&spades;";
  }

  if (randomSuit === "&hearts;" || randomSuit === "&diams;") {
    document.getElementById("card-heart").classList.add("redSuit");
  } else {
    document.getElementById("card-heart").classList.remove("redSuit");
  }

  return randomSuit;
};

// Botón hover
//document.getElementById("button").onmouseover = function () {
//   mouseOut();
//};

//function mouseOver(){
//  document.getElementById("button").style.background.linear
//}

//background: linear-gradient(90deg, #1CB5E0 0%, #000851 100%);

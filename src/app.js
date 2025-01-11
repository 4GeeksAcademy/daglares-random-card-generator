/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const primerPalo = document.querySelector("#paloArriba");
  const segundoPalo = document.querySelector("#paloAbajo");
  const valorCarta = document.querySelector("#valor");

  const palos = ["♦", "♥", "♠", "♣"];
  const valores = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  function generateRandomValue(lista) {
    let randomValue = Math.floor(Math.random() * lista.length);
    return lista[randomValue];
  }

  let randomValor = generateRandomValue(valores);
  let randomPalo = generateRandomValue(palos);
  primerPalo.innerHTML = randomPalo;
  segundoPalo.innerHTML = randomPalo;
  valorCarta.innerHTML = randomValor;

  if (randomPalo == "♦" || randomPalo == "♥") {
    primerPalo.style.color = "red";
    segundoPalo.style.color = "red";
  }
};

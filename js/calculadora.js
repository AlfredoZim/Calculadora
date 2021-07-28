"use strict";
const screen = document.querySelector("#resultado");

function operation(digito) {
  let valor = digito.value;
  screen.value += valor;
}

document.getElementById("borrar").addEventListener("click", () => {
  screen.value = "";
});

document.getElementById("igual").addEventListener("click", () => {
    const res = eval(screen.value);
  if (res == "Error" || isNaN(res) == true) {
    screen.value = "";
  }else{
    try {
      screen.value = res;
    } catch (error) {
      screen.value = "Error";
      setTimeout(() => {
        screen.value = "";
      }, 500);
    }
  }
});

let ca = '/*/*';
console.log(eval(ca))
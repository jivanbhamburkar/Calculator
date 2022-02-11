//Disply Ele
const display = document.getElementById("input");

//functions

function clickButton(val) {
  display.value = display.value + val;
}

function calc() {
  display.value = eval(display.value);
}

function reset() {
  display.value = "";
}

function del(){
    display.value = display.value.slice(0, -1);
}
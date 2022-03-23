//Disply Ele
const display = document.getElementById("input");

//functions

function clickButton(val) {
  if (display.value == "Infinity") {
    reset();
  }

  if (display.value.includes(".") && val == ".") {
    return;
  } else {
    display.value = display.value + val;
  }
}

function calc() {
  display.value = eval(display.value);
}


function reset() {
  display.value = "";
}

function del() {
  display.value = display.value.slice(0, -1);
}

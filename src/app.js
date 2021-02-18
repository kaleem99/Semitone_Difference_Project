const { JamBuddy } = require("./jamBuddy");
let buddy = new JamBuddy();

document.getElementById("btn").onclick = function () {
  getNotes();
};

document.getElementById("submit").onclick = function () {
  submitAnswer();
};

document.getElementById("getAnswer").onclick = function () {
  revealAndGetAnswer();
};
window.onload = function () {
  getNotes();
};
function getNotes() {
  document.getElementById("finalAnswer").innerHTML = "";
  let notes = buddy.selectNotes();
  for (var i = 0; i <= 11; i++) {
    document.getElementById(`explanation${i}`).innerHTML = "";
    document.getElementById(`explanation${i}`).style.backgroundColor = "white";
  }
  document.getElementById("text").innerHTML = notes;
  console.log(notes);
}

function submitAnswer() {
  let numValue = document.getElementById("answer").value;
  let correct = buddy.checkAnswer(numValue);
  if (correct == true) {
    document.getElementById("true/false").innerHTML = "You got it well done";
    document.getElementById("true/false").style.color = "blue";
    revealAndGetAnswer();
    document.getElementById("index").innerHTML++;
    setTimeout(function () {
      document.getElementById("text").innerHTML = "";
      document.getElementById("answer").value = "";
      document.getElementById("true/false").innerHTML = "Play Again";
      document.getElementById("truEbfalse").style.color = "black";
      index++;
    }, 2000);
  } else {
    document.getElementById("true/false").innerHTML = "Wrong answer! Try again";
    document.getElementById("true/false").style.color = "red";
    document.getElementById("index").innerHTML = 0;
  }
}

function revealAndGetAnswer() {
  let array = [
    "A",
    "A# - Bb",
    "B",
    "C",
    "C# - Db",
    "D",
    "D# - Eb",
    "E",
    "F",
    "F# - Gb",
    "G",
    "G# - Ab",
  ];

  document.getElementById(`explanation${0}`).innerHTML = array[0];
  document.getElementById(`explanation${1}`).innerHTML = array[1];
  document.getElementById(`explanation${2}`).innerHTML = array[2];
  document.getElementById(`explanation${3}`).innerHTML = array[3];
  document.getElementById(`explanation${4}`).innerHTML = array[4];
  document.getElementById(`explanation${5}`).innerHTML = array[5];
  document.getElementById(`explanation${6}`).innerHTML = array[6];
  document.getElementById(`explanation${7}`).innerHTML = array[7];
  document.getElementById(`explanation${8}`).innerHTML = array[8];
  document.getElementById(`explanation${9}`).innerHTML = array[9];
  document.getElementById(`explanation${10}`).innerHTML = array[10];
  document.getElementById(`explanation${11}`).innerHTML = array[11];

  let elementsArray = document.getElementById("text").innerHTML.split(",");
  let element1 = elementsArray[0];

  let indexValue1 = array.indexOf(element1);
  if (element1 == "A#" || element1 == "Bb") {
    indexValue1 = 1;
  } else if (element1 == "C#" || element1 == "Db") {
    indexValue1 = 4;
  } else if (element1 == "D#" || element1 == "Eb") {
    indexValue1 = 6;
  } else if (element1 == "F#" || element1 == "Gb") {
    indexValue1 = 9;
  } else if (element1 == "G#" || element1 == "Ab") {
    indexValue1 = 11;
  }

  let element2 = elementsArray[1];
  let indexValue2 = array.indexOf(element2);
  if (element2 == "A#" || element2 == "Bb") {
    indexValue2 = 1;
  } else if (element2 == "C#" || element2 == "Db") {
    indexValue2 = 4;
  } else if (element2 == "D#" || element2 == "Eb") {
    indexValue2 = 6;
  } else if (element2 == "F#" || element2 == "Gb") {
    indexValue2 = 9;
  } else if (element2 == "G#" || element2 == "Ab") {
    indexValue2 = 11;
  }
  document.getElementById(`explanation${indexValue1}`).style.backgroundColor =
    "red";
  document.getElementById(`explanation${indexValue2}`).style.backgroundColor =
    "red";

  let resultDifference = Math.abs(indexValue2 - indexValue1);
  document.getElementById("finalAnswer").innerHTML = resultDifference;
}

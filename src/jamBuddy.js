class JamBuddy {
  constructor() {
    this.jamNotes = [
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "Ab",
      "Bb",
      "Db",
      "Eb",
      "Gb",
    ];
    this.twoNotes = [];
  }
  shuffle() {
    let newNotes = [...this.jamNotes];
    for (var i = 0; i < newNotes.length; i++) {
      var j = Math.floor(Math.random() * i);
      let temp = newNotes[i];
      newNotes[i] = newNotes[j];
      newNotes[j] = temp;
    }
    return newNotes;
  }
  selectNotes() {
    this.twoNotes = [];
    let newNotes = this.shuffle();
    let data = newNotes.slice(0, 2);
    let newData = data.sort((small, big) => small - big);
    this.twoNotes.push(newData[0], newData[1]);
    return newData;
  }
  calculateDistance() {
    for (var i = 0; i < this.twoNotes.length; i++) {
      if (this.twoNotes[i] == "Ab") {
        this.twoNotes[i] = "G#";
      } else if (this.twoNotes[i] == "Bb") {
        this.twoNotes[i] = "A#";
      } else if (this.twoNotes[i] == "Db") {
        this.twoNotes[i] = "C#";
      } else if (this.twoNotes[i] == "Eb") {
        this.twoNotes[i] = "D#";
      } else if (this.twoNotes[i] == "Gb") {
        this.twoNotes[i] = "F#";
      }
    }
    let index1 = this.jamNotes.indexOf(this.twoNotes[0]);
    let index2 = this.jamNotes.indexOf(this.twoNotes[1]);
    let difference = Math.abs(index1++ - index2++);
    return difference;
  }
  checkAnswer(number) {
    let difference = this.calculateDistance();
    if (number != "") {
      return number == difference;
    }
  }
}

module.exports = { JamBuddy };

const { JSDOM } = require("jsdom");
const fs = require("fs");
const html = fs.readFileSync("index.html", "utf-8");
const { JamBuddy } = require("../src/jamBuddy");
const { document } = new JSDOM(html).window;
global.document = document;

let buddy = new JamBuddy();

describe("index.html", function () {
  var browser;

  beforeEach(function (done) {
    JSDOM.fromFile("index.html", {}).then(function (res) {
      browser = res;
      done();
    });
  });

  afterEach(function () {
    browser.window.close();
  });
  it("should have a <div> element", function () {
    var div = browser.window.document.querySelector("div");
    expect(div).not.toBe("");
  });
  it("get notes div should not be null when button is clicked", function () {
    browser.window.onModulesLoaded = function () {
      var getNotes = browser.window.document.getElementsByClassName("getNotes");
      var btn = browser.window.document.getElementById("btn");
      expect(btn).not.toBe(null);

      var event = new browser.window.MouseEvent("click");
      btn.dispatchEvent(event);
      expect(getNotes.textContent).not.toBe(null);
    };
  });
  it("should have h2", function () {
    var h2 = browser.window.document.querySelector("h2");
    expect(h2).not.toBe("");
  });
});

describe("functions selectNotes, checkAnswer and shuffle should be defined", function () {
  it("should check if selectNotes function exist", function () {
    expect(buddy.selectNotes).toBeDefined();
  });
  it("should check if checkAnswer function exist", function () {
    expect(buddy.checkAnswer).toBeDefined();
  });
  it("should check if shuffle function exist", function () {
    expect(buddy.shuffle).toBeDefined();
  });
});

describe("The function shuffle should return an array", function () {
  it("should have a length of 17", function () {
    let newNotes = buddy.shuffle();
    expect(newNotes.length).toEqual(17);
  });
  it("selectNotes function should return 2 random notes", function () {
    let notes = buddy.selectNotes();
    expect(notes.length).toBe(2);
  });
});

describe("checkAnswer should return true or false", function () {
  it("should handle normal notes and return the difference", function () {
    buddy.twoNotes = ["A", "B"];
    expect(buddy.calculateDistance()).toEqual(2);
  });
  it("should handle flat notes and return the difference", function () {
    buddy.twoNotes = ["A", "Gb"];
    expect(buddy.calculateDistance()).toEqual(9);
  });
  it("should check for previous notes", function () {
    let previous = buddy.twoNotes;
    buddy.calculateDistance();
    expect(buddy.twoNotes).toEqual(previous);
  });
});

// This global variable is accessible by ALL scene files!
let currentScreen = 1;

// Constants for button sizing shared across files
const BTN_W = 280;
const BTN_H = 50;

function setup() {
  createCanvas(800, 500);
  textFont("monospace");
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
}

function draw() {
  background(255); // White background

  // Checks currentScreen and runs the draw function from that specific file
  if (currentScreen === 1) drawScene1();
  if (currentScreen === 2) drawScene2();
  if (currentScreen === 3) drawScene3();
  if (currentScreen === 4) drawScene4();
  if (currentScreen === 5) drawScene5();
  if (currentScreen === 6) drawScene6();
  if (currentScreen === 7) drawScene7();
  if (currentScreen === 8) drawScene8();
  if (currentScreen === 9) drawScene9();
  if (currentScreen === 10) drawScene10();
  if (currentScreen === 11) drawScene11();
  if (currentScreen === 12) drawScene12();
  if (currentScreen === 13) drawScene13();
  if (currentScreen === 14) drawScene14();
  if (currentScreen === 15) drawScene15();
}

function mousePressed() {
  // Routes mouse clicks to the mouse handler of the active scene
  if (currentScreen === 1) pressScene1();
  if (currentScreen === 2) pressScene2();
  if (currentScreen === 3) pressScene3();
  if (currentScreen === 4) pressScene4();
  if (currentScreen === 5) pressScene5();
  if (currentScreen === 6) pressScene6();
  if (currentScreen === 7) pressScene7();
  if (currentScreen === 8) pressScene8();
  if (currentScreen === 9) pressScene9();
  if (currentScreen === 10) pressScene10();
  if (currentScreen === 11) pressScene11();
  if (currentScreen === 12) pressScene12();
  if (currentScreen === 13) pressScene13();
  if (currentScreen === 14) pressScene14();
  if (currentScreen === 15) pressScene15();
}

// Global helper function to check if mouse is over a button
function isMouseOver(x, y, w, h) {
  return (
    mouseX > x - w / 2 &&
    mouseX < x + w / 2 &&
    mouseY > y - h / 2 &&
    mouseY < y + h / 2
  );
}

// Global helper function to format a standard text screen
function renderSceneText(title, description) {
  fill(50);
  textSize(24);
  text(title, width / 2, 50);

  textSize(14);
  fill(80);
  text(description, width / 2, 170, 650, 180);
}

// Global helper function to quickly draw UI buttons
function renderButton(x, y, label) {
  stroke(0);
  strokeWeight(2);
  fill(isMouseOver(x, y, BTN_W, BTN_H) ? 230 : 255);
  rect(x, y, BTN_W, BTN_H, 6);

  noStroke();
  fill(0);
  textSize(12);
  text(label, x, y, BTN_W - 10, BTN_H - 5);
}

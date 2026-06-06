// This global variable tracks which scene is currently active (1 through 15)
let currentScreen = 1;

// Safety mechanism to prevent fast-forward click bleeding
let lastScreenChangedTime = 0;
const CLICK_COOLDOWN_MS = 200; // 200 milliseconds safety window

// Shared dimensions for user interaction buttons
const BTN_W = 280;
const BTN_H = 50;

function setup() {
  createCanvas(800, 500);
  textFont("monospace");
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
}

function draw() {
  background(255); // Keeps the background a crisp, solid white

  // Traffic controller drawing the correct screen based on your whiteboard layout
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
  // Check if enough time has passed since the last screen change
  if (millis() - lastScreenChangedTime < CLICK_COOLDOWN_MS) {
    return; // Ignore the click if it's happening too fast!
  }

  let screenAtMomentOfClick = currentScreen;

  if (screenAtMomentOfClick === 1) pressScene1();
  else if (screenAtMomentOfClick === 2) pressScene2();
  else if (screenAtMomentOfClick === 3) pressScene3();
  else if (screenAtMomentOfClick === 4) pressScene4();
  else if (screenAtMomentOfClick === 5) pressScene5();
  else if (screenAtMomentOfClick === 6) pressScene6();
  else if (screenAtMomentOfClick === 7) pressScene7();
  else if (screenAtMomentOfClick === 8) pressScene8();
  else if (screenAtMomentOfClick === 9) pressScene9();
  else if (screenAtMomentOfClick === 10) pressScene10();
  else if (screenAtMomentOfClick === 11) pressScene11();
  else if (screenAtMomentOfClick === 12) pressScene12();
  else if (screenAtMomentOfClick === 13) pressScene13();
  else if (screenAtMomentOfClick === 14) pressScene14();
  else if (screenAtMomentOfClick === 15) pressScene15();

  // If a button click successfully changed the screen, reset our safety timer
  if (currentScreen !== screenAtMomentOfClick) {
    lastScreenChangedTime = millis();
  }
}

// Global helper function checking mouse coordinates over a button region
function isMouseOver(x, y, w, h) {
  return (
    mouseX > x - w / 2 &&
    mouseX < x + w / 2 &&
    mouseY > y - h / 2 &&
    mouseY < y + h / 2
  );
}

// Global helper function formatting the game text content layouts
function renderSceneText(title, description) {
  fill(50);
  textSize(24);
  text(title, width / 2, 50);

  textSize(14);
  fill(80);
  text(description, width / 2, 170, 650, 180);
}

// Global helper function rendering standard choice interactive buttons
function renderButton(x, y, label) {
  stroke(0);
  strokeWeight(2);
  fill(isMouseOver(x, y, BTN_W, BTN_H) ? 235 : 255); // Simple grey tint hover highlight
  rect(x, y, BTN_W, BTN_H, 6);

  noStroke();
  fill(0);
  textSize(12);
  text(label, x, y, BTN_W - 10, BTN_H - 5);
}

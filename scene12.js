function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

function drawScene12() {
  renderSceneText(
    "Screen 12: Ending 7 - The Masterful Recovery",
    "You pulled it back from the brink! The ceramides and hyaluronic acid extinguished the active-induced fire, leaving your skin looking plump and resilient.",
  );
  renderButton(width / 2, 380, "Check Scoreboard");
}
function pressScene12() {
  if (isMouseOver(width / 2, 380, BTN_W, BTN_H)) currentScreen = 4;
}

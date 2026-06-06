function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

function drawScene8() {
  renderSceneText(
    "Screen 8: Ending 3 - The Precision Strike",
    "Brilliant move. The targeted BHA flattened the blemish by sunset without irritating the rest of your face. You step onto the red carpet with smooth skin.",
  );
  renderButton(width / 2, 380, "Check Scoreboard");
}
function pressScene8() {
  if (isMouseOver(width / 2, 380, BTN_W, BTN_H)) currentScreen = 4;
}

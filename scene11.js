function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

function drawScene11() {
  renderSceneText(
    "Screen 11: Ending 6 - The Physical Trauma",
    "Oh, the humanity! The scrub micro-tore your already compromised skin. You arrive at the gala with a raw, scratched complexion that stings when the air hits it.",
  );
  renderButton(width / 2, 380, "Seek Consultation");
}
function pressScene11() {
  if (isMouseOver(width / 2, 380, BTN_W, BTN_H)) currentScreen = 5;
}

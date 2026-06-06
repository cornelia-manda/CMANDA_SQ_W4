function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

function drawScene7() {
  renderSceneText(
    "Screen 7: Ending 2 - The Glazed Donut Disaster",
    "You over-slugged. Under the heavy gala lights, the thick balm melts down your face, taking your makeup with it. You don't look radiant; you look greasy.",
  );
  renderButton(width / 2, 380, "Seek Consultation");
}
function pressScene7() {
  if (isMouseOver(width / 2, 380, BTN_W, BTN_H)) currentScreen = 5;
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

function drawScene10() {
  renderSceneText(
    "Screen 10: Ending 5 - The Acid Burn Catastrophe",
    "Layering Vitamin C on top of a peel and retinol was a declaration of war. Your face is tomato-red, stinging, and actively peeling at the gala.",
  );
  renderButton(width / 2, 380, "Seek Consultation");
}
function pressScene10() {
  if (isMouseOver(width / 2, 380, BTN_W, BTN_H)) currentScreen = 5;
}

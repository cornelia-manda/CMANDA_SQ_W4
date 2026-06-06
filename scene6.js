function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

function drawScene6() {
  renderSceneText(
    "Screen 6: Ending 1 - The Balanced Goddess",
    "Your skin looks effortless, plump, and beautifully even-toned. The tinted SPF gave you a 'no-makeup makeup' look that has everyone at the gala asking for your secret.",
  );
  renderButton(width / 2, 380, "Check Scoreboard");
}
function pressScene6() {
  if (isMouseOver(width / 2, 380, BTN_W, BTN_H)) currentScreen = 4;
}

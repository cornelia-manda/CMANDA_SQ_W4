function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

function drawScene14() {
  renderSceneText(
    "Screen 14: The Skincare Guru Ranking",
    "The crowd applauds as you walk by. Your choices proved that you respect your skin barrier. You are officially crowned the Skincare Guru of the Gala!",
  );
  renderButton(width / 2, 380, "Play Again");
}
function pressScene14() {
  if (isMouseOver(width / 2, 380, BTN_W, BTN_H)) currentScreen = 1;
}

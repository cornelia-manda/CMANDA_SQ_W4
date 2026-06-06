function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

function drawScene13() {
  renderSceneText(
    "Screen 13: Ending 8 - The Cool & Collected",
    "The cold hydrogel mask saved the day. It instantly took down the redness and inflammation from your aggressive morning routine. Your skin looks calm and refreshed.",
  );
  renderButton(width / 2, 380, "Seek Consultation");
}
function pressScene13() {
  if (isMouseOver(width / 2, 380, BTN_W, BTN_H)) currentScreen = 5;
}

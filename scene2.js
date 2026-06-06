function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

function drawScene2() {
  renderSceneText(
    "Screen 2: The Minimalist Dilemma",
    "Your skin feels calm and comfortable, but as midday approaches, you notice a distinct lack of 'wow' factor. You are hydrated, but the blemish is still lingering. Select your final touch:",
  );
  renderButton(width / 2 - 160, 340, "A1: Tinted Zinc SPF");
  renderButton(width / 2 + 160, 340, "A2: Slugging Balm");
  renderButton(width / 2 - 160, 410, "C1: 2% BHA Spot Fluid");
  renderButton(width / 2 + 160, 410, "C2: Niacinamide Cream");
}

function pressScene2() {
  if (isMouseOver(width / 2 - 160, 340, BTN_W, BTN_H)) currentScreen = 6;
  if (isMouseOver(width / 2 + 160, 340, BTN_W, BTN_H)) currentScreen = 7;
  if (isMouseOver(width / 2 - 160, 410, BTN_W, BTN_H)) currentScreen = 8;
  if (isMouseOver(width / 2 + 160, 410, BTN_W, BTN_H)) currentScreen = 9;
}

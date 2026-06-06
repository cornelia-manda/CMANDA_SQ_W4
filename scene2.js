function drawScene2() {
  renderSceneText(
    "Screen 2: The Minimalist Dilemma",
    "Your skin feels calm, but as midday approaches, it lacks excitement. The blemish is lingering and you need a boost. Select your midday treatment:",
  );
  renderButton(width / 2 - 160, 340, "A1: Tinted Zinc SPF");
  renderButton(width / 2 + 160, 340, "A2: Slugging Balm");
  renderButton(width / 2 - 160, 410, "C1: 2% BHA Spot Fluid");
  renderButton(width / 2 + 160, 410, "C2: Niacinamide Cream");
}

function pressScene2() {
  // All choices here advance cleanly to Screen 4 for the final prep phase
  if (isMouseOver(width / 2 - 160, 340, BTN_W, BTN_H)) currentScreen = 4;
  if (isMouseOver(width / 2 + 160, 340, BTN_W, BTN_H)) currentScreen = 4;
  if (isMouseOver(width / 2 - 160, 410, BTN_W, BTN_H)) currentScreen = 4;
  if (isMouseOver(width / 2 + 160, 410, BTN_W, BTN_H)) currentScreen = 4;
}

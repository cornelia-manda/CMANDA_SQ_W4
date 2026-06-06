function drawScene2() {
  renderSceneText(
    "Screen 2: The Minimalist Path",
    "You choose to protect your skin barrier. By noon, your face is calm, but it's looking a bit flat and dull. How do you want to restore your glow?",
  );
  renderButton(width / 2 - 160, 380, "A1: Use a Hydrating Serum");
  renderButton(width / 2 + 160, 380, "A2: Use a Brightening Serum");
}

function pressScene2() {
  if (isMouseOver(width / 2 - 160, 380, BTN_W, BTN_H)) currentScreen = 4;
  if (isMouseOver(width / 2 + 160, 380, BTN_W, BTN_H)) currentScreen = 5;
}

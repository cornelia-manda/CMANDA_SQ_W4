function drawScene6() {
  renderSceneText(
    "Screen 6: Maximalist + Vitamin C Prep",
    "It's 5:00 PM. Your face is warm and slightly red from combining intense acids. How do you plan to stabilize your look for the cameras?",
  );
  renderButton(width / 2 - 160, 380, "Scrub with a Physical Exfoliant");
  renderButton(width / 2 + 160, 380, "Pack on Thick Concealer Over Redness");
}

function pressScene6() {
  if (isMouseOver(width / 2 - 160, 380, BTN_W, BTN_H)) currentScreen = 12;
  if (isMouseOver(width / 2 + 160, 380, BTN_W, BTN_H)) currentScreen = 13;
}

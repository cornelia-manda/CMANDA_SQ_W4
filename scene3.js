function drawScene3() {
  renderSceneText(
    "Screen 3: The Maximalist Path",
    "You attack the blemishes with heavy chemical actives. By noon, your skin is tingling uncomfortably. How do you handle this?",
  );
  renderButton(width / 2 - 160, 380, "B1: Add Vitamin C for Extra Glow");
  renderButton(width / 2 + 160, 380, "B2: Apply a Rich Ceramide Cream");
}

function pressScene3() {
  if (isMouseOver(width / 2 - 160, 380, BTN_W, BTN_H)) currentScreen = 6;
  if (isMouseOver(width / 2 + 160, 380, BTN_W, BTN_H)) currentScreen = 7;
}

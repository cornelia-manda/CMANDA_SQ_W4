function drawScene8() {
  renderSceneText(
    "Screen 8: Ending 3 - The Precision Strike",
    "Brilliant move. The targeted BHA flattened the blemish by sunset without irritating the rest of your face. You step onto the red carpet with smooth, clear skin and absolute confidence.",
  );
  renderButton(width / 2, 380, "See Your Final Gala Rank");
}

function pressScene8() {
  if (isMouseOver(width / 2, 380, BTN_W, BTN_H)) currentScreen = 14;
}

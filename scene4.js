function drawScene4() {
  renderSceneText(
    "Screen 4: The Ultimate Barrier Scoreboard",
    "This screen tracks your overall skin health based on your choices before entering the gala doors. Ready to review your standing?",
  );
  renderButton(width / 2, 380, "Proceed to Scoreboard");
}
function pressScene4() {
  if (isMouseOver(width / 2, 380, BTN_W, BTN_H)) currentScreen = 14;
}

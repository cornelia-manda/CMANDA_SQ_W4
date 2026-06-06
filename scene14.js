function drawScene14() {
  renderSceneText(
    "Screen 14: Ending 7 - The Masterful Rescue",
    "The chilled sheet mask completely extinguished the active-induced fire. Your skin looks surprisingly glassy, calm, and saved right in the nick of time. A tactical victory!",
  );
  renderButton(width / 2, 380, "Play Again");
}
function pressScene14() {
  if (isMouseOver(width / 2, 380, BTN_W, BTN_H)) currentScreen = 1;
}

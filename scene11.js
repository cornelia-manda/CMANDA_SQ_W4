function drawScene11() {
  renderSceneText(
    "Screen 11: Ending 4 - Liquid Sunshine",
    "The luminous setting spray locked in your brightened skin tone flawlessly. You are turning heads all night with a pristine, lit-from-within complexion. Excellent choices!",
  );
  renderButton(width / 2, 380, "Play Again");
}
function pressScene11() {
  if (isMouseOver(width / 2, 380, BTN_W, BTN_H)) currentScreen = 1;
}

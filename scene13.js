function drawScene13() {
  renderSceneText(
    "Screen 13: Ending 6 - The Cake-Makeup Mask",
    "The thick concealer temporarily masked the redness, but the underlying acid irritation made your makeup peel off in patches by midnight. Time for a long skin-healing sabbatical.",
  );
  renderButton(width / 2, 380, "Restart Game");
}
function pressScene13() {
  if (isMouseOver(width / 2, 380, BTN_W, BTN_H)) currentScreen = 1;
}

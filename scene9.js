function drawScene9() {
  renderSceneText(
    "Screen 9: Ending 2 - Clean-Girl Icon",
    "Brilliant! The tinted SPF blended perfectly into your healthy skin. You step onto the red carpet looking completely effortless, dewy, and radiant. A perfect win!",
  );
  renderButton(width / 2, 380, "Play Again");
}
function pressScene9() {
  if (isMouseOver(width / 2, 380, BTN_W, BTN_H)) currentScreen = 1;
}

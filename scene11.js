function drawScene11() {
  renderSceneText(
    "Screen 11: Ending 6 - The Physical Trauma",
    "Oh, the humanity! The scrub micro-tore your already compromised skin. You arrive at the gala with a raw, scratched complexion that stings even when the air hits it. Time for a weeks-long skincare sabbatical.",
  );
  renderButton(width / 2, 380, "Go to the Recovery Room");
}

function pressScene11() {
  if (isMouseOver(width / 2, 380, BTN_W, BTN_H)) currentScreen = 15;
}

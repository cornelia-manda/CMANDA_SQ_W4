function drawScene5() {
  renderSceneText(
    "Screen 5: The Esthetician's Consultation",
    "This screen reviews your high-risk strategy and prepares you for the red carpet. Ready to face the consequences?",
  );
  renderButton(width / 2, 380, "Proceed to Consultation");
}
function pressScene5() {
  if (isMouseOver(width / 2, 380, BTN_W, BTN_H)) currentScreen = 15;
}

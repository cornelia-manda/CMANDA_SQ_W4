function drawScene15() {
  renderSceneText(
    "Screen 15: Ending 8 - The Melting Donut",
    "You over-slugged! Under the heavy gala spotlights, the thick ointment melts entirely down your collar, taking your clothes and confidence with it. Too much moisture!",
  );
  renderButton(width / 2, 380, "Restart Game");
}
function pressScene15() {
  if (isMouseOver(width / 2, 380, BTN_W, BTN_H)) currentScreen = 1;
}

function drawScene8() {
  renderSceneText(
    "Screen 8: Ending 1 - The Matte Mirage",
    "The heavy makeup mixed poorly with your super-hydrated base. By the time you reach the gala, your foundation looks cakey and separated. Next time, let your skin breathe!",
  );
  renderButton(width / 2, 380, "Restart Game");
}
function pressScene8() {
  if (isMouseOver(width / 2, 380, BTN_W, BTN_H)) currentScreen = 1;
}

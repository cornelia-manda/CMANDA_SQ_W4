function drawScene10() {
  renderSceneText(
    "Screen 10: Ending 3 - The Flat Velvet Finish",
    "The matte powder flattened your natural light. You look smooth, but completely devoid of any red-carpet glow under the flash photography. A safe, but slightly boring finish.",
  );
  renderButton(width / 2, 380, "Restart Game");
}
function pressScene10() {
  if (isMouseOver(width / 2, 380, BTN_W, BTN_H)) currentScreen = 1;
}

function drawScene5() {
  renderSceneText(
    "Screen 5: Late Afternoon Prep (Brightening Branch)",
    "The sun is setting. Your targeted treatments have set in, but you need a final base strategy. Do you mattify the skin or use a luminous setting spray?",
  );
  renderButton(width / 2 - 160, 380, "Apply Heavy Matte Powder");
  renderButton(width / 2 + 160, 380, "Mist with Luminous Spray");
}

function pressScene5() {
  if (isMouseOver(width / 2 - 160, 380, BTN_W, BTN_H)) currentScreen = 8; // Smooth Ending 3
  if (isMouseOver(width / 2 + 160, 380, BTN_W, BTN_H)) currentScreen = 9; // Glowing Ending 4
}

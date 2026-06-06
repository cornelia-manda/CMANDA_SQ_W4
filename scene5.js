function drawScene5() {
  renderSceneText(
    "Screen 5: Minimalist + Brightening Prep",
    "It's 5:00 PM. Your complexion is smooth, even-toned, and calm. Let's finish your baseline style before walking out the door:",
  );
  renderButton(width / 2 - 160, 380, "Set Face with Heavy Matte Powder");
  renderButton(width / 2 + 160, 380, "Mist with a Luminous Mist Spray");
}

function pressScene5() {
  if (isMouseOver(width / 2 - 160, 380, BTN_W, BTN_H)) currentScreen = 10;
  if (isMouseOver(width / 2 + 160, 380, BTN_W, BTN_H)) currentScreen = 11;
}

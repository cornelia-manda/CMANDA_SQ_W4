function drawScene3() {
  renderSceneText(
    "Screen 3: The Maximalist Danger",
    "You used a glycolic acid peel followed by a heavy dose of retinol. Your skin is definitely awake, but now it’s tingling dangerously and looking a bit flushed. Quick, choose your savior!",
  );
  renderButton(width / 2 - 160, 340, "B1: Heavy Vitamin C");
  renderButton(width / 2 + 160, 340, "B2: Apricot Scrub");
  renderButton(width / 2 - 160, 410, "D1: Hyaluronic & Ceramides");
  renderButton(width / 2 + 160, 410, "D2: Cold Hydrogel Mask");
}

function pressScene3() {
  if (isMouseOver(width / 2 - 160, 340, BTN_W, BTN_H)) currentScreen = 10;
  if (isMouseOver(width / 2 + 160, 340, BTN_W, BTN_H)) currentScreen = 11;
  if (isMouseOver(width / 2 - 160, 410, BTN_W, BTN_H)) currentScreen = 12;
  if (isMouseOver(width / 2 + 160, 410, BTN_W, BTN_H)) currentScreen = 13;
}

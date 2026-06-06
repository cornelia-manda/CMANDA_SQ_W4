function drawScene3() {
  renderSceneText(
    "Screen 3: The Maximalist Danger",
    "You used a heavy peel and retinol. Your skin is tingling dangerously and looking flushed under the midday sun. Quick, choose your intervention:",
  );
  renderButton(width / 2 - 160, 340, "B1: Heavy Vitamin C");
  renderButton(width / 2 + 160, 340, "B2: Apricot Scrub");
  renderButton(width / 2 - 160, 410, "D1: Hyaluronic Acid");
  renderButton(width / 2 + 160, 410, "D2: Cold Hydrogel Mask");
}

function pressScene3() {
  // All choices here advance cleanly to Screen 5 for the emergency recovery phase
  if (isMouseOver(width / 2 - 160, 340, BTN_W, BTN_H)) currentScreen = 5;
  if (isMouseOver(width / 2 + 160, 340, BTN_W, BTN_H)) currentScreen = 5;
  if (isMouseOver(width / 2 - 160, 410, BTN_W, BTN_H)) currentScreen = 5;
  if (isMouseOver(width / 2 + 160, 410, BTN_W, BTN_H)) currentScreen = 5;
}

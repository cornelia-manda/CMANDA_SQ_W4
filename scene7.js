function drawScene7() {
  renderSceneText(
    "Screen 7: Ending 2 - The Glazed Donut Disaster",
    "You over-slugged. Under the heavy gala lights, the thick balm melts down your face, taking your makeup with it. You don't look radiant; you look like you just finished a marathon inside a sauna.",
  );
  renderButton(width / 2, 380, "Go to the Recovery Room");
}

function pressScene7() {
  if (isMouseOver(width / 2, 380, BTN_W, BTN_H)) currentScreen = 15;
}

function drawScene7() {
  renderSceneText(
    "Screen 7: Maximalist + Ceramide Prep",
    "It's 5:00 PM. The calming ceramides successfully managed the intense tingling sensation. What is your absolute final adjustment?",
  );
  renderButton(width / 2 - 160, 380, "Apply a Chilled Gel Sheet Mask");
  renderButton(width / 2 + 160, 380, "Slap a Slugging Balm Over Everything");
}

function pressScene7() {
  if (isMouseOver(width / 2 - 160, 380, BTN_W, BTN_H)) currentScreen = 14;
  if (isMouseOver(width / 2 + 160, 380, BTN_W, BTN_H)) currentScreen = 15;
}

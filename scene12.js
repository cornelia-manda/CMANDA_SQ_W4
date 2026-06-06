function drawScene12() {
  renderSceneText(
    "Screen 12: Ending 7 - The Masterful Recovery",
    "You pulled it back from the brink! The ceramides and hyaluronic acid extinguished the active-induced fire, leaving your skin looking plump, resilient, and surprisingly glassy. A triumph of emergency dermatology.",
  );
  renderButton(width / 2, 380, "See Your Final Gala Rank");
}

function pressScene12() {
  if (isMouseOver(width / 2, 380, BTN_W, BTN_H)) currentScreen = 14;
}

function drawScene1() {
  renderSceneText(
    "Screen 1: The Morning After",
    "You wake up, look in the mirror, and gasp. Tonight is the Gala of the Century, but your skin is throwing a massive tantrum. It looks dull, a rogue blemish is forming on your cheek, and your forehead feels like parchment paper. Choose your approach:",
  );
  renderButton(width / 2 - 160, 380, "A: The Minimalist Routine");
  renderButton(width / 2 + 160, 380, "B: The Maximalist Attack");
}

function pressScene1() {
  if (isMouseOver(width / 2 - 160, 380, BTN_W, BTN_H)) currentScreen = 2; // Moves to Choice 2 (Min)
  if (isMouseOver(width / 2 + 160, 380, BTN_W, BTN_H)) currentScreen = 3; // Moves to Choice 2 (Max)
}

function drawScene12() {
  renderSceneText(
    "Screen 12: Ending 5 - Total Skin Overload",
    "Disaster! Scrubbing sensitive, irritated skin caused visible scratching and deep flaking. You spend the whole gala hiding in the bathroom stall with a stinging face.",
  );
  renderButton(width / 2, 380, "Restart Game");
}
function pressScene12() {
  if (isMouseOver(width / 2, 380, BTN_W, BTN_H)) currentScreen = 1;
}

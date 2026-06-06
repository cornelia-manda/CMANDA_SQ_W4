function drawScene15() {
  renderSceneText(
    "Screen 15: The Recovery Room",
    "You spend the night applying ice packs in the bathroom. Your choices taught you a valuable lesson: skincare is a marathon, not a sprint. Tomorrow, we focus on healing.",
  );
  renderButton(width / 2, 380, "Play Again");
}
function pressScene15() {
  if (isMouseOver(width / 2, 380, BTN_W, BTN_H)) currentScreen = 1;
}

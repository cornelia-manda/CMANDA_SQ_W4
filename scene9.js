function drawScene9() {
  renderSceneText(
    "Screen 9: Ending 4 - The Plump Protagonist",
    "The niacinamide worked its magic. Your skin barrier is thriving, your tone is perfectly even, and you radiate health. Everyone loves your lit-from-within glow.",
  );
  renderButton(width / 2, 380, "Check Scoreboard");
}
function pressScene9() {
  if (isMouseOver(width / 2, 380, BTN_W, BTN_H)) currentScreen = 4;
}

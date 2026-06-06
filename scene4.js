function drawScene4() {
  renderSceneText(
    "Screen 4: Minimalist + Hydration Prep",
    "It's 5:00 PM. Your skin is incredibly plump and juicy, but your blemish is still barely visible. Time for your final makeup prep layer:",
  );
  renderButton(width / 2 - 160, 380, "Apply High-Coverage Foundation");
  renderButton(width / 2 + 160, 380, "Keep it Sheer with a Tinted SPF");
}

function pressScene4() {
  if (isMouseOver(width / 2 - 160, 380, BTN_W, BTN_H)) currentScreen = 8;
  if (isMouseOver(width / 2 + 160, 380, BTN_W, BTN_H)) currentScreen = 9;
}

function drawScene4() {
  renderSceneText(
    "Screen 4: Late Afternoon Prep (Hydration Branch)",
    "It's 5:00 PM. Time to lock in your look before the limo arrives. Do you want to layer on heavy glam makeup, or keep it light and dewy?",
  );
  renderButton(width / 2 - 160, 380, "Go for Full Glam Makeup");
  renderButton(width / 2 + 160, 380, "Keep it Light & Dewy");
}

function pressScene4() {
  if (isMouseOver(width / 2 - 160, 380, BTN_W, BTN_H)) currentScreen = 7; // Melts into Ending 2
  if (isMouseOver(width / 2 + 160, 380, BTN_W, BTN_H)) currentScreen = 6; // Perfect Ending 1
}

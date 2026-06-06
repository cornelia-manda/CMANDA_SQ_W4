function drawScene4() {
  renderSceneText(
    "Screen 4: Late Afternoon Prep (Minimalist Track)",
    "It's 5:00 PM. The limo is arriving soon. How do you want to style your hydrated base for the cameras?",
  );
  renderButton(width / 2 - 160, 340, "Go for Full Glam Makeup");
  renderButton(width / 2 + 160, 340, "Keep it Sheer & Dewy");
  renderButton(width / 2 - 160, 410, "Apply Heavy Matte Powder");
  renderButton(width / 2 + 160, 410, "Mist Luminous Setting Spray");
}

function pressScene4() {
  if (isMouseOver(width / 2 - 160, 340, BTN_W, BTN_H)) currentScreen = 6; // Ending 1
  if (isMouseOver(width / 2 + 160, 340, BTN_W, BTN_H)) currentScreen = 7; // Ending 2
  if (isMouseOver(width / 2 - 160, 410, BTN_W, BTN_H)) currentScreen = 8; // Ending 3
  if (isMouseOver(width / 2 + 160, 410, BTN_W, BTN_H)) currentScreen = 9; // Ending 4
}

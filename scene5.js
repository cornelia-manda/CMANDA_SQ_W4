function drawScene5() {
  renderSceneText(
    "Screen 5: Emergency Protocols (Maximalist Track)",
    "It's 5:00 PM. Your face is reacting to your midday choices. You need to make one absolute final adjustment before stepping out the door.",
  );
  renderButton(width / 2 - 160, 340, "Layer on Thick Concealer");
  renderButton(width / 2 + 160, 340, "Ice Your Face Aggressively");
  renderButton(width / 2 - 160, 410, "Apply a Barrier Recovery Ointment");
  renderButton(width / 2 + 160, 410, "Do Nothing and Hope for the Best");
}

function pressScene5() {
  if (isMouseOver(width / 2 - 160, 340, BTN_W, BTN_H)) currentScreen = 10; // Ending 5
  if (isMouseOver(width / 2 + 160, 340, BTN_W, BTN_H)) currentScreen = 11; // Ending 6
  if (isMouseOver(width / 2 - 160, 410, BTN_W, BTN_H)) currentScreen = 12; // Ending 7
  if (isMouseOver(width / 2 + 160, 410, BTN_W, BTN_H)) currentScreen = 13; // Ending 8
}

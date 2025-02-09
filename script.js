let clickCount = 0;
let bulletPosition = Math.floor(Math.random() * 6); // Posizione casuale del proiettile

document.getElementById("playButton").addEventListener("click", function () {
  clickCount++;
  const status = document.getElementById("status");
  const result = document.getElementById("result");

  // Se il proiettile non è uscito
  if (clickCount < 6) {
    if (clickCount === bulletPosition) {
      result.textContent = "BANG! Hai perso!";
      status.textContent = "Game Over!";
      document.getElementById("playButton").disabled = true;
    } else {
      result.textContent = `Turno ${clickCount}: Sicuro!`;
      status.textContent = `Premi il tasto per il prossimo turno!`;
    }
  } else {
    result.textContent = "BANG! Hai perso!";
    status.textContent = "Game Over!";
    document.getElementById("playButton").disabled = true;
  }
});
